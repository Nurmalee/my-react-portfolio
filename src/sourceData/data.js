//project-images
import youtube_clone from '.././images/works/Youtube-VanillaJs-Clone.JPG'
import porsche_garage from '.././images/works/My-Porsche-Garage-Landing-Page.JPG'
import pepsi_landing from '.././images/works/Pepsi-Landing-Page.JPG'
import products_page from '.././images/works/Product-Pricing-Page.JPG'
import watchesHq from '.././images/works/Watches-Landing-Page.JPG'
import random_users from '.././images/works/react-random-users-app.JPG'
import linkedIn_clone from '.././images/works/linkedIn-clone.JPG'
import instagram_clone from '.././images/works/instagram_clone.JPG'
import jumia_clone from '.././images/works/jumia-clone.JPG'
import facebook_clone from '.././images/works/facebook_clone.JPG'
import formplus_templates from '.././images/works/formplus_templates.JPG'


//react-icons
import { FaReact, FaCss3Alt, FaHtml5, FaBootstrap, FaNodeJs } from 'react-icons/fa'
import { SiAdobeillustrator, SiFirebase, SiMaterialUi, SiStyledComponents, SiRedux } from 'react-icons/si'
import { DiJqueryLogo, DiJavascript, DiCodeigniter } from 'react-icons/di'
import { CgFigma } from 'react-icons/cg'
import {BsCodeSlash} from 'react-icons/bs'
import {MdGraphicEq} from 'react-icons/md'



export const navList = [
    {
        title: 'home',
        href: '#home'
    },
    {
        title: 'about',
        href: '#about'
    },
    {
        title: 'services',
        href: '#services'
    },
    {
        title: 'works/projects',
        href: '#projects'
    },
    {
        title: 'contact me',
        href: '#contactme'
    }
]

export const bannerList = [
    {
        id: 1,
        title: 'the hub of enthralling & functional websites',
        info: 'Javascript is the now and the future. I build exquisite and functional user interfaces which are in trueness, functional. This portfolio in fact was made with react js. It showcases the flexibility of functional components with a bunch of use cases for the most commonly used react hooks.',
    },
    {
        id: 2,
        title: 'seamless focus and priority on responsiveness',
        info: 'Responsiveness prioritized. At the heart of all my designs and websites is responsive ability for all user interfaces in what i like to call the "ultra-responsive confidence". All my websites are made to work on all devices to ensure an unforgettable user experience that will keep you in awe.',
    },
    {
        id: 3,
        title: 'web app clones that make the original look the inferior',
        info: 'Herein is a few collection of clones of popular social media spaces. These builds make the original looks as though they might need an upgrade.',
    }
]

export const myServices = [
    {
        title: "RESPONSIVE WEB DESIGN",
        Icon: DiCodeigniter,
        statement: "Responsiveness prioritized. All my designs feature my trademark  'ultra-responsive confidence'. Pages and interfaces are made to transition seamlessly across all screen sizes for an hitch-free user experience"
    },
    {
        title: "GRAPHIC DESIGN",
        Icon: MdGraphicEq,
        statement: "When I'm not designing with the web, I can be found designing on Adobe Illustrator. It's safe to say that I think and breathe design"
    },
    {
        title: "CLEAN/SCALABLE CODE",
        Icon: BsCodeSlash,
        statement: "I write code that is characteristically easy to read, easy to adjust, easy to update, easy to upgrade. My code base is constantly updated with technological/industry trends and new ideas"
    },
]



export const techList = [
    {
        title: 'Html5',
        Icon: FaHtml5,
    },
    {
        title: 'Css3 (incl. Bootstrap, SASS)',
        Icon: FaCss3Alt,
    },
    {
        title: 'Javascript (ES6+)',
        Icon: DiJavascript,
    },
    {
        title: 'React (incl. Redux)',
        Icon: FaReact,
    },
    {
        title: 'Redux',
        Icon: SiRedux,
    },
    {
        title: 'Node (with MongoDB & Express)',
        Icon: FaNodeJs,
    },
    {
        title: 'Firebase',
        Icon: SiFirebase,
    },
    {
        title: 'Material Ui',
        Icon: SiMaterialUi,
    },
    {
        title: 'Bootstrap',
        Icon: FaBootstrap,
    },
    {
        title: 'jQuery',
        Icon: DiJqueryLogo,
    },
    {
        title: 'Adobe illustrator & CorelDraw',
        Icon: SiAdobeillustrator,
    },
    {
        title: 'Figma & Balsamiq Wireframe',
        Icon: CgFigma,
    }
]

