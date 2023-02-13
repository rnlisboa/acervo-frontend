import styled from 'styled-components';
import * as c from '../../config/default'
export const Container = styled.div`
    ${c.TitleFont}
    width: 100%;
    color: ${c.BackgroundHeader};
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Mulish', sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 100ms;
    width: 100%;
    &:hover {
        color: #001F3F98;
    }
`;