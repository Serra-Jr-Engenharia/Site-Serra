import styled from "styled-components";
import { width } from "../../Services/config";

export const Slide = styled.div`
	margin: 0;   
`;

export const SlideAnchor = styled.a`
	
`;

export const SlideImg = styled.img`
    width: 250px;
	margin: 0;
	transition: 0.5s;
	overflow: hidden;

    &:hover{
	    transition: 0.5s;
        opacity: 0.7;
    }

    @media screen and (max-width: ${width.largeMobile}) {
	    width: 150px;
    }
    @media screen and (min-width: ${width.desktop}) {
	    width: 350px;
    }
    @media screen and (min-width: ${width.extraLargeDesktop}) {
	    width: 450px;
    }
`;