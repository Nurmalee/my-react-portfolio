import styled from 'styled-components'
import {myServices} from '../sourceData/data'

const MyServices = (props) => {
    return (
        <ServicesContainer id="services">

            <SectionHeader>
                <p>services & offers</p>
                <h1>what i do</h1>
            </SectionHeader>

            <Services>
                {
                    myServices.map((service, index) => {
                        const {title, Icon, statement} = service
                        return (
                            <Service key={index}>
                                <div>
                                    <Icon style={{fontSize: "35px", color: "brown"}}/>
                                </div>
                                <h4> {title} </h4>
                                <p> {statement} </p>
                            </Service> 
                        )
                    })
                }
            </Services>
            
        </ServicesContainer>
    )
}

export default MyServices

const ServicesContainer = styled.section`
   text-align: left;
   font-family: 'Poppins', sans-serif;
   background-color: ${props => props.theme.background};
   padding: 80px 0;
   transition: 200ms;
`

const SectionHeader = styled.div`
    width: 90vw;
    max-width: 1000px;
    margin: 0 auto;
    color: #444;

    > h1 {
        color: brown;
        font-family: 'Antonio', sans-serif;
        font-size: 2rem;
        text-transform: uppercase;
        text-align: left;
        letter-spacing: 3px;
        margin: 0 auto;
    }

    > p {
        text-transform: uppercase;
        color: ${props => props.theme.title};
        font-family: 'Poppins', sans-serif;
        letter-spacing: 2px;
        margin: 0 auto;
    }
`

const Services = styled.div`
    width: 90vw;
    max-width: 1000px;
    margin: 20px auto;
    display: grid;
    gap: 25px;

    @media screen and (min-width: 700px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr)
    }
`

const Service = styled.div`
    transition: 200ms;
    box-shadow: 7px 5px 5px ${props => props.theme.shadow};
    border-radius: 5px;
    height: fit-content;
    padding: 30px 20px;
    text-align: center;
    border: 1px solid transparent;
    cursor: pointer;
    align-self: flex-start;
    /* display: grid;
    place-items: center; */

    &:hover {
        border: 1px solid ${props => props.theme.title};
    }

    > div {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 0 auto;
        display: grid;
        place-items: center;
        background-color: ${props => props.theme.title};
        background-color: #222;
    }

    > h4 {
        font-weight: 300;
        font-size: 22px;
        color: brown;
        margin-top: 10px;
        text-transform: uppercase;
        font-family: 'Antonio', sans-serif;
    }


    > p {
        padding: 5px 0;
        font-size: 11px;
        margin: 10px 0;
        font-family: 'Poppins', sans-serif;
        color: ${props => props.theme.title};
    }
`