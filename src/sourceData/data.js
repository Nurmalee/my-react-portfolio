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
import moviesnow_movies from '../images/works/moviesNow.PNG'


//react-icons
import { FaReact, FaCss3Alt, FaHtml5, FaBootstrap, FaNodeJs } from 'react-icons/fa'
import { SiAdobeillustrator, SiFirebase, SiMaterialUi, SiStyledComponents, SiRedux, SiNextDotJs } from 'react-icons/si'
import { DiJqueryLogo, DiJavascript, DiCodeigniter } from 'react-icons/di'
import { CgFigma } from 'react-icons/cg'
import { BsCodeSlash } from 'react-icons/bs'
import { MdGraphicEq } from 'react-icons/md'



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
        title: 'HTML5',
        Icon: FaHtml5,
    },
    {
        title: 'CSS3',
        Icon: FaCss3Alt,
    },
    {
        title: 'Javascript (ES6+)',
        Icon: DiJavascript,
    },
    {
        title: 'React JS',
        Icon: FaReact,
    },
    {
        title: 'Next JS',
        Icon: SiNextDotJs,
    },
    {
        title: 'Redux',
        Icon: SiRedux,
    },
    {
        title: 'Node JS (with MongoDB & Express)',
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
        title: 'Figma',
        Icon: CgFigma,
    }
]

export const projectList = [
    {
        imageUrl: moviesnow_movies,
        title: 'moviesNow.se',
        type: 'next js',
        technologies: 'html (jsx), css, javascript, react, material-ui, redux',
        React: FaReact,
        MaterialUi: SiMaterialUi,
        Next: SiNextDotJs,
        StyledComponents: SiStyledComponents,
        link: "https://moviesnow-se.vercel.app/"
    },
    {
        imageUrl: jumia_clone,
        title: 'Jumia E-Commerce Clone',
        type: 'react js',
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
        technologies: 'html (jsx), css, javascript, react, react-icons, material-ui',
        React: FaReact,
        MaterialUi: SiMaterialUi,
        link: "https://nurmalee.github.io/github-pages-my-users-app-react/"
    },
    {
        imageUrl: facebook_clone,
        title: 'facebook clone',
        type: 'react js',
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
    //     technologies: 'html, css, javascript',
    //     Html5: FaHtml5,
    //     Css: FaCss3Alt,
    //     Javascript: DiJavascript,
    //     link: "https://nurmalee.github.io/Old-Projects/watches_hq/watches.html"
    // },
]