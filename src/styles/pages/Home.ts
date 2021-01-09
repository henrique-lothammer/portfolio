import styled from 'styled-components';

export const Projects = styled.ul`
    list-style-type: none;
    width: 100%;

    li{
        border-radius: 10px;
        box-shadow: 0 3px 3px 0 rgba(75,91,108,.3);
        margin-bottom: 20px;
        overflow: hidden;
        background: #f1f1f1;
        position: relative;
        margin-left: 0px;
        transition: 0.2s;

        &:hover{
            margin-left: 10px;
        }

        .content{
            display: flex;
            align-items: stretch;
            min-height: 200px;
            min-height: 250px;

            .img{
                width: 50%;
                overflow: hidden;
                max-width: 350px;

                display: flex;
                align-content: stretch;
                align-items: center;
                justify-content: center;

                img{
                    min-height: 100%;
                    object-fit: contain;
                    flex: 1;
                }
            }
            .text{
                display: flex;
                flex-direction: column;
                padding: 20px;
                justify-content: center;
                p{
                    font-size: 3rem;
                }
            }
        }
    }

    @media (max-width: 767px) {
        li .content .img {
            width: 100%;
        }
    }
`;