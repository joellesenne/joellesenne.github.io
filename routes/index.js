var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: "Hello, World !", 
    name: "Joël Lesenne",
    url: "https://joellesenne.dev", 
    description: "I'm a web developer",
    descSkills: "I’m working on making standards user interface  for you.",
    descLearnings: "Creating a app to the needs in the framework of my training on OpenClassRooms.",
    descContact: "If you liked my work, contact me for a study on your expectations.",
    skills: [
      {
        title: "My web site",
        source: {
          title: "source",
          url: "https://github.com/joellesenne/joellesenne.dev"
        },
        demo: {
          title: "demo",
          url: "https://joellesenne.dev"
        },
      },
      {
        title: "Lab experimentation",
        source: {
          title: "source",
          url: "https://github.com/joellesenne/lab.joellesenne.dev"
        },

        demo: {
          title: "demo",
          url: "https://lab.joellesenne.dev"
        },
      },
      {
        title: "My CV-resume",
        source: {
          title: "source",
          url: "https://github.com/joellesenne/cv.joellesenne.dev"
        },
        demo: {
          title: "demo",
          url: "https://cv.joellesenne.dev"
        },
      }
    ], 
    learnings: [
      {
        title: "CV resume",
        source: {
          title: "source",
          url: "https://github.com/joellesenne/ocr-dw-p2-cv-resume"
        },
        demo: {
          title: "demo",
          url: "https://joellesenne.github.io/ocr-dw-p2-cv-resume"
        },
      },
      {
        title: "Ohmyfood",
        source: {
          title: "source",
          url: "https://github.com/joellesenne/ocr-dw-p3-ohmyfood"
        },

        demo: {
          title: "demo",
          url: "https://joellesenne.github.io/ocr-dw-p3-ohmyfood"
        },
      },
      {
        title: "La chouette agence",
        source: {
          title: "source",
          url: "https://github.com/joellesenne/ocr-dw-p4-la-chouette-agence"
        },
        demo: {
          title: "demo",
          url: "https://joellesenne.github.io/ocr-dw-p4-la-chouette-agence"
        },
      },
    ],
    currentLearning: [
      {
        title: "Orinoco",
        source: {
          title: "source",
          url: "https://github.com/joellesenne/ocr-dw-p5-orinoco"
        }
      },
      {
        title: "So-Pekocko",
        source: {
          title: "source",
          url: "https://github.com/joellesenne/ocr-dw-p6-so-pekocko"
        }
      },
      {
        title: "Groupomania",
        source: {
          title: "source",
          url: "https://github.com/joellesenne/ocr-dw-p7-groupomania"
        }
      }
    ],
    socials: {
      github: {
        title: "github",
        url: "https://github.com/joellesenne"
      },
      twitter: {
        title: "twitter",
        url: "https://twitter.com/joellesenne"
      }
    },
    contact : {
      mail : "contac@joellesenne.dev",
      tel : "+33611578371",
      site : "joellesenne.dev"
    }
  });
});

module.exports = router;
