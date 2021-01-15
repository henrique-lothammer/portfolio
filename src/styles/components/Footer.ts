import styled from "styled-components";

export const SocialLinks = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    li{
        svg{
            width: 50px;
            height: 50px;
        }
    }

    @media (max-width: 425px) {
        li{
            svg{
                width: 40px;
                height: 40px;
            }
        }
    }
`; 