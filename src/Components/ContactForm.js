import { useState, useRef, useEffect } from 'react'

import styled from 'styled-components'

function ContactForm() {

    const formContainerRef = useRef('');
    const formRef = useRef('');

    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const formHeight = formRef.current.getBoundingClientRect().height
        if(showForm){
            formContainerRef.current.style.height = `${formHeight}px`
        } else {
            formContainerRef.current.style.height = '0px'
        }
    }, [showForm])

    return (
        <ContactFormWrapper id="contactme">
            <p> need a developer or a designer ? it's my job, but... </p>
            <p> Be warned! you may never want to let me go </p>

            <button onClick={() => setShowForm(!showForm)}> {!showForm ? "show admin contact form" : "collapse admin contact form"}  </button>

            <FormContainer ref={formContainerRef}>
                <form ref={formRef}>

                    <p onClick={() => setShowForm(!showForm)}> fill out this form to react out to me </p>

                    {/* <label htmlFor="name"> Name </label> */}
                    <input type="text" name="name" id="name" placeholder="Your name - IMPORTANT" />

                    {/* <label htmlFor="email"> Email Address </label> */}
                    <input type="email" name="email" id="email" placeholder="Your email address - IMPORTANT" />

                    {/* <label htmlFor="topic"> Topic </label> */}
                    <input type="text" name="topic" id="topic" placeholder="Message Topic" />

                    {/* <label htmlFor="textarea"> Message </label> */}
                    <textarea name="textarea" id="textarea" placeholder="Your Message" rows={5} /> <br/>

                    <button type="submit"> SEND MESSAGE </button>

                </form>
            </FormContainer>
            
        </ContactFormWrapper>
    )
}

export default ContactForm

const ContactFormWrapper = styled.section`
    padding: 50px 2rem;
    transition: 500ms;
    text-align: center;

    &:hover {
        padding-top: 100px;
    }

    > p:first-of-type {
        text-transform: uppercase;
        color: #999;
    }

    > p:nth-child(2) {
        text-transform: capitalize;
        font-weight: 900;
        font-size: 35px;
        cursor: pointer;
    }

    > button {
        padding: 15px 5px;
        font-family: 'Abel', sans-serif;
        margin-top: 20px;
        width: 50%;
        font-size: 13px;
        background-color: darkred;
        text-transform: capitalize;
        color: white;
        border: 1px solid black;
        outline: none;
        position: relative;
        cursor: pointer;
        box-shadow: 0 0 5px black;
        z-index: 1;
        transition: 500ms cubic-bezier(0.19, 1, 0.22, 1);

        &:hover {
            background-color: rgb(95, 10, 10);     
        }

        @media screen and (min-width: 600px) {
            width: 25%;
        }
    }
`

const FormContainer = styled.div`
    height: auto;
    overflow: hidden;
    transition: 500ms;

    > form {
        display: grid;
        max-width: 500px;
        margin: 0 auto;
        text-align: left;

        > p {
            text-align: center;
            text-transform: capitalize;
            text-decoration: underline;
            color: #555;
            font-size: 16px;
            font-weight: 700;
            margin: 30px 0 10px 0;
        }

        > label {
            font-weight: 700;
            margin-bottom: 7px;
        }

        > input, button {
            height: 35px;
            padding: 0 10px;
            border: none;
            border-bottom: 1px solid black;
            outline: none;
            margin-bottom: 10px;
        }

        > textarea {
            padding: 10px;
            border: 1px solid black;
            outline: none;
            box-shadow: 0 0 2px black;
        }

        > button {
            cursor: pointer;
            border: 1px solid black;
            transition: 500ms;

            &:hover {
                background-color: darkred;
                color: white;
            }
        }
    }
`
