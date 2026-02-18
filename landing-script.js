// Navigate to ecoregion detail page
function navigateToEcoregion(pageId) {
  const detailPageUrl = 'english-details.html';
  const hash = '#' + pageId;

  // Store the target page in sessionStorage so we can navigate to it
  sessionStorage.setItem('targetEcoregion', pageId);
  window.location.href = detailPageUrl;
}

// Highlight map region on legend hover
document.querySelectorAll('.legend-item[data-region]').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const region = item.getAttribute('data-region');
    const overlay = document.querySelector(`.region-overlay[data-region="${region}"]`);
    if (overlay) overlay.classList.add('active');
  });
  item.addEventListener('mouseleave', () => {
    const region = item.getAttribute('data-region');
    const overlay = document.querySelector(`.region-overlay[data-region="${region}"]`);
    if (overlay) overlay.classList.remove('active');
  });
});
