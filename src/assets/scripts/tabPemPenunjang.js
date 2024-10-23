function toggleTabPemPenunjang(tabIndexPem) {
  let tabsPem = document.getElementsByClassName("tabPemPenunjang");
  for (let i = 0; i < tabsPem.length; i++) {
    tabsPem[i].style.display = "none";
  }
  tabsPem[tabIndexPem].style.display = "block";

  // Remove the 'active-tab-button' class from all buttons
  let buttons = document.getElementsByClassName("tab-button-pem");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active-tab-button-pem");
  }

  // Add the 'active-tab-button-pem' class to the clicked button
  buttons[tabIndexPem].classList.add("active-tab-button-pem");
}

toggleTabPemPenunjang(0);
