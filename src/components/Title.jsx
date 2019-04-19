import React from 'react';
import styled from 'styled-components';

import { RED, DARK_RED, white } from '../styles/styles';


const StyledTitle = styled.div`
    height: 160px;
    ${'' /* background-color: #FFE53B; */}
    background-image: linear-gradient(147deg, ${RED} 10%, ${DARK_RED} 84%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${white()};
    margin-bottom: 50px;

    h1 {
        font-size: 2em;
        margin-bottom: 0;
    }

    p {
        font-size: 1.5em;
    }
`;

const Title = (props) => (
    <StyledTitle>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </StyledTitle>
)

export default Title;