const sidebar = document.querySelector('#sideBar');

document.querySelector('.openMenu').addEventListener('click', () => {
  sidebar.style.width = '100%';
});
document.querySelector('.closeMenu').addEventListener('click', () => {
  sidebar.style.width = '0';
});
document.querySelector('.menu-items').addEventListener('click', () => {
  sidebar.style.width = '0';
});