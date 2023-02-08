const sidebar = document.querySelector('.sidebar');

document.querySelector('.openmenu').addEventListener('click', () => {
  sidebar.style.left = '0';
});
document.querySelector('.closemenu').addEventListener('click', () => {
  sidebar.style.left = '100%';
});
document.querySelector('.menu-items').addEventListener('click', () => {
  sidebar.style.left = '100%';
});