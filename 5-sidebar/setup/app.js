let sidebarBtn = document.querySelector(".sidebar-toggle"),
  sidebar = document.querySelector(".sidebar"),
  closeBtn = document.querySelector(".close-btn");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});
closeBtn.onclick = () => {
  sidebar.classList.remove("show-sidebar");
};
