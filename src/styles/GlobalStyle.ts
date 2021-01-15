import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    html{
        font-size: 62.5%;
    }

    body{
        background: #f5f5f5;
        color: #FFF;
        font-family: Roboto, Arial, Helvetica, sans-serif;
        font-size: 1.6rem;
    }

    .grid{
        position: relative;
        min-height: 100vh;
    }

    header{
        background: #191a1d;
        padding: 50px 20px;
        height: 100%;
        overflow: hidden;
        position: relative;

        &::after{
            content: '';
            width: 150%;
            height: 40px;
            background: #f5f5f5;
            position: absolute;
            bottom: -20px;
            left: -25%;
            transform: rotate(1deg);
        }
    }

    main{
        background: #f5f5f5;
        padding: 20px 20px 100px;
        color: #191a1d;
    }

    footer{
        background: #191a1d;
        padding: 10px 20px;
        height: 100px;
        overflow: hidden;
        position: absolute;
        width: 100%;
        bottom: 0;

        &::after{
            content: '';
            width: 150%;
            height: 40px;
            background: #f5f5f5;
            position: absolute;
            top: -30px;
            left: -25%;
            transform: rotate(-1deg);
        }
    }

    .container{
        position: relative;
        max-width: 1200px;
        margin: auto;
        height: 100%;
    }

    .loader{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        font-size: 2.5rem;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1{
        font-size: 5rem;
        margin-bottom: 30px;
        display: inline-block;
    }

    h2{
        font-size: 3.5rem;
        margin-bottom: 20px;
    }

    @media (max-width: 768px) {
        html {
            font-size: 55%;
        }
    }

    @media (max-width: 550px) {
        html {
            font-size: 45%;
        }
    }

    @media (max-width: 425px) {
        html {
            font-size: 30%;
        }
    }

`; 

