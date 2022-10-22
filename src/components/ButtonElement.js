import styled from "styled-components"

export const Button = styled.button`
    border: 1px #f5f5f5 solid;
    background ${({ primary }) => (primary ?  '#f5a700' : 'transparent' )};
    white-space: nowrap;
    padding ${({ big }) => (big ? "15px 40px ": "10px 35px;")};
    font-weight: 900;
    color: #f5f5f5;
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px" )};
    outline: none;
    cursor: pointer;
    font-family: "Roboto", sans-serif;

    &:hover {
        transition: all 0.3s ease-out;
        background ${({ primary }) => (primary ? 'transparent' : '#f5a700' )};
        border: none;
        color: #171717;
    }

    @media screen and (max-width)

`