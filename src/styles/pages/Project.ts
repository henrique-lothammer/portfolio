import styled from 'styled-components';

export const ProjectDescription = styled.div`
    padding: 20px 0 30px;
    line-height: 2.6rem;
    font-size: 1.6rem;

    display: flex;
    align-items: center;
    flex-direction: column;

    img{
        padding:0 0 50px;
        max-width: 90%;
    }
    p{
        padding:0 0 10px;
    }
    ul{
        padding-left: 20px;
    }

    .links{
        padding: 30px 0 30px;
        width: 300px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        a,div{
            font-size: 2.0rem;
            padding: 10px;
            border-radius: 3px;
            color: #fff;
            background: #191a1d;
            border: 1px solid #191a1d;
            cursor: pointer;
            margin: auto;
            transition: 0.2s;

            &:hover{
                background: #fff;
                color: #191a1d;
            }
        }
    }
`;