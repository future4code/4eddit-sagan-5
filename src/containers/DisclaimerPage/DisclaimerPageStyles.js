import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
    }
`

export const CustomHeader = styled.div`
    padding: 5px 15px 5px 10px;
    background-color: rgb(230,230,230);
    display: flex;
    justify-content: space-between;
`

export const SmallLogo = styled.img`
    margin-left: 5px;
    height: 40px;
    width: 40px;
    cursor: pointer;
`

export const MidLogo = styled.img`
    height: 40px;
    width: 120px;
`

export const MainDiv = styled.div`
    background-color: rgb(240,240,240);
    text-align: center;
`

export const Footer = styled.div`
    padding: 20px;
    background-color: rgb(230,230,230);
`

export const FooterLogo = styled.img`
    margin: 10px;
    height: 35px;
    width: 40px;
`

export const BigLogo = styled.img`
    height: 300px;
    width: 200px;
`

export const BodyTitle = styled.h1`
`

export const BodyDisclaimer = styled.h4`
`

export const LinksContainer = styled.div`
    margin: auto;
    width: 55%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    padding: 10px;
    margin-bottom: 20px;
`