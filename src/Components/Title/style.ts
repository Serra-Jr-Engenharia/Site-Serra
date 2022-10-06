import styled  from 'styled-components'

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
`;

export const GradientBar = styled.hr<Props>`
    margin: 0px;
    border: 0px;
    height: 10px;
    width: 100%;
    background: linear-gradient(90deg, rgba(4,173,215,1) 0%, rgba(4,173,215,1) 41%, rgba(255,116,0,1) 69%);
`;

export const TitleStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const TitleContainer = styled.div`

`;


