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

export const FeedContainer = styled.div`
    display: grid;
    grid-template-columns: 5fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 30px;
    padding: 20px;
`

export const DivTeste1 = styled.div`
    background-color: rgb(200,200,200);
    padding: 10px;
    border-radius: 10px;
`

export const DivTeste2 = styled.div`
    background-color: rgb(200,200,200);
    padding: 10px;
    border-radius: 10px;
`

export const DivTeste3 = styled.div`
    background-color: rgb(200,200,200);
    padding: 10px;
    border-radius: 10px;
`