import React from 'react'
import './AboutMe.css'
import me from '.././images/me.jpg'

const aboutEssay = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus deserunt voluptatum dignissimos iste fugiat doloremque, dolores quas officiis animi error in rerum sunt repudiandae odio ab id numquam deleniti saepe nostrum repellendus cumque. Nisi autem vel, alias assumenda provident ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam laboriosam qui quis quam repudiandae libero, pariatur eligendi provident odio, eum, corporis rem quisquam deleniti quaerat. Impedit, laboriosam. Aliquid optio at dolore, molestias, veniam dolorum debitis soluta natus molestiae quasi nam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum velit nihil deserunt dolorem nesciunt qui laboriosam, non deleniti culpa odit dolorum dicta ad, facilis voluptatem tempora, quia reiciendis porro soluta maiores vitae debitis! Asperiores doloremque aspernatur, deserunt earum, voluptate quos dolores id odit, itaque dignissimos quasi ad incidunt provident vel?'

function AboutMe() {

    return (
        <section className="about-me" id="about">
            <h1>About Me</h1>
            <div className="underline"></div>
            
            <div className="about-info">
                <img src={me} alt="Nurudeen Lawal" />
                <p className="info"> {aboutEssay} </p>
            </div>
            <a href="#home" > ddsd </a>
        </section>
    )
}

export default AboutMe
