  
  document.addEventListener("DOMContentLoaded", function() {
    // This code will be executed when the entire document is loaded
    var banner = document.getElementById("infoBanner");
    if (banner) {    
      banner.style.display = "block";
    }
  });

  function showBanner() {
    var banner = document.getElementById("infoBanner");
    banner.style.display = "block";
  }

  function hideBanner() {
    var banner = document.getElementById("infoBanner");
    banner.style.display = "none";
  }
  
  
  // Show the banner initially
  showBanner();
  
  // Hide the banner after 1 minute
  //setTimeout(hideBanner, 300000); // 60000 milliseconds = 1 minute