'use client';
import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import * as d3 from 'd3';
import SK_CONTENT from '../content/skillContent';

const SkillSection = () => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Function to update dimensions
  const updateDimensions = () => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  };

  // Handle window resize
  useEffect(() => {
    updateDimensions();
    const handleResize = () => {
      updateDimensions();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll('*').remove();

    const labelStyle =
      'text-sm fill-primary-800 dark:fill-primary-400 font-bold';
    const gridStyle = 'stroke-neutral-300 dark:stroke-neutral-700';

    const svg = d3.select(svgRef.current);

    // Calculate scales based on viewport size
    const xScale = d3
      .scaleLinear()
      .domain([-100, 100])
      .range([0, dimensions.width]);

    const yScale = d3
      .scaleLinear()
      .domain([-100, 100])
      .range([dimensions.height, 0]);

    // Define an elliptical clipping path
    svg
      .append('defs')
      .append('clipPath')
      .attr('id', 'ellipse-clip')
      .append('ellipse')
      .attr('cx', dimensions.width / 2)
      .attr('cy', dimensions.height / 2)
      .attr('rx', dimensions.width * 0.48)
      .attr('ry', dimensions.height * 0.45);

    // Add grid lines
    // Vertical grid lines
    const verticalGridLines = svg
      .append('g')
      .attr('class', 'grid-lines')
      .attr('clip-path', 'url(#ellipse-clip)');
    const verticalLines = [-75, -50, -25, 0, 25, 50, 75]; // Adjust these values to control grid line positions
    verticalLines.forEach((value) => {
      verticalGridLines
        .append('line')
        .attr('x1', xScale(value))
        .attr('y1', 0)
        .attr('x2', xScale(value))
        .attr('y2', dimensions.height)
        .attr('class', gridStyle)
        .attr('stroke-dasharray', '4,4') // Creates dashed line
        .attr('stroke-width', 1.5);
    });

    // Horizontal grid lines
    const horizontalGridLines = svg
      .append('g')
      .attr('class', 'grid-lines')
      .attr('clip-path', 'url(#ellipse-clip)');
    const horizontalLines = [-75, -50, -25, 0, 25, 50, 75]; // Adjust these values to control grid line positions
    horizontalLines.forEach((value) => {
      horizontalGridLines
        .append('line')
        .attr('x1', 0)
        .attr('y1', yScale(value))
        .attr('x2', dimensions.width)
        .attr('y2', yScale(value))
        .attr('class', gridStyle)
        .attr('stroke-dasharray', '4,4') // Creates dashed line
        .attr('stroke-width', 1);
    });

    // Add center + symbol
    svg
      .append('text')
      .attr('x', dimensions.width / 2)
      .attr('y', dimensions.height / 2)
      .attr('dy', '0.3em')
      .attr('text-anchor', 'middle')
      .attr('class', labelStyle)
      .text('+');

    // Add labels
    // Top label
    svg
      .append('text')
      .attr('x', dimensions.width / 2)
      .attr('y', 20)
      .attr('text-anchor', 'middle')
      .attr('class', labelStyle)
      .text('← Framework →');

    // Bottom label
    svg
      .append('text')
      .attr('x', dimensions.width / 2)
      .attr('y', dimensions.height - 20)
      .attr('text-anchor', 'middle')
      .attr('class', labelStyle)
      .text('← Language →');

    // Left label
    svg
      .append('text')
      .attr('transform', `rotate(-90) translate(${-dimensions.height / 2}, 20)`)
      .attr('text-anchor', 'middle')
      .attr('class', labelStyle)
      .text('← Web →');

    // Right label
    svg
      .append('text')
      .attr(
        'transform',
        `rotate(90) translate(${dimensions.height / 2}, ${-dimensions.width + 20})`
      )
      .attr('text-anchor', 'middle')
      .attr('class', labelStyle)
      .text('← Toolkit →');

    // Add skills
    const skillGroups = svg
      .selectAll('g.skill')
      .data(SK_CONTENT)
      .enter()
      .append('g')
      .attr('class', 'skill')
      .attr(
        'transform',
        `translate(${dimensions.width / 2}, ${dimensions.height / 2})`
      ); // Start at center

    // Add skill icons
    skillGroups.each(function (d) {
      const group = d3.select(this);

      // Add hover effects
      group
        .on('mouseenter', function () {
          const currentTransform = this.getAttribute('transform');
          const translateMatch = currentTransform.match(/translate\(([^)]+)\)/);
          if (translateMatch) {
            const [x, y] = translateMatch[1].split(',');
            d3.select(this)
              .transition()
              .duration(200)
              .attr('transform', `translate(${x},${y}) scale(1.1) rotate(5)`)
              .style('cursor', 'pointer');
          }
        })
        .on('mouseleave', function () {
          const currentTransform = this.getAttribute('transform');
          const translateMatch = currentTransform.match(/translate\(([^)]+)\)/);
          if (translateMatch) {
            const [x, y] = translateMatch[1].split(',');
            d3.select(this)
              .transition()
              .duration(200)
              .attr('transform', `translate(${x},${y})`);
          }
        });
      const iconContainer = group
        .append('foreignObject')
        .attr('width', 120)
        .attr('height', 80)
        .attr('x', -60)
        .attr('y', -40);

      const div = iconContainer
        .append('xhtml:div')
        .attr(
          'class',
          'flex flex-col items-center justify-center w-full h-full'
        );

      div
        .append('img')
        .attr('src', d.iconPath)
        .attr('alt', `${d.name} icon`)
        .attr('class', 'w-6 h-6 md:w-10 md:h-10 object-contain');

      div
        .append('span')
        .attr(
          'class',
          'text-sm mt-1 text-center text-neutral-900 dark:text-neutral-100 whitespace-normal break-words px-1'
        )
        .text(d.name);
    });

    // Updated animation

    if (isInView) {
      skillGroups
        .style('opacity', 0)
        .transition()
        .duration(1000)
        .delay((d, i) => i * 100)
        .style('opacity', 1)
        .attr('transform', function (d) {
          const x = xScale(d.x);
          const y = yScale(d.y);
          return `translate(${x}, ${y})`;
        })
        .ease(d3.easeElasticOut.amplitude(1).period(0.7));
    }
  }, [dimensions, isInView]);

  return (
    <section className="min-h-[80vh] flex flex-col" id="skill">
      <div className="mt-4 md:mt-0 text-left flex flex-col flex-1 border border-neutral-300 border-l-transparent border-r-transparent border-b-transparent dark:border-[#33353F] dark:border-l-transparent dark:border-r-transparent dark:border-b-transparent mb-16">
        <h2 className="w-full font-noto txt-color-primary text-center text-4xl font-bold mt-16 mb-4">
          Skills
        </h2>
        <div ref={containerRef} className="relative h-[80vh] w-full mx-auto">
          <svg
            ref={svgRef}
            width="100%"
            height="100%"
            className="overflow-visible"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
