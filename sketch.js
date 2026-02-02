// Page Navigation
function navigateTo(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });
  
  // Show selected page
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.classList.add('active');
    window.scrollTo(0, 0);
  }
}

// Ecoregion data
const ecoregions = {
  'southwestern-tablelands': {
    name: 'Southwestern Tablelands',
    description: 'High, flat terrain in southwestern Texas with semi-arid climate.',
    pageId: 'southwesternTablelands'
  },
  'chihuahuan-deserts': {
    name: 'Chihuahuan Deserts',
    description: 'Desert region with low rainfall and sparse vegetation.',
    pageId: 'chihuahuanDeserts'
  },
  'high-plains': {
    name: 'High Plains',
    description: 'Elevated grasslands with moderate precipitation.',
    pageId: 'highPlains'
  },
  'central-great-plains': {
    name: 'Central Great Plains',
    description: 'Rolling grasslands with transitional climate.',
    pageId: 'centralGreatPlains'
  },
  'cross-timbers': {
    name: 'Cross Timbers',
    description: 'Oak woodlands and prairie savannas.',
    pageId: 'crossTimbers'
  },
  'edwards-plateau': {
    name: 'Edwards Plateau',
    description: 'Limestone plateau with cedar and oak vegetation.',
    pageId: 'edwardsPlateau'
  },
  'southern-texas-plains': {
    name: 'Southern Texas Plains',
    description: 'Coastal plain with subtropical vegetation.',
    pageId: 'southernTexasPlains'
  },
  'texas-blackland-prairies': {
    name: 'Texas Blackland Prairies',
    description: 'Fertile prairie region with dark soils.',
    pageId: 'texasBlacklandPrairies'
  },
  'east-central-texas-plains': {
    name: 'East Central Texas Plains',
    description: 'Transitional forest and prairie region.',
    pageId: 'eastCentralTexasPlains'
  },
  'western-gulf-coastal-plain': {
    name: 'Western Gulf Coastal Plain',
    description: 'Low-lying coastal region with pine forests.',
    pageId: 'westernGulfCoastalPlain'
  },
  'south-central-plains': {
    name: 'South Central Plains',
    description: 'Mixed grassland and forest region.',
    pageId: 'southCentralPlains'
  },
  'arizona-new-mexico-mountains': {
    name: 'Arizona/New Mexico Mountains',
    description: 'Mountain region with coniferous forests.',
    pageId: 'arizonaNewMexicoMountains'
  }
};

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
  const ecoregionBtns = document.querySelectorAll('.ecoregion-btn');
  
  ecoregionBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const region = this.getAttribute('data-region');
      const ecoregion = ecoregions[region];
      if (ecoregion) {
        navigateTo(ecoregion.pageId);
      }
    });
  });
  
  // Search functionality
  const searchInputs = document.querySelectorAll('.search-input');
  searchInputs.forEach(input => {
    input.addEventListener('input', function() {
      filterPlants(this.value);
    });
  });
  
  // Plant card click handlers
  const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
  learnMoreButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const plantName = this.parentElement.querySelector('.plant-name').textContent;
      console.log('Learn more about:', plantName);
      // Add functionality to show plant details
    });
  });

  // Plant card flip animation (optional)
  const plantCards = document.querySelectorAll('.plant-card');
  plantCards.forEach(card => {
    card.addEventListener('click', function(e) {
      if (!e.target.closest('.learn-more-btn')) {
        // Optional: flip card animation
        this.style.transform = this.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
      }
    });
  });

  // Language selector
  const languageLinks = document.querySelectorAll('.language-selector a');
  languageLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      // Language switching already handled by onclick
    });
  });
});

// Filter plants based on search
function filterPlants(searchTerm) {
  const plants = document.querySelectorAll('.plant-card');
  const term = searchTerm.toLowerCase();
  
  plants.forEach(plant => {
    const plantName = plant.querySelector('.plant-name').textContent.toLowerCase();
    const plantCommon = plant.querySelector('.plant-common').textContent.toLowerCase();
    
    if (plantName.includes(term) || plantCommon.includes(term)) {
      plant.style.display = 'block';
    } else {
      plant.style.display = 'none';
    }
  });
}

// Handle ecoregion selection
function handleEcoregionClick(region) {
  const ecoregion = ecoregions[region];
  if (ecoregion) {
    console.log('Selected:', ecoregion.name);
    console.log('Description:', ecoregion.description);
    navigateTo(ecoregion.pageId);
  }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  // ESC key to go back
  if (e.key === 'Escape') {
    const currentPage = document.querySelector('.page.active').id;
    if (currentPage !== 'startMenuEng' && currentPage !== 'startMenuSpa') {
      navigateTo('startMenuEng');
    }
  }
});


