const sidebar = document.querySelector('#sideBar');

document.querySelector('.openMenu').addEventListener('click', () => {
  sidebar.style.width = '375px';
});
document.querySelector('.closeMenu').addEventListener('click', () => {
  sidebar.style.width = '0';
});
document.querySelector('.menu-items').addEventListener('click', () => {
  sidebar.style.width = '0';
});