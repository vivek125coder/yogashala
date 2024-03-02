  
  // Function to close the info banner
  function closeBanner() {
    var banner = document.getElementById("infoBanner");
    banner.style.display = "none";
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    // This code will be executed when the entire document is loaded
    var banner = document.getElementById("infoBanner");
    if (banner) {    
      banner.style.display = "block";
    }
  });