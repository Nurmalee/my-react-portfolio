import styled from 'styled-components'
import { techList } from '.././sourceData/data'
import Technology from './Technology'


function Technologies() {

    return (
        <TechnologiesContainer id="technologies">
            <h1>some technologies that I employ</h1>

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
    margin-top: 50px;
    transition: 500ms;
    width: 100%;
    flex: 1;

    > h1 {
        color: black;
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

    @media screen and (min-width: 750px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 950px) {
        grid-template-columns: repeat(4, 1fr);
    }
`
