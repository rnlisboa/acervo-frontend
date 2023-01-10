import styled from 'styled-components';
import * as c from '../../config/default'
export const Container = styled.div`
    ${c.TitleFont}
    display: flex;
    align-items: center;
    background-color: ${c.BackgroundHeader}; 
    font-size: 20px;
    color: white;
    font-family: 'Mulish', sans-serif;
    padding: 10px;
    cursor: pointer;
    border-radius: 3px;
    margin: 0 15px 20px;
    transition: all 300ms;
    width: 80%;
    > svg {
        margin: 0 20px;
    }

    &:hover {
        background-color: black;
    }
`;