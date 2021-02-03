import React from 'react'

//project-images
import youtube from '.././images/works/Youtube-VanillaJs-Clone.JPG'
import porsche_garage from '.././images/works/My-Porsche-Garage-Landing-Page.JPG'
import pepsi_landing from '.././images/works/Pepsi-Landing-Page.JPG'
import products_page from '.././images/works/Product-Pricing-Page.JPG'
import watchesHq from '.././images/works/Watches-Landing-Page.JPG'
import random_users from '.././images/works/react-random-users-app.JPG'
import linkedIn_clone from '.././images/works/linkedIn-clone.JPG'


//react-icons
import { FaReact, FaCss3Alt, FaHtml5, FaBootstrap } from 'react-icons/fa'
import { SiAdobeillustrator } from 'react-icons/si'
import { DiJqueryLogo, DiJavascript } from 'react-icons/di'



export const navList = [
    {
        id: 1,
        title: 'home',
        href: '#home'
    },
    {
        id: 2,
        title: 'about',
        href: '#about'
    },
    {
        id: 3,
        title: 'works/projects',
        href: '#projects'
    },
    {
        id: 4,
        title: 'technologies',
        href: '#technologies'
    },
    {
        id: 5,
        title: 'contact me',
        href: '#contact-me'
    }
]

export const bannerList = [
    {
        title: 'the hub of enthralling & functional websites',
        info: 'Javascript is the now and the future. I build exquisite and functional user interfaces which are in trueness, functional. This portfolio in fact was made with react js. It showcases the flexibility of functional components with a bunch of use cases for the most commonly used react hooks. Click any of the buttons below to uncover more....',
    },
    {
        title: 'a seamless focus and priority on responsiveness',
        info: 'Responsiveness prioritized. At the heart of all my designs and websites is responsive ability for all user interfaces in what i like to call the "ultra-responsive confidence". All my websites are made to work on all devices to ensure an unforgettable user experience that will keep you in awe. Click any of the buttons below to uncover more....',
    },
    {
        title: 'clones that make the original look inferior',
        info: 'Herein is a few collection of clones of popular social media spaces. These builds make the original looks as though they might need an upgrade. Click any of the buttons below to uncover more....',
    }
]


export const techList = [
    {
        title: 'html5',
        icon: <FaHtml5 className="tech-icon" />,
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, porro suscipit nemo laudantium ipsa quod.'
    },
    {
        title: 'css3',
        icon: <FaCss3Alt className="tech-icon"  />,
        info: 'Media querry | CSS flexbox | CSS grid and general responsiveness'
    },
    {
        title: 'javascript',
        icon: <DiJavascript className="tech-icon" />,
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, porro suscipit nemo laudantium ipsa quod.'
    },
    {
        title: 'bootstrap',
        icon: <FaBootstrap className="tech-icon" />,
        info: 'Media querry | CSS flexbox | CSS grid and general responsiveness'
    },
    {
        title: 'jQuery',
        icon: <DiJqueryLogo className="tech-icon" />,
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, porro suscipit nemo laudantium ipsa quod.'
    },
    {
        title: 'react',
        icon: <FaReact className="tech-icon" />,
        info: 'Experienced in the use of Class based components | Function based components | React hooks | React router | Context API | Redux'
    },
    {
        title: 'adobe illustrator',
        icon: <SiAdobeillustrator className="tech-icon" />,
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, porro suscipit nemo laudantium ipsa quod.'
    }
]

export const projectList = [
    {
        imageUrl: linkedIn_clone,
        title: 'linkedIn clone',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, porro suscipit nemo laudantium ipsa quod. Numquam voluptatem qui nemo molestiae, harum officia, dignissimos minus nam inventore quibusdam quos ex veritatis?',
    },
    {
        imageUrl: pepsi_landing,
        title: 'pepsi landing page',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, porro suscipit nemo laudantium ipsa quod. Numquam voluptatem qui nemo molestiae, harum officia, dignissimos minus nam inventore quibusdam quos ex veritatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, porro suscipit nemo laudantium ipsa quod.',
    },
    {
        imageUrl: youtube,
        title: 'youtube home page',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, porro suscipit nemo laudantium ipsa quod. Numquam voluptatem qui nemo molestiae, harum officia, dignissimos minus nam inventore quibusdam quos ex veritatis?',
    },
    {
        imageUrl: random_users,
        title: 'random users app',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, porro suscipit nemo laudantium ipsa quod. Numquam voluptatem qui nemo molestiae, harum officia, dignissimos minus nam inventore quibusdam quos ex veritatis?',
    },
    {
        imageUrl: products_page,
        title: 'products pricing page',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, porro suscipit nemo laudantium ipsa quod. Numquam voluptatem qui nemo molestiae, harum officia, dignissimos minus nam inventore quibusdam quos ex veritatis?',
    },
    {
        imageUrl: porsche_garage,
        title: 'porsche garage',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, porro suscipit nemo laudantium ipsa quod. Numquam voluptatem qui nemo molestiae, harum officia, dignissimos minus nam inventore quibusdam quos ex veritatis?',
    },
    {
        imageUrl: watchesHq,
        title: 'watches sales demo',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, porro suscipit nemo laudantium ipsa quod. Numquam voluptatem qui nemo molestiae, harum officia, dignissimos minus nam inventore quibusdam quos ex veritatis?',
    },
]