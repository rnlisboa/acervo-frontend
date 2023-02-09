import styled from 'styled-components';
import * as c from '../../config/default'
export const Container = styled.div`
    ${c.TitleFont}
    display: flex;
    width: 100%;
    align-items: center;
    color: ${c.BackgroundHeader};
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Mulish', sans-serif;
    padding: 10px;
    cursor: pointer;
    border-radius: 3px;
    margin: 0 15px 20px;
    transition: all 100ms;
    width: 80%;

    &:hover {
        color: #001F3F98;
    }
`;