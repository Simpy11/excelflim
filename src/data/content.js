// Replace these layout placeholders with verified Excel Media client materials.
// Only the six flagship titles named in the client redesign brief are available here.
// The other nine slots remain visibly pending until the full filmography is supplied.
export const films = [
  { title: 'UP Tourism', client: 'UP Tourism' },
  { title: 'Air India Entertainment', client: 'Air India Entertainment' },
  { title: 'HCL', client: 'HCL', year: '2017' },
  { title: 'Petronet LNG', client: 'Petronet LNG' },
  { title: 'RICS at 150 years', client: 'RICS' },
  { title: "Himachal Pradesh Global Investors’ Meet", client: 'Himachal Pradesh Global Investors’ Meet', year: '2019' },
  ...Array.from({ length: 9 }, (_, i) => ({ title: `Film credit to be supplied ${String(i + 7).padStart(2, '0')}`, pending: true })),
]

export const services = [
  ['01', 'Films', 'Full-service film and television production, from research and story development through filming and finishing.', 'Research · Story development · Camera · Editorial · Sound · VFX'],
  ['02', 'Pre-production', 'Turn a creative brief into a practical production plan, with local knowledge at every stage.', 'Location scouting · Permits · Clearances · Casting · Scheduling'],
  ['03', 'Production logistics', 'Coordinate crews, travel, accommodation and equipment with clear communication on the ground.', 'Crew · Customs · Carnets · Hotels · Transfers · Gear'],
  ['04', 'Post-production', 'Flexible post support for editorial, sound, colour, VFX and delivery.', 'Editing · Sound · Voice · Music · Colour · Delivery'],
]

export const images = [
  ['https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1300&q=85', 'Temporary cinematic production image'],
  ['https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1300&q=85', 'Temporary cinematic production image'],
  ['https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1300&q=85', 'Temporary cinematic production image'],
  ['https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1300&q=85', 'Temporary cinematic production image'],
  ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1300&q=85', 'Temporary cinematic production image'],
  ['https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1300&q=85', 'Temporary cinematic production image'],
  ['https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1300&q=85', 'Temporary cinematic production image'],
  ['https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1300&q=85', 'Temporary cinematic production image'],
  ['https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1300&q=85', 'Temporary cinematic production image'],
  ['https://images.unsplash.com/photo-1485470733090-0aae1788d5af?auto=format&fit=crop&w=1300&q=85', 'Temporary cinematic production image'],
  ['https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1300&q=85', 'Temporary cinematic production image'],
]

export const team = Array.from({ length: 9 }, (_, i) => ({
  number: String(i + 1).padStart(2, '0'),
  name: ['Rakesh Jha', 'James Routh', 'Uttama Pandit', 'Rohit Dhikyawar', 'Parthasarathy Ghosh', 'Santosh Singh'][i] || 'Team profile to be supplied',
  biography: 'Role and biography to be supplied from verified client information.',
}))
