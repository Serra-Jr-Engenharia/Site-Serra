

import IMGComp from "../../../assets/CompAssets/presentation-image.svg"
import Systems from "../../../assets/CompAssets/desenvolvimento-sistemas.svg"
import Sites from "../../../assets/CompAssets/desenvolvimento-sites.svg"
import Arrow from "../../../assets/CompAssets/seta.svg"
import CSS from "../../../assets/CompAssets/css-icon.svg"
import HTML from "../../../assets/CompAssets/html-icon.svg"
import JS from "../../../assets/CompAssets/js-icon.svg"
import REACT from "../../../assets/CompAssets/react-icon.svg"
import TS from "../../../assets/CompAssets/ts-icon.svg"
import Styled from "../../../assets/CompAssets/styled-icon.svg"

import WhatsApp from "../../../assets/whatsapp.svg"
import ScrollUp from "../../../assets/arrow-up.svg"

import {
    CompStyle,
    EngComp, 
    EngCompP, 
    EngCompImg, 
    Serviceletter, 
    ServiceletterH1, 
    ServiceletterH2, 
    ServiceletterCard,
    SlCard1,
    SlCard2,
    SlCard1Up,
    SlCard1Down,
    ServiceletterIMG,
    Line,
    Box,
    ImagesPreFooterContact,
    ImagesPreFooterScrollUp,
    ImagesPreFooter,
    } from "./style";

const CompPage: React.FC = () =>{
    return (
        <CompStyle>
            <EngComp>
                <EngCompP>
                    <p>Engenharia</p>
                    <p>de</p>
                    <p>Computação</p>
                </EngCompP>
                <EngCompImg>
                    <img src={IMGComp} alt="Imagem de Computação" />
                </EngCompImg>  
            </EngComp>


            <Serviceletter>
                <ServiceletterH1>
                    <h1>Carta de Serviços</h1>
                </ServiceletterH1>
                <ServiceletterH2>
                    <h2>Engenharia de Computação</h2>
                </ServiceletterH2>
                <ServiceletterCard>
                    <SlCard1>
                        <SlCard1Up>
                            <img src={Sites} alt="Imagem Site" />
                            <h3>Desenvolvimento de Websites</h3>
                        </SlCard1Up>

                        <SlCard1Down>
                            <img src={Arrow} alt="Seta" />
                            <p>Desenvolvemos do zero um site pensado exclusivamente para atender as necessidades do seu negócio. Utilizamos das ferramentas mais modernas do mercado para criar uma solução única que irá alavancar a visibilidade do seu produto!</p>
                        </SlCard1Down>
                        
                    </SlCard1>

                    <SlCard2>
                        <SlCard1Up>
                            <img src={Systems} alt="Imagem Sistemas" />
                            <h3>Desenvolvimento de Sistemas Web</h3>
                        </SlCard1Up>

                        <SlCard1Down>
                            <img src={Arrow} alt="Seta" />
                            <p>Com auxílio das mais completas linguagens de programação, fornecemos aplicativos e sistemas próprios para a sua empresa que irão acelerar e auxiliar internamente no gerenciamento e desenvolvimento do seu negócio.</p>
                        </SlCard1Down>
                    </SlCard2>
                </ServiceletterCard>

                <ServiceletterIMG>
                    <img src={HTML} alt="ImagemHtml" />
                    <img src={CSS} alt="Imagemcss" />
                    <img src={JS} alt="ImagemJS" />
                    <img src={TS} alt="ImagemTS" />
                    <img src={REACT} alt="ImagemREACT" />
                    <img src={Styled} alt="ImagemStyled" />
                </ServiceletterIMG>
                
            </Serviceletter>

            <Line>
                <hr color="#FD6300"/>     
            </Line>

            <Box>
                <p>Quer colocar um projeto em prática? &rarr;</p>
            </Box>

            <ImagesPreFooter>
                <ImagesPreFooterContact src={WhatsApp} alt="WhatsApp"/>
                <ImagesPreFooterScrollUp onClick={() => window.scrollTo(0,0)} src={ScrollUp} alt="ScrollUp"/>
            </ImagesPreFooter>


        </CompStyle>
    )
}

export default CompPage