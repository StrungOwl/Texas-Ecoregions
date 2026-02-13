// Navigate to Spanish ecoregion detail page
function navigateToEcoregion(pageId) {
  const detailPageUrl = 'spanish-details.html';
  
  // Store the target page in sessionStorage
  sessionStorage.setItem('targetEcoregion', pageId);
  window.location.href = detailPageUrl;
}
