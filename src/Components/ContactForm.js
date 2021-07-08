import styled from 'styled-components'
import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'

function ContactForm() {

    // const [sendMsgNotify, setSendMsgNotify] = useState('')
    const [sendMsgDone, setSendMsgDone] = useState('')
    const [sendMsgError, setSendMsgError] = useState('')
    const [removeMsgNotify, setRemoveMsgNotify] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7froz6r', 'template_lxrkzgj', e.target, 'user_p7bBt2jrDsoor1LW6MHS0')
        .then((result) => {
            // setSendMsgNotify(result.text)
            setSendMsgDone(result.text)
        }, (error) => {
            // setSendMsgNotify(error.text)
            setSendMsgError(error.text)
        });

        e.target.reset()
    }

    useEffect(() => {
        const msgNotifyTimeout = setTimeout(() => {
            setRemoveMsgNotify(true)
            return () => {
                clearTimeout(msgNotifyTimeout)
            }
        }, 3000)
    }, [])

    return (
        <ContactFormWrapper id="contactme">
            <h2> need my services? send me a messsage </h2>
            <p>Phone: <strong>+234 816 480 0735</strong>; Email: <strong>lawalnurudeenfocus@gmail.com</strong> </p>

            <FormContainer>
                <form onSubmit={handleSubmit}>

                    <input type="text" name="sender_name" placeholder="Full Name" required/>
                    <div>
                        <input type="email" name="sender_email" placeholder="Email Address" required />
                        <input type="text" name="sender_phone" placeholder="Phone Number" required />
                    </div>
                    <textarea name="sender_message" id="textarea" placeholder="Your Message" rows={5} required/> <br/>

                    <button type="submit"> SEND MESSAGE </button>

                </form>
            </FormContainer>

            {!removeMsgNotify && <SendNotification>{sendMsgDone ? <p>Your message was delivered</p> : <p>Your message was delivered</p>}</SendNotification>}
            
        </ContactFormWrapper>
    )
}

export default ContactForm

const ContactFormWrapper = styled.section`
     background-color: ${props => props.theme.background};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 80px;
    padding-bottom: 50px;
    transition: 500ms;
    text-align: center;
    scroll-snap-align: start;

    > h2 {
        text-transform: uppercase;
        font-family: 'Antonio', sans-serif;
        /* font-family: 'Poppins', sans-serif; */
        font-size: 25px;
        color: brown;
        width: 90vw;
        max-width: 500px;
        margin: 0 auto;
        font-weight: 600;
    }

    > p {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        color: ${props => props.theme.title};
        width: 90vw;
        max-width: 500px;
        margin: 10px auto;
    }
`

const FormContainer = styled.div`
    margin-top: 20px;

    > form {
        display: grid;
        width: 90vw;
        max-width: 500px;
        margin: 0 auto;
        /* margin-top: 20px; */
        text-align: left;

        > label {
            font-weight: 700;
            margin-bottom: 7px;
        }

        > input, div > input, button {
            height: 35px;
            font-family: 'Poppins', sans-serif;
            font-size: 12px;
            padding: 0 10px;
            border: none;
            border: 1px solid brown;
            outline: none;
            margin-bottom: 10px;
        }

        > div > input {
            width: 100%;

            &:first-of-type {
                margin-right: 2%;
            }

            @media screen and (min-width: 600px) {
                width: 49%;
            }
        }

        > textarea {
            padding: 10px;
            font-family: 'Poppins', sans-serif;
            border: 1px solid brown;
            outline: none;
        }

        > button {
            height: 40px;
            cursor: pointer;
            border: 1px solid;
            border-bottom-right-radius: 10px;
            width: 50%;
            margin: 0 auto;
            color: brown;
            font-size: 16px;
            transition: 500ms;
            font-family: 'Antonio', sans-serif;

            &:hover {
                background-color: brown;
                color: white;
            }
        }
    }
`

const SendNotification = styled.p`
    border: 1px solid green;
    color: green;
    font-weight: 500;
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0 0 5px #777;
`
