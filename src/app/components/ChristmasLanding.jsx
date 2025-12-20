'use client';

import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Center, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

// Helper to generate tree points
const generateTreePoints = (count) => {
  const points = new Float32Array(count * 3);
  const dispersedPoints = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  const gold = new THREE.Color('#ffd700');
  const white = new THREE.Color('#ffffff');
  const emerald = new THREE.Color('#50c878');

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    // Tree shape
    const height = Math.random();
    const radius = Math.pow(1 - height, 1.5) * 2.5;
    const angle = height * Math.PI * 30 + Math.random() * 0.5;
    const volume = Math.random() * 0.2;

    points[i3] = Math.cos(angle) * (radius + volume);
    points[i3 + 1] = height * 6 - 3;
    points[i3 + 2] = Math.sin(angle) * (radius + volume);

    // Dispersed shape
    const dRadius = 6 + Math.random() * 6;
    const dPhi = Math.acos(2 * Math.random() - 1);
    const dTheta = 2 * Math.PI * Math.random();

    dispersedPoints[i3] = dRadius * Math.sin(dPhi) * Math.cos(dTheta);
    dispersedPoints[i3 + 1] = dRadius * Math.sin(dPhi) * Math.sin(dTheta);
    dispersedPoints[i3 + 2] = dRadius * Math.cos(dPhi);

    // Elegant colors
    const mix = Math.random();
    let color;
    if (mix > 0.8) color = gold;
    else if (mix > 0.4) color = emerald;
    else color = white;

    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;

    // Larger "ornament" particles randomly
    sizes[i] = Math.random() > 0.95 ? 0.3 : 0.12;
  }

  return { points, dispersedPoints, colors, sizes };
};

const ParticleTree = ({ isAssembled, rotationY }) => {
  const count = 6000;
  const { points, dispersedPoints, colors, sizes } = useMemo(
    () => generateTreePoints(count),
    []
  );
  const pointsRef = useRef();
  const groupRef = useRef();
  const currentPositions = useRef(new Float32Array(count * 3));

  useEffect(() => {
    for (let i = 0; i < count * 3; i++) {
      currentPositions.current[i] = dispersedPoints[i];
    }
  }, [dispersedPoints]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const target = isAssembled ? points : dispersedPoints;
    const positions = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count * 3; i++) {
      currentPositions.current[i] = THREE.MathUtils.lerp(
        currentPositions.current[i],
        target[i],
        0.04
      );
      positions[i] = currentPositions.current[i];
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        rotationY,
        0.05
      );
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  const shaderArgs = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
      fragmentShader: `
      varying vec3 vColor;
      void main() {
        float strength = distance(gl_PointCoord, vec2(0.5));
        strength = 1.0 - strength;
        strength = pow(strength, 3.0);
        gl_FragColor = vec4(vColor, strength);
      }
    `,
    }),
    []
  );

  return (
    <group ref={groupRef}>
      <StarTop active={isAssembled} />
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={new Float32Array(count * 3)}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={colors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={count}
            array={sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <shaderMaterial
          args={[shaderArgs]}
          transparent
          vertexColors
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
};

const SnowParticles = ({ count = 1000 }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = Math.random() * 20 - 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, [count]);

  const ref = useRef();
  useFrame((state, delta) => {
    for (let i = 0; i < count; i++) {
      ref.current.geometry.attributes.position.array[i * 3 + 1] -= delta * 0.5;
      if (ref.current.geometry.attributes.position.array[i * 3 + 1] < -10) {
        ref.current.geometry.attributes.position.array[i * 3 + 1] = 10;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="white"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const StarTop = ({ active }) => {
  const meshRef = useRef();

  const starGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const points = 5;
    const outerRadius = 0.18; // Further reduced
    const innerRadius = 0.07; // Further reduced
    const angle = Math.PI / points;

    for (let i = 0; i < 2 * points; i++) {
      const r = i % 2 === 0 ? outerRadius : innerRadius;
      const x = r * Math.sin(i * angle);
      const y = r * Math.cos(i * angle);
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();

    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.02,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.04,
      bevelOffset: 0,
      bevelSegments: 10,
    });
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
      meshRef.current.scale.setScalar(
        THREE.MathUtils.lerp(meshRef.current.scale.x, active ? 1 : 0, 0.05)
      );
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 3.05, 0]} geometry={starGeometry}>
      <meshStandardMaterial
        color="#ffd700"
        emissive="#ffd700"
        emissiveIntensity={4}
        metalness={1}
        roughness={0.2}
      />
    </mesh>
  );
};

const ChristmasLanding = ({ onEnter }) => {
  const [isAssembled, setIsAssembled] = useState(true);
  const [rotationY, setRotationY] = useState(0);
  const lastTouch = useRef({ x: 0, y: 0 });
  const startTouch = useRef({ x: 0, y: 0 });
  const isMoving = useRef(false);

  const handlePointerDown = (e) => {
    isMoving.current = true;
    const x = e.clientX || e.touches?.[0].clientX;
    const y = e.clientY || e.touches?.[0].clientY;
    lastTouch.current = { x, y };
    startTouch.current = { x, y };
  };

  const handlePointerMove = (e) => {
    if (!isMoving.current) return;

    const currentX = e.clientX || e.touches?.[0].clientX;
    const currentY = e.clientY || e.touches?.[0].clientY;

    const deltaX = currentX - lastTouch.current.x;
    const totalDeltaY = currentY - startTouch.current.y;

    // Horizontal rotation based on frame delta for smoothness
    setRotationY((prev) => prev + deltaX * 0.01);

    // Vertical toggle based on total gesture distance for reliability
    if (Math.abs(totalDeltaY) > 50) {
      if (totalDeltaY < 0) setIsAssembled(true);
      else setIsAssembled(false);
    }

    lastTouch.current = { x: currentX, y: currentY };
  };

  const handlePointerUp = () => {
    isMoving.current = false;
  };

  // Add mouse wheel support for better desktop experience
  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        setRotationY((prev) => prev + e.deltaX * 0.01);
      } else {
        if (e.deltaY < 0) setIsAssembled(true);
        else setIsAssembled(false);
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black overflow-hidden flex flex-col items-center justify-center touch-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div className="absolute inset-0 cursor-move">
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
          <color attach="background" args={['#050505']} />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <SnowParticles count={800} />
          <ParticleTree isAssembled={isAssembled} rotationY={rotationY} />
        </Canvas>
      </div>

      <div className="absolute bottom-10 z-10 flex flex-col items-center gap-4 px-4 text-center">
        <p className="text-neutral-400 text-sm animate-pulse">
          <span className="block md:inline">Swipe left/right to rotate</span>
          <span className="hidden md:inline mx-2">•</span>
          <span className="block md:inline">
            Swipe up/down to assemble/disperse
          </span>
        </p>
        <button
          onClick={onEnter}
          className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-xl hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.5)] active:scale-95"
        >
          ENTER
        </button>
      </div>
    </motion.div>
  );
};

export default ChristmasLanding;
