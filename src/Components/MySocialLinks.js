import styled from 'styled-components'
import { IconButton } from '@material-ui/core'
import { GitHub, LinkedIn, Instagram, YouTube } from '@material-ui/icons';

const MySocialLinks = () => {
    return (
        <Socials>
            <li>
                <a href="https://github.com/Nurmalee"> 
                    <IconButton> 
                        <GitHub />
                    </IconButton>
                </a>
            </li>

            <li>
                <a href="https://linkedIn.com/Nurmalee"> 
                    <IconButton> 
                        <LinkedIn />
                    </IconButton>
                </a>
            </li>

            <li>
                <a href="https://instagram.com/thecodedlee"> 
                    <IconButton> 
                        <Instagram />
                    </IconButton>
                </a>
            </li>

            <li>
                <a href="https://youtube.com/Nurmalee"> 
                    <IconButton> 
                        <YouTube />
                    </IconButton>
                </a>
            </li>
        </Socials>
    )
}

export default MySocialLinks

const Socials = styled.ul`
    list-style-type: none;
    display: flex;

    > li > a {
        .MuiIconButton-root {
            &:hover {
                background-color: white;

                .MuiSvgIcon-root {
                    color: brown;
                }
            }
        }
        .MuiSvgIcon-root {
            font-size: 22px;
            color: #bbb;
        }
    }
`
