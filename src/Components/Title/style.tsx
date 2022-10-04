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

export const GradientBar = styled.img<Props>`
    height: 10px;
    width: ${({gradientWidth}) => gradientWidth ?? "50%"};
`;

export const TitleStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


