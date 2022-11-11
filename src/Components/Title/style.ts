import styled  from 'styled-components'
import { width } from '../../Services/config'

interface Props{
    gradientWidth?: string
}

export const TitleText = styled.p`
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    text-align: center;
    color: #001830;
    margin-bottom: 10px;

    @media screen and (max-width: ${width.tablet}) {
        font-size: 30px;
    }
    
    @media screen and (min-width: ${width.largeMobile}) {
        font-size: 40px;
    }

    @media screen and (min-width: ${width.notebook}) {
        font-size: 38px;
        width: 80%;
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        font-size: 60px;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 100px;
    }
`;

export const GradientBar = styled.hr<Props>`
    margin: 0px;
    border: 0px;
    height: 10px;
    width: 80%;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);

    @media screen and (max-width: ${width.tablet}) {
        height: 7px;
    }
    @media screen and (max-width: ${width.notebook}) {
        width: 60%;
    }
`;

export const TitleStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;




