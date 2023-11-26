import fs from 'fs/promises';

export async function getComingEvents() {
  const rawFileContent = await fs.readFile('coming-events.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const comingEvents = data.events ?? [];
  return comingEvents;
}