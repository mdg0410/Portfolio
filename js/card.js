const wrapper = document.querySelector('.wrapper');
const overflow = document.querySelector('.body');
const btnCard = document.querySelector('#btn-card');
const btnClose = document.querySelector('.close');

const project = [
  {
    title: 'Tonic',
    description: ['CANOPY', 'Back End Dev', '2015'],
    imgURL: '../img/Desktop/Snapshoot_desktop_1.svg',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    techno: ['html', 'javaScript', 'github', 'css', 'Bootstrap'],
    live: 'https://mdg0410.github.io/Portfolio/',
    source: 'https://github.com/mdg0410/',
  },
  {
    title: 'Multi-Post Stories',
    description: ['FACEBOOK', 'Full Stack Dev', '2015'],
    imgURL: ['../img/Desktop/Snapshoot_desktop_2.svg'],
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    techno: ['html', 'css', 'javaScript'],
    live: 'https://mdg0410.github.io/Portfolio/',
    source: 'https://github.com/mdg0410/',
  },
  {
    title: 'Facebook 360',
    description: ['FACEBOOK', 'Full Stack Dev', '2015'],
    imgURL: ['../img/Desktop/Snapshoot_desktop_3.svg'],
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    techno: ['Ruby on rails', 'html', 'css', 'javaScript'],
    live: 'https://mdg0410.github.io/Portfolio/',
    source: 'https://github.com/mdg0410/',
  },
  {
    title: 'Uber Navigation',
    description: ['Uber', 'Lead Developer', '2018'],
    imgURL: ['../img/Desktop/Snapshoot_desktop_4.svg'],
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    techno: ['Ruby on rails', 'html', 'css', 'javaScript'],
    live: 'https://mdg0410.github.io/Portfolio/',
    source: 'https://github.com/mdg0410/',
  },
];

const opencard = (i) => {
  if (i >= 0 && i < 4) {
    const tech = project[i].techno.map(
      (det) => `<li><a href="#">${det}</a></li>`,
    );
    wrapper.classList.add('visible');
    overflow.classList.add('overflow');
    wrapper.innerHTML = `
<div class="card-aux">
  <div class="header-aux">
    <div class="title-aux">
      <h2 id="title-a">${project[i].title}</h2>
      <button onclick="cardClose()" id="aux-close" class="close"><img src="../img/Icons/btn-close-black.svg"></button>
    </div>
    <div class="frame-2">
      <div class="client">
        <p class="text-p" id="tc-a">${project[i].description[0]}</p>
      </div>
      <div class="counter"></div>
      <div class="role">
        <p class="text-p" id="tr-a">${project[i].description[1]}</p>
      </div>
      <div class="counter"></div>
      <div class="year">
        <p class="text-p" id="ty-a">${project[i].description[2]}</p>
      </div>
    </div>
  </div>
  <div class="img-a">
    <img id="img-aux" src="${project[i].imgURL}" alt="img-aux">
  </div>
  <div class="left-block-aux">
    <div class="secondary-text-work-aux">
      <p id="tw-a">${project[i].content}</p>
    </div>
    <div class="rigth-aux">
    <ul class="list-aux">
      ${tech.join('')}
    </ul>
    <div class="line-aux"></div>
    <div class="container-btn-aux">
      <a href="${project[i].live}" class="btn-aux"><span>See Live</span><img src="../img/Icons/live-color.svg" alt="Icon Live"></a>
      <a href="${project[i].source}" class="btn-aux"><span>See Source</span><img src="../img/Icons/github-color.svg" alt="Icon Github"></a>
    </div>
  </div>
  </div>
</div>
`;
  }
};

const cardClose = () => {
  wrapper.classList.remove('visible');
  overflow.classList.remove('overflow');
};

btnCard.addEventListener('click', (n) => {
  opencard(n);
});

btnClose.addEventListener('click', cardClose());