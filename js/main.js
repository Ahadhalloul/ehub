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
// TOOGLE PROJECTS EXPANDED CARDS
function toggleExpandCard(clickedCard) {
  const projectCard = document.querySelectorAll(
    ".projects-accordion-cards .card"
  );
  projectCard.forEach((card) => {
    if (card === clickedCard) {
      clickedCard.classList.toggle("expanded");
    } else {
      card.classList.remove("expanded");
    }
  });
}
// ---------------------------------------------
//  move selected style on side pane menu list
const menuItem = document.querySelectorAll(".menu-list .item > a ");
const subMenuItem = document.querySelectorAll(".sub-menu .sub-item a");

const subMenuArrow = document.querySelectorAll(".sub-menu-arrow");
const subMenuTitle = document.querySelector("#sub-menu-title");
const subMenu = document.querySelectorAll(".sub-menu");

const itemContent = document.querySelectorAll(".side-pane-content div");

menuItem.forEach((e) => {
  e.addEventListener("click", () => {
    menuItem.forEach((item) => {
      item.classList.remove("selected");
    });

    e.classList.add("selected");

    // ---- Handle submenus -------
    const currantSubmenu = e.nextElementSibling;
    const currantArrow = e.querySelector(".sub-menu-arrow");
    if (e.parentElement.classList.contains("has-sub")) {
      // Close other submenus
      subMenu.forEach((sm, i) => {
        if (sm !== currantSubmenu) {
          sm.classList.add("hidden");
        }
      });
      subMenuArrow.forEach((arr) => {
        if (arr !== currantArrow) {
          arr.classList.remove("flip-img");
        }
      });
      // Toggle current submenu
      currantSubmenu.classList.toggle("hidden");
      currantArrow.classList.toggle("flip-img");
    } else {
      // If normal item clicked, close all submenus
      subMenu.forEach((sm) => {
        sm.classList.add("hidden");
        subMenuItem.forEach((item) => {
          item.classList.remove("selected");
        });
      });
      subMenuArrow.forEach((arr) => {
        arr.classList.remove("flip-img");
      });
      // hide others contents
      hideContent(e);
    }
  });
});

subMenuItem.forEach((e) => {
  e.addEventListener("click", () => {
    subMenuItem.forEach((item) => {
      item.classList.remove("selected");
    });
    e.classList.add("selected");
    hideContent(e);
  });
});

// hide others content
function hideContent(e) {
  if (!(e.dataset.item === "all")) {
    itemContent.forEach((c) => {
      c.classList.add("hidden");
    });
    const currentContent = document.getElementById(e.dataset.item);
    currentContent.classList.remove("hidden");
  }
  if (e.dataset.item === "all") {
    itemContent.forEach((c) => {
      c.classList.remove("hidden");
    });
  }
}
// -------
// ---------------------------------------------
