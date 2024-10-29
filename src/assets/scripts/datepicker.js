function toggleDropdown(menuId) {
  // Menutup dropdown lain jika terbuka
  const dropdowns = document.querySelectorAll(".dropdown-content");
  dropdowns.forEach((dropdown) => {
    if (dropdown.id !== menuId) dropdown.style.display = "none";
  });

  // Tampilkan atau sembunyikan dropdown yang diklik
  const dropdownMenu = document.getElementById(menuId);
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
}

// Menutup dropdown jika pengguna mengklik di luar dropdown
window.onclick = function (event) {
  if (!event.target.closest(".dropdown-container")) {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach((dropdown) => {
      dropdown.style.display = "none";
    });
  }
};
