import styled from 'styled-components'

import backgroundImg from '../images/joel-filipe-aK0EmfPuktA-unsplash.jpg'

function ContactForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <ContactFormWrapper id="contactme">
            <p> need a developer or a designer ? it's what I do ... </p>
            <p>Use this form to reach out to me for collaborations, contract/full-time engagements as well as freelancing possibilities</p>

            <FormContainer>
                <form onSubmit={handleSubmit}>

                    {/* <label htmlFor="name"> Name </label> */}
                    <input type="text" name="name" id="name" placeholder="Your Name" />

                    {/* <label htmlFor="email"> Email Address </label> */}
                    <input type="email" name="email" id="email" placeholder="Your Email Address" required/>

                    {/* <label htmlFor="topic"> Topic </label> */}
                    <input type="text" name="topic" id="topic" placeholder="Your Message Subject" required />

                    {/* <label htmlFor="textarea"> Message </label> */}
                    <textarea name="textarea" id="textarea" placeholder="Your Message" rows={5} required/> <br/>

                    <button type="submit"> SEND MESSAGE </button>

                </form>
            </FormContainer>
            
        </ContactFormWrapper>
    )
}

export default ContactForm

const ContactFormWrapper = styled.section`
    background-image: url(${backgroundImg});
    background-color: #333;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 100px 2rem;
    transition: 500ms;
    text-align: center;

    > p:first-of-type {
        text-transform: uppercase;
        font-family: 'Antonio', sans-serif;
        font-size: 35px;
        color: teal;
        font-weight: 600;
    }

    > p:nth-of-type(2) {
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        color: #222;
        max-width: 500px;
        margin: 0 auto;
    }
`

const FormContainer = styled.div`
    margin-top: 20px;

    > form {
        display: grid;
        max-width: 500px;
        margin: 0 auto;
        /* margin-top: 20px; */
        text-align: left;

        > label {
            font-weight: 700;
            margin-bottom: 7px;
        }

        > input, button {
            height: 35px;
            font-family: 'Poppins', sans-serif;
            font-size: 12px;
            padding: 0 10px;
            border: none;
            border: 1px solid teal;
            box-shadow: 0 0 2px black;
            outline: none;
            margin-bottom: 10px;
        }

        > textarea {
            padding: 10px;
            font-family: 'Poppins', sans-serif;
            border: 1px solid teal;
            outline: none;
            box-shadow: 0 0 2px black;
        }

        > button {
            height: 40px;
            cursor: pointer;
            border: 1px solid;
            color: teal;
            font-size: 16px;
            transition: 500ms;
            font-family: 'Antonio', sans-serif;

            &:hover {
                background-color: teal;
                color: white;
            }
        }
    }
`
