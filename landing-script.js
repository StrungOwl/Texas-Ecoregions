// Navigate to ecoregion detail page
function navigateToEcoregion(pageId) {
  const detailPageUrl = 'english-details.html';
  const hash = '#' + pageId;
  
  // Store the target page in sessionStorage so we can navigate to it
  sessionStorage.setItem('targetEcoregion', pageId);
  window.location.href = detailPageUrl;
}
