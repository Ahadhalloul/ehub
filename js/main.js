//--------- language switch----------
function toggleLanguageDropdown() {
  const options = document.getElementById("language-options");
  options.classList.toggle("hidden");
}

function setLanguage(lang, countryCode) {
  document.getElementById(
    "language-flag"
  ).src = `assets/icons/${countryCode}.png`;
  document.getElementById("language-code").innerText = lang;
  toggleLanguageDropdown();
}

// Optional: Close language dropdown if clicked outside
document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".language-dropdown");
  const options = document.getElementById("language-options");
  if (!dropdown.contains(event.target)) {
    options.classList.add("hidden");
  }
});
//---------------------------------
// ------Footer Accordion -----------
const itemHeader = document.querySelectorAll(".item-header");

itemHeader.forEach((header) => {
  header.addEventListener("click", () => {
    // Only run toggle if screen is SMALL
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    if (!isSmallScreen) return; // Do nothing on large screens

    const index = header.dataset.index;
    document.querySelectorAll(".item-content").forEach((content) => {
      if (content.dataset.index === index) {
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      } else {
        content.style.display = "none";
      }
    });
    document.querySelectorAll(".open-item-icon").forEach((arrow) => {
      if (arrow.dataset.index === index) {
        arrow.classList.toggle("flip-img");
      }
    });
  });
});
// --------------------------------------------------
