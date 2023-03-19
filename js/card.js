const wrapper = document.querySelector('.wrapper');
const overflow = document.querySelector('.body');
const btnCard = document.querySelector('#btn-card');
const btnClose = document.querySelector('.close');

const project = [
  {
    title: 'Portfolio',
    description: ['Portfolio', 'Front-end', '2022'],
    imgURL: '../img/Desktop/Porfolio_img.png',
    content: 'This project is created mainly to present my skills in building different projects I have worked on.',
    techno: ['html', 'javaScript', 'github', 'css', 'Bootstrap'],
    live: 'https://mdg0410.github.io/Portfolio/',
    source: 'https://github.com/mdg0410/',
  },
  {
    title: 'Conference',
    description: ['Conference', 'Font-End', '2022'],
    imgURL: ['../img/Desktop/Conference_img.png'],
    content: 'In this project, a web page has been created on the theme of a simulated conference.',
    techno: ['html', 'css', 'javaScript', 'github'],
    live: 'https://mdg0410.github.io/Conference/',
    source: 'https://github.com/mdg0410/',
  },
  {
    title: 'Awesome Book',
    description: ['Awesome Book', 'Front-End', '2022'],
    imgURL: ['../img/Desktop/Awesome Books_img.png'],
    content: 'A simple API has been created where we implement a CRUD to add, edit, view, and delete books.',
    techno: ['html', 'css', 'javaScript'],
    live: 'https://mdg0410.github.io/Awesome-Books/',
    source: 'https://github.com/mdg0410/',
  },
  {
    title: 'To Do List',
    description: ['To Do List', 'Front-End', '2022'],
    imgURL: ['../img/Desktop/To-Do-List_img.png'],
    content: 'For this project, we created a minimalist task list where we implemented the use of Webpack.',
    techno: ['Jest', 'html', 'css', 'javaScript'],
    live: 'https://mdg0410.github.io/to-Do-List/',
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