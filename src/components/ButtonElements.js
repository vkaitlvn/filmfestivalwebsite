import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
    font-size: 3rem;
    font-weight: 500;
    text-transform: uppercase;
    color: black;
    padding: 10px 20px;
    border-radius: px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    color: white;
    margin-top: 20px;

    &:hover{
        transition: all 0.2s ease-in-out;
        color: black;
    }

    // @media screen and (max-width: 500px){
    //     font-size: 15px;
    // }

    // @media screen and (max-width: 320px){
    //     font-size: 10px;
    //     padding: 12px 30px};

    // }

    // @media screen and (max-width: 280px){
    //     font-size: 8px;
        

    // }



`;