export const projectList = [
    {
        imageUrl: jumia_clone,
        title: 'Jumia E-Commerce Clone',
        type: 'react js',
        // info: 'This is the proposed inspiration for the official website of Brisk and Sleek Arch Ventures. An upcoming architectural firm that deals in completion of architecural drawings, building construction, supervision, renovations, maintenance, production of quantity bills and so much more extended dealings related to construction development',
        technologies: 'html (jsx), css, javascript, react, material-ui, redux',
        React: FaReact,
        MaterialUi: SiMaterialUi,
        Redux: SiRedux,
        link: "https://jumia-commercial.netlify.app/"
    },
    {
        imageUrl: formplus_templates,
        title: 'formplus templates task',
        type: 'react js',
        info: 'As an individual who loves networking, I spend a whole lot of my time every day on linkedIn meeting new people. LinkedIn is the best and the most popular online job related platform where professionals meet on a professional level. This build was practically my first major build with ReactJs, it was a revelation, a game changer',
        technologies: 'html (jsx), css, javascript, react, redux',
        React: FaReact,
        Redux: SiRedux,
        StyledComponents: SiStyledComponents,
        link: "https://formplus-templates-api-task.netlify.app/"
    },
    {
        imageUrl: linkedIn_clone,
        title: 'linkedIn clone',
        type: 'react js',
        info: 'As an individual who loves networking, I spend a whole lot of my time every day on linkedIn meeting new people. LinkedIn is the best and the most popular online job related platform where professionals meet on a professional level. This build was practically my first major build with ReactJs, it was a revelation, a game changer',
        technologies: 'html (jsx), css, javascript, react, material-ui, firebase',
        React: FaReact,
        Firebase: SiFirebase,
        MaterialUi: SiMaterialUi,
        link: "https://nurmalee.github.io/linkedIn-webapp-clone/"
    },
    {
        imageUrl: porsche_garage,
        title: 'porsche garage',
        type: 'vanilla js',
        info: 'I love speed, I love fast cars and I love the porsche brand. This enthralling website was created as an imaginative representation of the kind of cars I wish I had in my garage as at the time. It displays images of beautiful models of porsche car models and a few specifications to go along with each',
        technologies: 'html, css, javascript',
        Html5: FaHtml5,
        Css: FaCss3Alt,
        Javascript: DiJavascript,
        link: "https://nurmalee.github.io/Old-Projects/my_porsche_garage/garage.html"
    },
    {
        imageUrl: instagram_clone,
        title: 'Instagram Clone',
        type: 'react js',
        info: 'An explicit clone of the all popular instagram app from facebook. This desktop version of instagram was inspired from my love for using instagram',
        technologies: 'html (jsx), css, javascript, react, styled-components, firebase',
        React: FaReact,
        Firebase: SiFirebase,
        StyledComponents: SiStyledComponents,
        link: "https://instagramlee.herokuapp.com"
    },
    {
        imageUrl: random_users,
        title: 'random users app',
        type: 'react js',
        info: 'A catchy UI for a user dashboard. This user landing/dashboard was created as part of an assessment program for a 3 months internship with Decagon Institute sponsored by the UKNGTech. This app uses the random users API to generate random users on every reload where a user can then search the list by names or by gender to get more user detail. Open the project to experience the functionality',
        technologies: 'html (jsx), css, javascript, react, react-icons, material-ui',
        React: FaReact,
        MaterialUi: SiMaterialUi,
        link: "https://nurmalee.github.io/github-pages-my-users-app-react/"
    },
    {
        imageUrl: facebook_clone,
        title: 'facebook clone',
        type: 'react js',
        info: 'Although I dont use the facebook app, It was worth making this build, and considering that I have made an intriguing version of the instagram, I decided to face off with the guys at facebook with a clone of all their applications',
        technologies: 'html (jsx), css, javascript, react, material-ui, firebase',
        React: FaReact,
        Firebase: SiFirebase,
        MaterialUi: SiMaterialUi,
        link: "https://nurmalee.github.io/facebook-webapp-clone/"
    },
    {
        imageUrl: products_page,
        title: 'products pricing page',
        type: 'vanilla js',
        info: 'This product checkout landing page was made as a part of the Dufuna Code Camp DOM manipulation assessment test (It currently stands out as the best for design and functionality). It simulates how a buyer can alter the quantity of a selected product and get the corresponding price based on well indicated percent inclusions and exclusions.',
        technologies: 'html, css, javascript',
        Html5: FaHtml5,
        Css: FaCss3Alt,
        Javascript: DiJavascript,
        link: "https://nurmalee.github.io/Old-Projects/product_pricing/html/products.html"
    },
    {
        imageUrl: pepsi_landing,
        title: 'pepsi landing page',
        type: 'vanilla js',
        info: 'Inspired by an instagram post made by a UI/UX expert. This pepsi landing page features a display of variants of the beverages of the pepsi brand. It has hover functionality for product display shuffle and it is highly screen responsive... I guess you should see for yourself',
        technologies: 'html, css, javascript',
        Html5: FaHtml5,
        Css: FaCss3Alt,
        Javascript: DiJavascript,
        link: "https://nurmalee.github.io/Old-Projects/pepsi_landing_page/pepsi.html"
    },
    {
        imageUrl: youtube_clone,
        title: 'youtube clone',
        type: 'vanilla js',
        info: 'We all know youtube is the home of video information. Without youtube, I will probably not know all the useful random and extra things that I know as of today, including software development. The first ever coding impression I got was from a channel owned by a japanese on youtube where he taught the python language before I dived into javascript. All these birthed the ground for making this build. In the coming days I plan to make it even better and functional by making a remake with react js',
        technologies: 'html, css, javascript',
        Html5: FaHtml5,
        Css: FaCss3Alt,
        Javascript: DiJavascript,
        link: "https://nurmalee.github.io/Old-Projects/youtube_clone/index.html"
    },
    // {
    //     imageUrl: watchesHq,
    //     title: 'watches sales demo',
    //     type: 'vanilla js',
    //     info: 'Time is an important factor, so I found. As a lover of watches, I have created this beautiful watch sales demo landing page that displays different brands of wrist watches with switch functionality for gender specification',
    //     technologies: 'html, css, javascript',
    //     Html5: FaHtml5,
    //     Css: FaCss3Alt,
    //     Javascript: DiJavascript,
    //     link: "https://nurmalee.github.io/Old-Projects/watches_hq/watches.html"
    // },
]