import styled from "styled-components";

export const BackButton = styled.div`
    margin: 0 0 30px;
    display: inline-block;
    a{
        cursor: pointer;
        font-size: 16px;
        min-width: 42px;
        color: #FFF;
        background: #191a1d;
        border: 1px solid #FFF;
        border-radius: 50%;
        margin-left:10px;
        transition: 0.2s;

        display: flex;
        align-items: center;
        justify-content: center;
        height: 42px;
        width: 42px;

        &:hover {
            background: #fff;
            color: #191a1d;
        }
    }
`;

export const Language = styled.div`
    position: absolute;
    right: 0;
    top: 0;

    button{
        font-size: 16px;
        padding: 10px;
        min-width: 42px;
        height: 42px;
        color: #FFF;
        background: #191a1d;
        border: 1px solid #FFF;
        border-radius: 50%;
        margin-left:10px;
        transition: 0.2s;
        cursor: pointer;

        &:hover, &.active {
            background: #fff;
            color: #191a1d;
        }
    }
`;

export const Introduction = styled.div`
    p{
        font-size: 3rem;
    }
`; 