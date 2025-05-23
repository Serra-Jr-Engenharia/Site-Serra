import styled from "styled-components";
import { width } from "../../../../Services/config";

export const Slide = styled.div`
	margin: 0;   
`;

export const SlideAnchor = styled.a`
	
`;

export const SlideImg = styled.img`
    width: 150px;
    height: 120px;
	margin: 0 20px;
	transition: 0.5s;
	overflow: hidden;

    &:hover{
	    transition: 0.5s;
        opacity: 0.7;
    }

    @media screen and (max-width: ${width.largeMobile}) {
	    width: 150px;
        height: 120px;
    }
    @media screen and (max-width: ${width.mobile}){
        width: 120px;
        height: 100px;
    }
    @media screen and (min-width: ${width.desktop}) {
	    width: 180px;
        height: 160px;
    }
    @media screen and (min-width: ${width.largeDesktop}) {
	    width: 240px;
        height: 220px;
    }
    @media screen and (min-width: ${width.extraLargeDesktop}) {
	    width: 380px;
        height: 360px;
    }
    @media screen and (max-width: ${width.notebook}){
        width: 120px;
        height: 100px;
    }
`;