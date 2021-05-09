import './extended.css'
import styled from 'styled-components'

// import { AiOutlineMinusSquare, AiFillPlusSquare } from 'react-icons/ai'

function Technology({title, info, Icon}, props) {
    // const [showMore, setShowMore] = useState(false)

    return (
        <TechnologyCard>
            <TechnologyTitle>
                <TechnologyIcon>
                    {Icon && <Icon className="icon" />}
                    <h4>{title}</h4>
                </TechnologyIcon>
                <p></p>
                {/* {showMore ?  <AiOutlineMinusSquare className="plus-minus-icon"  onClick={() => setShowMore(!showMore)} /> : <AiFillPlusSquare className="plus-minus-icon" onClick={() => setShowMore(!showMore)} />} */}
            </TechnologyTitle>
            {/* {showMore &&  <p className="technology-info" >{info}</p>} */}
        </TechnologyCard>
    )
}

export default Technology 

const TechnologyCard = styled.div`
    cursor: pointer;
    border: 1px solid ${props => props.theme.title};
    border-radius: 2px;
    border-bottom-right-radius: 10px;
    box-shadow: 7px 5px 5px ${props => props.theme.shadow};
    background-color: ${props => props.theme.background};
    align-self: flex-start;
    color: #555;
    padding: 10px 20px;
    transition: 200ms;
`

const TechnologyTitle = styled.div`
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    padding-bottom: 5px;
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 500;
    position: relative;

    > p {
        margin: 5px 0;
        margin-bottom: 3px;
        border-radius: 10px;
        height: 2px;
        background-color: rgba(0, 0, 0, 0.4);
        position: relative;

        &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            height: 100%;
            width: 0;
            /* border: 1px solid ${props => props.theme.title}; */
            background-color: brown;
            transition: 1500ms cubic-bezier(0.215, 0.610, 0.355, 1);
        }
    }
`

const TechnologyIcon = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    > h4 {
        font-family: 'Abel', sans-serif;
        margin-left: 10px;
        color: ${props => props.theme.title};
    }
`
