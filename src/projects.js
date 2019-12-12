const projects = [
  {
    id: "wensi",
    name: "Wenzi",
    type: "Web Project",
    year: "2019",
    tools: "ReactJS / PIXIJS",
    role: "Design / Development",
    images: [
      "/images/wensi-1.jpg",
      "/images/wensi-2.jpg",
      "/images/wensi-3.jpg",
      "/images/wensi-4.jpg",
      "/images/wensi-5.jpg"
    ],
    headerImage: "/images/wensi-header.jpg",
    mobileImage: "/images/wensi-mobile.jpg",
    video: null,
    websiteLink: "https://wenzi.ca",
    color: "white",
    caption: "A portfolio + eCommerce website designed for a scarf artist",
    info:
      "Wenzi is a portfolio plus eCommerce website that I designed and developed for my friend who’s a scarf designer. It’s built on top of React, Redux and PIXIJS. The website uses Shopify as the eCommerce solution so all the content presenting on the page is fetched through the Shopify buy api. The interface will automatically get updated once any new collections comes out in the future."
  },
  {
    id: "dashboard",
    name: "Dashboard",
    type: "Web Project",
    year: "2019",
    tools: "ReactJS / FusionCharts",
    role: "Design / Development",
    images: [
      "/images/dashboard-1.jpg",
      "/images/dashboard-2.jpg",
      "/images/dashboard-3.jpg",
      "/images/dashboard-4.jpg",
      "/images/dashboard-5.jpg"
    ],
    headerImage: "/images/dashboard-header.jpg",
    mobileImage: "/images/dashboard-mobile.jpg",
    video: null,
    websiteLink: "https://simple-dashboard.netlify.com/",
    color: "white",
    caption: "A simple and customizable dashboard",
    info:
      "Simple dashboard is a light-weight dashboard that supports drag and drop, multiple tabs and light/dark theme switching. It's built in React, Redux, TypeScript, AntDesign and FusionCharts."
  },
  {
    id: "holm",
    name: "Holm",
    type: "Web Project",
    year: "2018",
    tools: "ReactJS / ThreeJS",
    role: "Design / Development",
    images: [
      "/images/holm-hd-1.png",
      "/images/holm-hd-2.png",
      "/images/holm-hd-3.png",
      "/images/holm-hd-4.png"
    ],
    headerImage: "/images/holm-header.jpg",
    mobileImage: "/images/holm-mobile.jpg",
    video: null,
    websiteLink: "https://holm.surge.sh/",
    color: "white",
    caption: "A minimalistic conceptual design project for a sneaker store.",
    info:
      "Holm is a conceptual design project for a sneaker store with a minimalism design style. The idea is to create a stylish online store that is able to provide a simple and intuitive user experience for customers. The website is still an ongoing project  and by far only finishes the front end part. The next step is to make it talk to a backend JSON API in order to manage inventory and also integrate with a payment API."
  },
  {
    id: "moneris-shop",
    name: "Moneris Shop",
    type: "Web Project",
    year: "2017",
    tools: "Javascript",
    role: "Front-End Development",
    images: [
      "/images/shop-moneris-1.jpg",
      "/images/shop-moneris-2.jpg",
      "/images/shop-moneris-3.jpg",
      "/images/shop-moneris-4.jpg"
    ],
    headerImage: "/images/shop-moneris-header.jpg",
    mobileImage: "/images/shop-moneris-mobile.jpg",
    video: null,
    websiteLink: "https://shop.moneris.com/",
    color: "white",
    caption:
      "An online platform for Moneris merchants to purchase their business supplies in one click.",
    info:
      "Shop Moneris is an online platform for Moneris merchants to purchase their business supplies in one click."
  },

  {
    id: "payd-mobile",
    name: "PAYD Mobile",
    type: "Web Project",
    year: "2018",
    tools: "Sketch / Javascript / PHP",
    role: "Design / Front-End Development",
    images: [
      "/images/payd-mobile-1.jpg",
      "/images/payd-mobile-2.jpg",
      "/images/payd-mobile-3.jpg",
      "/images/payd-mobile-4.jpg"
    ],
    headerImage: "/images/payd-mobile-header.jpg",
    mobileImage: "/images/payd-mobile-mobile.jpg",
    video: null,
    websiteLink: "https://my.getpayd.com/ebox/",
    color: "white",
    caption: "PAYD admin tailored for mobile devices.",
    info:
      "The PAYD admin is the backend of all PAYD family products. But in a long time, it misses the mobile end support.  In this project, we fully optimized the use experience on the mobile end and re-designed the entire user interface. So our merchant can seamlessly meet their business needs on the go."
  },

  {
    id: "sand",
    name: "Sand",
    type: "New Media Project",
    year: "2014",
    tools: "Processing / Leap Motion",
    role: "Design / Development",
    images: [
      "/images/sand-1.jpg",
      "/images/sand-2.jpg",
      "/images/sand-3.jpg",
      "/images/sand-4.jpg",
      "/images/sand-5.jpg",
      "/images/sand-6.jpg"
    ],
    headerImage: "/images/sand-header.jpg",
    mobileImage: "/images/sand-mobile.jpg",
    video: "https://player.vimeo.com/video/91894207",
    websiteLink: null,
    color: "white",
    caption:
      "An experimental project that makes people draw in a more natural form.",
    info:
      "Sand is an experimental project that makes people draw in a more natural and unique form. Drawing paintings by only using hands will prompt people experiment with different speed, directions and gestures.  Each time the tiny differences of fingers’ movement path will result in a very unique and interesting outcome."
  },

  {
    id: "galaxy",
    name: "Galaxy",
    type: "New Media Project",
    year: "2014",
    tools: "Processing / Kinect",
    role: "Design / Development",
    images: [
      "/images/galaxy-1.jpg",
      "/images/galaxy-2.jpg",
      "/images/galaxy-3.jpg",
      "/images/galaxy-4.jpg",
      "/images/galaxy-5.jpg"
    ],
    headerImage: "/images/galaxy-header.jpg",
    mobileImage: "/images/galaxy-mobile.jpg",
    video: "https://player.vimeo.com/video/90595542",
    websiteLink: null,
    color: "black",
    caption:
      "A new media work that explores the possibilities of tangible interaction.",
    info:
      "Galaxy is a new media installation which explores the possibilities of tangible interaction. The project chose to use spandex as the medium due to its natural elasticity and none-transparency. In the project, the Kinect is used to detect the depth data and the touch-position. The program subsequently takes the data and reacts accordingly base on the position and strength of the interaction."
  },

  {
    id: "tribe",
    name: "Tribe",
    type: "Projection Mapping Project",
    year: "2015",
    tools: "Mad Mapper / After Effect",
    role: "Development",
    images: [
      "/images/tribe-1.jpg",
      "/images/tribe-2.jpg",
      "/images/tribe-3.jpg",
      "/images/tribe-4.jpg",
      "/images/tribe-5.jpg"
    ],
    headerImage: "/images/tribe-header.jpg",
    mobileImage: "/images/tribe-mobile.jpg",
    video: "https://player.vimeo.com/video/114007905",
    websiteLink:
      "http://blog.ocad.ca/wordpress/digf6l01-fw201402-01/2014/12/tribe/",
    color: "black",
    caption:
      "An interactive lighting installation created collaboratively by using Processing and Madmapper.",
    info:
      "Tribe is a lighting installation created collaboratively by using Processing and Madmapper. We also extends its interactivity by adding wireless control using Xbee with Arduino. In the project, light intensity will be determined by video fed to the software, sent through Art-Net over ethernet or USB to a DMX interface, and then to the LED dimmer. The LED dimmer will take the intensity value depending on their allowed addresses and dim the LED strip connected to the corresponding output by fast-switching the voltage provided by the power supply."
  },

  {
    id: "fishpond",
    name: "Fishpond",
    type: "New Media Project",
    year: "2015",
    tools: "Processing / Leap Motion",
    role: "Design / Development",
    images: [
      "/images/fishpond-1.jpg",
      "/images/fishpond-2.jpg",
      "/images/fishpond-3.jpg",
      "/images/fishpond-4.jpg"
    ],
    headerImage: "/images/fishpond-header.jpg",
    mobileImage: "/images/fishpond-mobile.jpg",
    video: "https://www.youtube.com/embed/WA1glTNQqQ4",
    websiteLink: null,
    color: "black",
    caption:
      "A new media project that brings empathy into interaction experience",
    info:
      "Fishpond is a new media project that wants to bring empathy into the experience. Using water as the communication interface creates a subtle tactile impression and intimacy during the interaction. The texture of water and the rhythm of fishes make every visitor have their unique emotional interpretations."
  },

  {
    id: "temple",
    name: "Temple",
    type: "VR/AR Photogrammetry App",
    year: "2016",
    tools: "Unity / Pixel4D",
    role: "Design / Development",
    images: [
      "/images/temple-1.jpg",
      "/images/temple-2.jpg",
      "/images/temple-3.jpg",
      "/images/temple-4.jpg",
      "/images/temple-5.jpg",
      "/images/temple-6.jpg",
      "/images/temple-7.jpg"
    ],
    headerImage: "/images/schb-header.jpg",
    mobileImage: "/images/schb-mobile.jpg",
    video: null,
    websiteLink: null,
    color: "black",
    caption:
      "A digital project of documenting and presenting Chinese historic buildings in a new way.",
    info:
      "Temple is a digital project of documenting and presenting Chinese historic buildings in a new way. The initial idea behind this project is to digitalize a fair amount of ancient temples in China by using assorted technologies like photogrammetry and virtual reality. The project contains two tiers - the backend and the frontend.  The backend layer is the data layer which contains detailed information about each building that have been documented. This includes building’s 3D mesh, texture data, range data and point cloud data etc. These data collection have potential value in many aspects such as research studies and future restoration. Meanwhile, a part of the collected data such as 3D mesh, 360 images and videos can be used to create the presentation layer of the project - a VR/AR mobile app.  In the app, users are able to explore the building interactively by watching the 360 video about the interior of the building or observing the building’s 3D model under the AR mode. The ultimate goal of this project is trying to draw people’s attention on those valuable historic buildings and finally raising their protection awareness of those relics."
  }
];

export default projects;

// {
//     id: "eventor",
//     name: "Eventor",
//     type: "Web Project",
//     year: "2019",
//     tools: "ReactJS / Firebase",
//     role: "Design / Development",
//     images: [
//       "/images/eventor-1.jpg",
//       "/images/eventor-2.jpg",
//       "/images/eventor-3.jpg",
//       "/images/eventor-4.jpg",
//       "/images/eventor-5.jpg"
//     ],
//     headerImage: "/images/eventor-header.jpg",
//     mobileImage: "/images/eventor-mobile.jpg",
//     video: null,
//     websiteLink: "https://run-run-222202.firebaseapp.com/",
//     color: "white",
//     caption: "A full-stack events sharing web application",
//     info:
//       "Eventor is a full-stack web application for people who are looking for new events around them. The user can create, join or share events on the platform. It’s a practice project of mine to learn React, Redux and Firebase."
//   }
