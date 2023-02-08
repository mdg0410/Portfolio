const cardaux = document.querySelector('.container-card-aux');

document.querySelector('#aux-close').addEventListener('click', () => {
  cardaux.style.left = '100%';
});

function a(num) {
  const nw = num;
  const projectTitle = document.getElementById(`pt${nw}`).innerHTML;
  const clientText = document.getElementById(`tc${nw}`).innerHTML;
  const roleText = document.getElementById(`tr${nw}`).innerHTML;
  const yearText = document.getElementById(`ty${nw}`).innerHTML;
  const textWork = document.getElementById(`tw${nw}`).innerHTML;
  if (nw > 0 && nw < 5) {
    cardaux.style.left = '0';
    document.querySelector('#title-a').innerHTML = projectTitle;
    document.querySelector('#tc-a').innerHTML = clientText;
    document.querySelector('#tr-a').innerHTML = roleText;
    document.querySelector('#ty-a').innerHTML = yearText;
    document.getElementById('img-aux').src = `./img/Desktop/Snapshoot_${nw}.svg`;
    document.querySelector('#tw-a').innerHTML = textWork;
  }
}

document.querySelector('#btn-1').addEventListener('click', a());
document.querySelector('#btn-2').addEventListener('click', a());
document.querySelector('#btn-3').addEventListener('click', a());
document.querySelector('#btn-4').addEventListener('click', a());