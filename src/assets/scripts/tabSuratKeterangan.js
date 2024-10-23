function toggleTabSuratKeterangan(tabIndexKet) {
  let tabsKet = document.getElementsByClassName("tabSuratKeterangan");
  for (let i = 0; i < tabsKet.length; i++) {
    tabsKet[i].style.display = "none";
  }
  tabsKet[tabIndexKet].style.display = "block";

  // Remove the 'active-tab-button' class from all buttons
  let buttons = document.getElementsByClassName("tab-button-ket");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active-tab-button-ket");
  }

  // Add the 'active-tab-button-pem' class to the clicked button
  buttons[tabIndexKet].classList.add("active-tab-button-ket");
}

toggleTabSuratKeterangan(0);
