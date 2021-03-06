const projects = [
  {
    name: 'Triceratops Republic',
    sum: 'A single-page e-commerce web application',
    description: 'Triceratops Republic is a single-page e-commerce HTML5 web application designed to showcase clothing products.',
    disPic: '../images/fec/FEC_display_bw.jpg',
    tech:'JavaScript | Node | React',
    slides:[
      {
        name:'Full Page',
        info:'The page contains for sections: Overview, Related Product/Your Outfit, Q & A, Ratings & Reviews.',
        pic: '../images/fec/fullpage.gif'
      },
      {
      name:'Overview',
      info:'The Overview Section of a selected prodcut. Users are able to view photos in larger size, select styles/size and add to cart.',
      pic: '../images/fec/overview.gif'
    },
    {
      name:'Related Products / My List',
      info:'The Related Produts Carousel shows all products related to current product. Users are able to compare products and add products to My List.',
      pic: '../images/fec/relatedProducts.gif'
    },
    {
      name:'Q & A',
      info:'The Q & A Section shows all the questions and answers regarding crrent product.',
      pic: '../images/fec/questionsAndAnswers.gif'
    },
    {
      name:'Rationgs and Reviews',
      info:'The Ratings and Reviews section displays product reviews and the averge rating of current product calculated from all customer inputs.',
      pic: '../images/fec/ratingsAndReviews.gif'
    }]
  },
  {
    name: 'Smove',
    sum: 'The one-stop-platform for users to manage their move',
    description: 'Smove is a one-stop-platform for users to manage their move with ease! The application integrates all the pieces of moving including finding vendors, tracking tasks and inventory, and collaborating with family & friends.',
    disPic: '../images/smove/smove_display_sm_bw.jpg',
    tech:'JavaScript | React | Google API',
    slides:[
      {
        name:'Sign In with Google',
        pic: '../images/smove/login.png'
      },
      {
        name:'Profile Pageprofile',
        pic: '../images/smove/profile.png'
      },
      {
        name:'Task List',
        pic: '../images/smove/task.png'
      },
      {
        name:'Google Calendar',
        pic: '../images/smove/calendar.png'
      },
      {
        name:'Inventory',
        pic: '../images/smove/inven.png'
      },
      {
        name:'Local Moving Services',
        pic: '../images/smove/map.png'
      }
    ]
  },
  {
    name: 'Catwalk System Design',
    sum: 'A back-end system for a legacy website',
    description: 'The project is a back-end design for a front-end legacy codebase for an e-commerce we application focused on clothing and apparel. ',
    disPic: '../images/sdc/sdc_display_sm_bw.jpg',
    tech:'PostgreSQL | NginX | AWS',
    slides:[
      {
        name:'Database Schema Design',
        pic: '../images/sdc/schema.png'
      },
      {
        name:'Loader.io Test for Questions API',
        pic: '../images/sdc/question.jpeg'
      },
      {
        name:'Loader.io Test for Answers API',
        pic: '../images/sdc/answer.jpeg'
      },
    ]
  },

  {
    name: 'handyHelpers',
    sum: 'A web application to help your neighbors',
    description: 'A web application that allows users to ask for help within the local community. Users can post/accpet/track jobs',
    disPic: '../images/handy/handy_display_sm_bw.jpg',
    tech:'JavaScript | Express| React',
    slides:[
      {
        name:'Login Page',
        pic: '../images/handy/login.png'
      },
      {
        name:'Main Page - User Profile / Request / Listing / Map',
        pic: '../images/handy/profile.png'
      },
      {
        name:'Check Job Status',
        pic: '../images/handy/jobStatus.png'
      }
    ]
  },
  {
    name: 'Who am I?',
    sum: 'A mini hidden picture game on mobile',
    description: 'In the game, the image was covered by a 4 X 5 grid with only one tile uncovered. The player then guesses what the character is from covered images.',
    disPic: '../images/guess/guess_display_sm_bw.jpg',
    tech:'JavaScript | React Native',
    slides:[
      {
        name:'Starting the game',
        pic: '../images/guess/guesssm_1.gif'
      },
      {
        name:'Game play',
        pic: '../images/guess/guesssm_2.gif'
      },
      {
        name:'Game Over Screen',
        pic: '../images/guess/guesssm_3.gif'
      }]
    },
    {
      name: 'More Projects',
      sum: 'Other mini projects',
      description: 'I am working everyday to polish my skills. Here are some of the mini projects',
      disPic: '../images/moreProject_bw.jpg',
      tech:'JavaScript | TypeScript | Python',
      slides:[
        {
          name: 'Virus Invasion created with Python and PyGame',
          pic: '../images/virus.gif'
        },
        {
          name:'Single page application - Typing Speed Test',
          pic: '../images/typingTester.png'
        },
        {
          name:'HTML/CSS Resume page',
          pic: '../images/css-portfolio.png'
        },
        {
          name:'Analog Clock',
          pic: '../images/clock.png'
        }]
      }
]

export default projects;