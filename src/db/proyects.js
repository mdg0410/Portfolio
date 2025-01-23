
const projects = [
  {
    id: 1,
    title: 'Karaoke Management',
    description: ['Karaoke', 'Full-Stack', '2024'],
    img: [
        {id:1, url: 'https://snipboard.io/eVwmFx.jpg', alt: 'karaoke_Home1'},      
        {id:2, url: 'https://snipboard.io/cxwXQq.jpg', alt: 'karaoke_Home2'},      
        {id:3, url: 'https://snipboard.io/HJQAaL.jpg', alt: 'karaoke_Home3'},      

    ],
    content: 'This project is designed to manage orders and totals for tables in a karaoke bar. Additionally, it tracks songs that customers will sing, adding their value to the cart and linking them to the order. On the client side, it stores [Credentials, Cart, TableID, TableStatus], enabling device-based authentication for assigned tables. The admin panel offers broad functionality, including table status management, order totals, song lists, and employee role identification. Using SQL Server and stored procedures, the system ensures secure data handling and streamlined operations.',
    contentModal: 'A karaoke bar management system that integrates table orders, song tracking, and role-based administration using ASP.NET Core, Entity Framework, SQL Server, and Bootstrap.',
    techno: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'JavaScript', 'Bootstrap', 'NuGet Packages'],
    live: '',
    source: '',
  },
  {
    id: 2,
    title: 'Chatbot Development',
    description: ['Chatbot', 'JavaScript & No-Code', '2024'],
    img: [
      { id: 1, url: 'https://bot-whatsapp.netlify.app/build/q-76efce59.avif', alt: 'chatbot'},
      { id: 2, url: 'https://www.spcdn.org/images/promo-logo/correct/sendpulse-logo-vertical.svg', alt: 'sendpulse'},
    ],
    content: 'This project showcases chatbot development using JavaScript, REST APIs, and the no-code library Bot-WhatsApp. The chatbot integrates seamlessly with platforms like Telegram and WhatsApp, providing personalized customer interactions. It includes advanced logic for handling queries, managing workflows, and integrating with external APIs to enhance automation and improve user experience.',
    contentModal: 'Chatbot development project utilizing JavaScript, REST APIs, and Bot-WhatsApp library to create efficient and automated customer interaction solutions.',
    techno: ['JavaScript', 'REST API', 'Bot-WhatsApp', 'No-Code'],
    live: '',
    source: '',
  },
  {
    id: 3,
    title: 'To Do List',
    description: ['To Do List', 'Full-Stack', '2023'],
    img: [
      { id: 1, url: 'https://firebasestorage.googleapis.com/v0/b/projects-a129a.appspot.com/o/Projects%2FPortfolio%2FprojectToDoList%2FtodolistAdd.png?alt=media&token=aab6073c-a936-474c-8b16-dba188f92963', alt: 'toDoList_Add' },
      { id: 2, url: 'https://firebasestorage.googleapis.com/v0/b/projects-a129a.appspot.com/o/Projects%2FPortfolio%2FprojectToDoList%2FtodolistCheck.png?alt=media&token=09b24fba-321c-4b38-8ede-bc2d91b8af07', alt: 'toDoList_check' },
    ],
    content: 'Originally developed with Vanilla JavaScript, this minimalist task list project was later remastered with React. It provides efficient task management with features like adding, deleting, and updating tasks, while ensuring a smooth and polished user experience.',
    contentModal: 'A minimalist task list project, upgraded from Vanilla JavaScript to React for enhanced functionality and user experience.',
    techno: ['React', 'JavaScript', 'CSS', 'DOM'],
    live: 'https://mdg0410.github.io/to-Do-List/',
    source: 'https://github.com/mdg0410/To-Do-List',
  },
  {
    id: 4,
    title: 'Js Capstone',
    description: ['Js_Capstone', 'Front-End', '2023'],
    img: [
      { id: 1, url: 'https://firebasestorage.googleapis.com/v0/b/projects-a129a.appspot.com/o/Projects%2FPortfolio%2FprojectJsCapstone%2FJsCapstoneHome.png?alt=media&token=40daacf7-ee14-4624-86d8-ffa06533cb67', alt: 'JsCapstone_Home' },
      { id: 2, url: 'https://firebasestorage.googleapis.com/v0/b/projects-a129a.appspot.com/o/Projects%2FPortfolio%2FprojectJsCapstone%2FJsCapstoneReservation.png?alt=media&token=82c27e61-6aa8-43a9-ba88-ee9265ae56d0', alt: 'JsCapstone_Comments' },
      { id: 3, url: 'https://firebasestorage.googleapis.com/v0/b/projects-a129a.appspot.com/o/Projects%2FPortfolio%2FprojectJsCapstone%2FJsCapstoneComments.png?alt=media&token=382af464-1725-47b9-b76d-a602954ccc3e', alt: 'JsCapstone_Reservation' },
    ],
    content: 'This Capstone project, developed using peer programming, features a movie platform where users can leave reviews, store comments, and make reservations. Built with Vanilla JavaScript, Webpack, Jest, and APIs, the project demonstrates effective collaboration and technical skills.',
    contentModal: 'A collaborative Capstone project featuring a movie platform for reviews and reservations. Developed with Vanilla JavaScript, Webpack, Jest, and APIs.',
    techno: ['JavaScript', 'Webpack', 'Jest', 'API', 'Linters'],
    live: 'https://hafiz1379.github.io/JS-capstone-project/dist/',
    source: 'https://github.com/hafiz1379/JS-capstone-project?tab=readme-ov-file',
    
  },
  {
    id: 5,
    title: 'Awesome Book',
    description: ['Awesome Book', 'Front-End', '2023'],
    img: [
      { id: 1, url: 'https://firebasestorage.googleapis.com/v0/b/projects-a129a.appspot.com/o/Projects%2FPortfolio%2FprojectAwesomeBook%2FawesomeBookList.png?alt=media&token=efd7df5c-0741-40ec-ae9d-cc3584e3833a', alt: 'awesomeBooks_List' },
      { id: 2, url: 'https://firebasestorage.googleapis.com/v0/b/projects-a129a.appspot.com/o/Projects%2FPortfolio%2FprojectAwesomeBook%2FawesomeBookContact.png?alt=media&token=0ccfb38f-6f3a-467d-9687-ab4881b2dd7c', alt: 'awesomeBook_Contact' },
      { id: 3, url: 'https://firebasestorage.googleapis.com/v0/b/projects-a129a.appspot.com/o/Projects%2FPortfolio%2FprojectAwesomeBook%2FawesomeBookAddBook.png?alt=media&token=79e5b621-e8a7-4902-af99-03ee40212f69', alt: 'awesomeBook_AddBook' },
    ],
    content: '"awesomeBooks" is a project focused on efficient book manipulation through classes, enabling the addition, deletion, and instant rendering in the DOM. This application provides an organized and modular structure for effective information management, offering a professional and seamless user experience when interacting with the book list.',
    contentModal: '"awesomeBooks" simplifies book handling with classes for easy addition, deletion, and instant DOM rendering. Its organized structure ensures smooth information management, delivering a professional user experience.',
    techno: ['HTML', 'CSS', 'JavaScript', 'DOM'],
    live: 'https://mdg0410.github.io/Awesome-Books/',
    source: 'https://github.com/mdg0410/awesomeBookES6',
  },
];

export default projects;
