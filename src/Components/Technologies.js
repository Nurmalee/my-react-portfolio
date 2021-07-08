import styled from 'styled-components'
import { techList } from '.././sourceData/data'
import Technology from './Technology'


function Technologies(props) {

    return (
        <TechnologiesContainer id="technologies">
            <h1>languages/technologies</h1>

            <TechnologyCardContainer>
                {techList.map((tech, index) => {
                    return (
                        <Technology {...tech} key={index}/>
                    )
                })}
            </TechnologyCardContainer>
        </TechnologiesContainer>
    )
}

export default Technologies

const TechnologiesContainer = styled.section`
    width: 90vw;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 50px;
    flex: 1;

    > h1 { 
        color: ${props => props.theme.title};
        font-family: 'Abel', sans-serif;
        font-size: 20px;
        text-transform: uppercase;
    }
`

const TechnologyCardContainer = styled.div`
    margin: 20px auto 0 auto;
    display: grid;
    grid-gap: 15px;

    @media screen and (min-width: 550px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }
`
