// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Kwame Abayie Opuni",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "A detail-oriented computer science graduate with experience in full-stack software development, technical support, and system analysis known for troubleshooting complex technical issues and delivering high-level customer service. Skilled in system administration, and networking, with a strong foundation in computer science. Seeking a dynamic tech role to leverage and expand these skills. Open to certifications as needed..",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    // svg: '',
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "React",
    // svg: '',
    faClass: "fab fa-react",
  },
  {
    name: "PHP",
    // svg: '',
    faClass: "fab fa-php",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    // svg: '',
    faClass: "fab fa-aws",
  },
];

const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    img:"./shelterhome.png",
    name: "Vintage Vinyl Records - An E-commerce Application",
    skills: ["HTML, CSS, Javascript"],
    url: "https://github.com/group01-project03/vintage-vinyl-records",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    img:"./church.png",
    name: "Book Search Engine",
    skills: ["MERN Stack, React, Node.js, MongoDB, Express"],
    url: "https://github.com/amnasyeda/book-search-engine",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    img:"./weather.png",
    name: "E-Commerce Back End",
    skills: ["Javascript, Node.js, Sequalize, MySQL, Dotenv"],
    url: "https://github.com/amnasyeda/ecommerce-back-end",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    img:"./wheelream.png",
    name: "Counting Calories - Calorie Tracker",
    skills: ["Bulma, JQuery, Moment.js, Javascript"],
    url: "https://github.com/uot-project-grp/project01-calorie-tracker",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    img:"./profile.png",
    name: "WasteAway - Waste Management",
    skills: ["jQuery, Dotenv, MySQL and Sequelize ORM, Handlebars.js, Express.js, Node.js"],
    url: "https://github.com/Group05-Project02/waste-management",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    img:"./profile.png",
    name: "Tech Blog - Blogging Application",
    skills: ["Sequalize, MySQL2, express-handlebars, connect-session-sequlize, Node.js, bcrypt, Express.js"],
    url: "https://github.com/amnasyeda/tech-blog",
  },
];

const section5title = "Get in Touch";
const contact = {
  pitch:
    "Feel free to contact me. I am open to collaborate with other developers on various projects I am planning to launch in the near future.",
  copyright: "",
  contactUrl: "",
};

const social = {
  github: "https://github.com/amnasyeda",
  //facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  instagram: "https://instagram.com/amna.s_",
  linkedin: "https://www.linkedin.com/in/amna-syeda-064191146",
  resume: "",
};

export {
  animation,
  header,
  background,
  about,
  contact,
  section2title,
  section5title,
  skillsBar,
  social,
  projects,
  section3Title
 
};