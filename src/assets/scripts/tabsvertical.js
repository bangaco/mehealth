// const icon1 = document.querySelector("#icon1");
// const icon2 = document.querySelector("#icon2");
// const icon3 = document.querySelector("#icon3");
// const icon4 = document.querySelector("#icon4");
// const icon5 = document.querySelector("#icon5");
// const icon6 = document.querySelector("#icon6");
// const icon7 = document.querySelector("#icon7");
// const icon8 = document.querySelector("#icon8");
// const icon9 = document.querySelector("#icon9");
// const icon10 = document.querySelector("#icon10");

// function showForm(step) {
//   viewId = step; // Set step that was clicked
//   progressBar(); // Update the progress bar
//   displayForms(); // Display the correct form
// }

// function progressBar() {
//   // Reset all icons
//   icon1.classList.remove("active");
//   icon2.classList.remove("active");
//   icon3.classList.remove("active");
//   icon4.classList.remove("active");
//   icon5.classList.remove("active");
//   icon6.classList.remove("active");
//   icon7.classList.remove("active");
//   icon8.classList.remove("active");
//   icon9.classList.remove("active");
//   icon10.classList.remove("active");

//   // Activate the correct icon based on the current viewId
//   if (viewId === 1) icon1.classList.add("active");
//   if (viewId === 2) icon2.classList.add("active");
//   if (viewId === 3) icon3.classList.add("active");
//   if (viewId === 4) icon4.classList.add("active");
//   if (viewId === 5) icon5.classList.add("active");
//   if (viewId === 6) icon6.classList.add("active");
//   if (viewId === 7) icon7.classList.add("active");
//   if (viewId === 8) icon8.classList.add("active");
//   if (viewId === 9) icon9.classList.add("active");
//   if (viewId === 10) icon10.classList.add("active");
// }

// function displayForms() {
//   // Hide all forms
//   document
//     .querySelectorAll("fieldset")
//     .forEach((form) => (form.style.display = "none"));

//   // Display the selected form
//   document.querySelector(`#form${viewId}`).style.display = "block";
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const tabs = document.querySelectorAll(".tab");
//   const underline = document.querySelector(".underline");
//   const contents = document.querySelectorAll(".content");

//   function activateTab(tab) {
//     tabs.forEach((t) => t.classList.remove("active"));
//     tab.classList.add("active");

//     const tabIndex = tab.getAttribute("data-tab");
//     const activeContent = document.querySelector(`#content-${tabIndex}`);
//     contents.forEach((c) => c.classList.remove("active"));
//     activeContent.classList.add("active");

//     updateUnderlinePosition(tab);
//   }

//   function updateUnderlinePosition(tab) {
//     underline.style.width = `${tab.offsetWidth}px`;
//     underline.style.left = `${tab.offsetLeft}px`;
//   }

//   tabs.forEach((tab) => {
//     tab.addEventListener("click", () => activateTab(tab));
//   });

//   // Activate the first tab by default
//   activateTab(tabs[0]);
// });

// const tabs = document.querySelectorAll(".tab");
// const tabContents = document.querySelectorAll(".tab-content");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     tabs.forEach((t) => t.classList.remove("active"));
//     tab.classList.add("active");

//     const target = tab.getAttribute("data-tab");
//     tabContents.forEach((content) => {
//       content.classList.remove("active");
//       if (content.id === target) {
//         content.classList.add("active");
//       }
//     });
//   });
// });

// document.querySelectorAll('input[name="tab"]').forEach(tab => {
//   tab.addEventListener('change', function() {
//     document.querySelectorAll('.content').forEach(content => {
//       content.style.display = 'none';
//     });

//     const selectedTabContent = document.getElementById(`content${this.id.substring(3)}`);
//     selectedTabContent.style.display = 'block';
//   });
// });

let menuItems = document.querySelectorAll("#menu li");
let tabContents = document.querySelectorAll(".tab-content");

let tab_topbg = document.getElementById("tab_topbg");
let tab_bottombg = document.getElementById("tab_bottombg");

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    let tabName = e.target.getAttribute("data-tab");

    // Update top and bottom background heights
    let Top_height = e.target.offsetTop;
    let Bottom_Height = 514 - Top_height - 14;
    tab_topbg.style.height = Top_height + "px";
    tab_bottombg.style.height = Bottom_Height + "px";

    // Hide all tab contents
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });

    // Show the content for the clicked tab
    let activeTab = document.getElementById("tab-" + tabName);
    if (activeTab) {
      activeTab.classList.add("active");
    }
  });
});
