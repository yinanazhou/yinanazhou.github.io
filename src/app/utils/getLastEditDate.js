import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const CACHE_FILE = path.resolve('.cache/lastEditDate.txt');

export function getLastEditDate() {
  if (fs.existsSync(CACHE_FILE)) {
    return fs.readFileSync(CACHE_FILE, 'utf-8');
  }

  try {
    // Get the last git commit timestamp (e.g., "2024-12-13 15:30:45 +0000")
    const lastEditDate = execSync('git log -1 --format=%ci').toString().trim();

    // Split the date and time into separate parts and convert it into a valid date format
    const [date, time, timezone] = lastEditDate.split(' '); // "2024-12-13 15:30:45 +0000"
    const formattedDate = new Date(
      `${date}T${time}${timezone}`
    ).toLocaleDateString('en-CA', {
      year: 'numeric',
      month: '2-digit',
    });

    // Save to the cache file
    try {
      fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
      fs.writeFileSync(CACHE_FILE, formattedDate, 'utf-8');
      console.log(`Cache file created at: ${CACHE_FILE}`);
    } catch (fileError) {
      console.error('Error creating cache file:', fileError);
    }

    return formattedDate;
  } catch (error) {
    console.error('Error fetching last edit date:', error);
    return 'Unknown';
  }
}
