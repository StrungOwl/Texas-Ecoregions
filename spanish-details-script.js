// Generate a consistent color from a species name for the placeholder
function getSpeciesColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 360);
  return `hsl(${hue}, 45%, 40%)`;
}

// Create a plant card element (Spanish version)
function createPlantCard(species) {
  const card = document.createElement('div');
  card.className = 'plant-card';
  const spanishName = spanishCommonNames[species.scientific] || species.common;
  card.setAttribute('data-scientific', species.scientific.toLowerCase());
  card.setAttribute('data-common', spanishName.toLowerCase());

  const color = getSpeciesColor(species.scientific);
  const initials = species.scientific.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();

  card.innerHTML = `
    <div class="plant-image-placeholder" style="background: linear-gradient(135deg, ${color}, ${color}dd);">
      <span class="plant-initials">${initials}</span>
      <span class="invasive-badge">INVASORA</span>
    </div>
    <p class="plant-name">${species.scientific}</p>
    <p class="plant-common">${spanishName}</p>
    <p class="plant-source">Fuente: USFS Datos Nacionales de Especies Invasoras</p>
  `;

  return card;
}

// Populate all plant grids with species data
function populatePlantGrids() {
  const grids = document.querySelectorAll('.plant-grid[data-ecoregion]');
  grids.forEach(grid => {
    const ecoregionId = grid.getAttribute('data-ecoregion');
    const species = getSpeciesForEcoregion(ecoregionId);

    species.forEach(sp => {
      grid.appendChild(createPlantCard(sp));
    });

    // Add count display
    const page = grid.closest('.detail-page');
    if (page) {
      const subtitle = page.querySelector('.ecoregion-subtitle');
      if (subtitle) {
        subtitle.textContent = `${species.length} Especies Invasoras Documentadas`;
      }
    }
  });
}

// Filter plants by search input
function filterPlants(input) {
  const query = input.value.toLowerCase().trim();
  const grid = input.closest('.detail-page').querySelector('.plant-grid');
  const cards = grid.querySelectorAll('.plant-card');

  cards.forEach(card => {
    const scientific = card.getAttribute('data-scientific');
    const common = card.getAttribute('data-common');
    const matches = scientific.includes(query) || common.includes(query);
    card.style.display = matches ? '' : 'none';
  });
}

// Show the correct detail page on load
document.addEventListener('DOMContentLoaded', function() {
  // Populate all grids with species data
  populatePlantGrids();

  const targetEcoregion = sessionStorage.getItem('targetEcoregion');

  if (targetEcoregion) {
    // Hide all detail pages
    const pages = document.querySelectorAll('.detail-page');
    pages.forEach(page => {
      page.classList.remove('active');
      page.style.display = 'none';
    });

    // Show the target page
    const targetPage = document.getElementById(targetEcoregion);
    if (targetPage) {
      targetPage.classList.add('active');
      targetPage.style.display = 'block';
    }

    // Clear the sessionStorage
    sessionStorage.removeItem('targetEcoregion');
  }
});

// Handle back button clicks
function goBack() {
  window.location.href = 'spanish-landing.html';
}
