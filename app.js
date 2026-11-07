const guides = [
  { id: 'burns', title: 'Minor Burns', category: 'Trauma', steps: ['Cool the burn under cool running water for 10-20 mins[cite: 1].', 'Remove rings or tight items before swelling starts.', 'Cover loosely with sterile plastic wrap or clean cloth.'] },
  { id: 'cuts', title: 'Cuts & Bleeding', category: 'Trauma', steps: ['Apply direct pressure with a clean cloth or bandage[cite: 1].', 'Elevate the wound above the heart if possible.', 'Clean with mild soap and water once bleeding stops.'] },
  { id: 'sprains', title: 'Sprains & Strains', category: 'Trauma', steps: ['Rest the injured joint[cite: 1].', 'Apply an ice pack wrapped in a cloth for 15-20 minutes.', 'Compress with an elastic bandage and elevate the limb.'] }
];

function renderGuides(filter = '') {
  const container = document.getElementById('guide-list');
  const filtered = guides.filter(g => 
    g.title.toLowerCase().includes(filter.toLowerCase()) || 
    g.category.toLowerCase().includes(filter.toLowerCase()) ||
    g.steps.some(s => s.toLowerCase().includes(filter.toLowerCase()))
  );
  
  container.innerHTML = filtered.map(g => `
    <div class="card">
      <span class="category">${g.category}</span>
      <h2>${g.title}</h2>
      <ol>${g.steps.map(s => `<li>${s}</li>`).join('')}</ol>
    </div>
  `).join('');
}

document.getElementById('search-input').addEventListener('input', (e) => {
  renderGuides(e.target.value);
});

renderGuides();
