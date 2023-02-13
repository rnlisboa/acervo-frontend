import styled from "styled-components";
import * as c from '../../config/default'
export const HeaderNav = styled.header`
    ${c.RobotoFont}
    ${c.Nastaliq}
    ${c.HeaderLogo}
    ${c.TitleFont}
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: ${c.BackgroundHeader};
    padding: 1rem 0;
`;




export const LogoTitle = styled.div`
    display: flex;
    align-items: center;
    height: 3rem;
    
    font-family: 'PT Serif', serif;
    font-size: 1.5rem;
    text-shadow: inset 0px -3px 2px rgba(10,10,10,0.69);

    a{
        text-decoration: none;
        color: #fff;
    }
    
`;

export const Navigate = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`;

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    @media (max-width: 818px){
        display: none;
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 2rem;
    padding-left: .5rem;
    position: relative;
    outline: none;
    background-color: white;
    border-radius: 3px;
`;

export const Input = styled.input`
    width:100%;
    height: 100%;
    border: none;
    background:none;
    outline: none;
`;

export const Button = styled.button`
    background: none;
    border: none;
    position: absolute;
    right: 2px;
`;

export const NavigateButton = styled.div`
    cursor: pointer;
    position: relative;
    width: 3rem;
    height: 3rem;
    transition: all 300ms;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    z-index: 1000;
    @media (min-width: 818px){
        display: none;
    }

    /* .top{
        display: none;
    }

    .center{
        transform: rotate(45deg) translateY(.3rem) translateX(.25rem);
        width: 90%;
        height: 1;
    }

    .bottom{
        transform: rotate(-45deg) translateY(-.16rem) translateX(.25rem);
        width: 90%;
    } */
`;

// export const Span = styled.div`
//     width: 70%;
//     border-radius: 0.5rem;
//     height: 2px;
//     background-color: #fff;

// `;

// export const NavigateInsideContent= styled.div`
//     width: 5rem;
//     display: flex;
//     align-items: center;
//     justify-content: space-evenly;
//     border-radius: .3rem;
//     color: #fff;
//     margin-left: 1rem;
//     font-family: 'Mulish', sans-serif;
//     font-size: .8rem;
//     background-color: #004080;
//     height: 1.5rem;
//     cursor: pointer;
//     .seta{
//         margin-top: .4rem;
//     }
//     :active{
//         background-color: #004d99;
//         -webkit-box-shadow: 4px 3px 0px 0px rgba(0,0,0,0.23);
//         -moz-box-shadow: 4px 3px 0px 0px rgba(0,0,0,0.23);
//         box-shadow: 4px 3px 0px 0px rgba(0,0,0,0.23);
//     }
// `

// export const NavigateText= styled.span`

// `
// export const NavigateIcon = styled.span`

// `


// export const NavigateItems = styled.div`
//     width: 11rem;
//     padding: 1rem;
//     z-index: 100;
//     font-family: 'Mulish', sans-serif;
//     height: fit-content;
//     background-color: #fff;
//     position: absolute;
//     top: 2.5rem;
//     right: 0rem;
//     border-left: 1px solid #001f3f36;
//     border-right: 2px solid #001f3f36;
//     border-bottom: 2px solid #001f3f36;
// `;

// export const Square = styled.div`
//     width: 1rem;
//     height: 1rem;
//     background-color: #fff;
//     position: absolute;
//     top: 2rem;
//     right: 1rem;
//     border-left:1px solid #00000080 ;
//     transform: rotate(45deg);
// `
// export const Item = styled.div`
//     color: black;
//     width: 100%;
//     white-space: nowrap;
//     padding-bottom: 0.2rem;
//     font-size: 1rem;
//     font-weight: bold;
//     text-transform: capitalize;
//     margin-top: .6rem;
//     border-bottom: 1px solid #00000030;
//     cursor: pointer;
// `;