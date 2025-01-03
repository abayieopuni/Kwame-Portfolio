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
  name: "Opuni Abayie Kwame",
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
    "As a detail-oriented Computer Science graduate and Junior Front-End Developer transitioning to Full-Stack Development, I bring a strong foundation in software development, technical support, and system analysis. Known for troubleshooting complex technical issues and providing top-notch customer service, I am skilled in system administration, networking, and full-stack development principles. With a passion for learning and growth, I am eager to leverage and expand my skills in a dynamic tech role. I am also open to pursuing additional certifications to further enhance my expertise.",
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
    id: 'project1',
    img: './shelterhome.png',
    name: 'ShelterHome - A Homeless Application',
    skills: ['HTML, CSS, Javascript'],
    url: 'https://replit.com/@RemiAbayie/KopuniAdvocacyProject#team.html',
  },
  {
    // Add image in './styles/images.css' in #project2
    id: 'project2',
    img: './church.png',
    name: 'Church Website',
    skills: ['HTML, CSS, Javascript, Node.js, MongoDB, Express'],
    url: 'https://github.com/abayieopuni',
  },
  {
    // Add image in './styles/images.css' in #project3
    id: 'project3',
    img: './weather.png',
    name: 'Weather App - Check weather',
    skills: ['HTML, CSS, Javascript, Moment.js'],
    url: 'https://github.com/abayieopuni/InteractiveWeatherApp',
  },
  {
    // Add image in './styles/images.css' in #project4
    id: 'project4',
    img: './wheelream.png',
    name: 'WheelRealm - Car buying Website',
    skills: ['HTML, CSS, Javascript, Node.js, MongoDB, Express'],
    url: 'https://github.com/abayieopuni/WheelRealm-website',
  },
  {
    // Add image in './styles/images.css' in #project5
    id: 'project5',
    img: './trackfir.png',
    name: 'Trackfit',
    skills: ['React, CSS,Taiwind CSS, Javascript, Node.js, MongoDB, Express'],
    url: 'https://github.com/abayieopuni',
  },
  {
    // Add image in './styles/images.css' in #project6
    id: 'project6',
    img: './bakedatmars.png',
    name: 'Baked At Mars',
    skills: ['React, CSS,Taiwind CSS, Javascript, Node.js, MongoDB, Express'],
    url: 'https://github.com/abayieopuni',
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
  github: "https://github.com/abayieopuni",
  //facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  instagram: "https://github.com/abayieopuni",
  linkedin: "https://www.linkedin.com/in/abayie-opuni/",
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