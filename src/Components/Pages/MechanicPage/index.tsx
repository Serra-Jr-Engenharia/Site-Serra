import Arrow from "../../../assets/MecAssets/seta.svg"
import PresentationImg1 from '../../../assets/MecAssets/presentation-image.svg'
import Gear from '../../../assets/MecAssets/gear-icon.svg'
import Piston from '../../../assets/MecAssets/piston-icon.svg'

import WhatsApp from "../../../assets/whatsapp.svg"
import ScrollUp from "../../../assets/arrow-up.svg"

import {
    MecStyle,
    EngMec,
    EngMecP,
    Serviceletter,
    ServiceLetterH1,
    ServiceLetterH2,
    ServiceletterCard,
    SlCard1,
    SlCard1Up,
    SlCard1Down,
    SlCard2,
    EngMecImg,
    Line,
    Box,
    ImagesPreFooter,
    ImagesPreFooterContact,
    ImagesPreFooterScrollUp,
} from "./style";

const MechanicPage: React.FC = () =>{
    return (
        <div>
            <MecStyle>
                <EngMec>
                    <EngMecP>
                        <p>Engenharia</p><br/>
                        <p>Mecânica</p>
                    </EngMecP>
                    <EngMecImg src={PresentationImg1} alt="Imagem de Mecânica" />      
                </EngMec>

                <Serviceletter>
                <ServiceLetterH1>Carta de Serviços</ServiceLetterH1>
                <ServiceLetterH2>Engenharia Mecânica</ServiceLetterH2>
                <ServiceletterCard>
                    <SlCard1>
                        <SlCard1Up>
                            <img src={Piston} alt="Imagem Sistemas" />
                            <h3>Desenvolvimento de Websites</h3>
                        </SlCard1Up>

                        <SlCard1Down>
                            <img src={Arrow} alt="Seta" />
                            <p>Desenvolvemos do zero um site pensado exclusivamente para atender as necessidades do seu negócio. Utilizamos das ferramentas mais modernas do mercado para criar uma solução única que irá alavancar a visibilidade do seu produto!</p>
                        </SlCard1Down>
                        
                    </SlCard1>

                    <SlCard2>
                        <SlCard1Up>
                            <img src={Gear} alt="Imagem Site" />
                            <h3>Desenvolvimento de Sistemas Web</h3>
                        </SlCard1Up>

                        <SlCard1Down>
                            <img src={Arrow} alt="Seta" />
                            <p>Com auxílio das mais completas linguagens de programação, fornecemos aplicativos e sistemas próprios para a sua empresa que irão acelerar e auxiliar internamente no gerenciamento e desenvolvimento do seu negócio.</p>
                        </SlCard1Down>
                    </SlCard2>
                </ServiceletterCard>
                </Serviceletter>

                <Line>
                    <hr color="#04ADD7"/>     
                </Line>

                <Box>
                    <p>Quer colocar um projeto em prática? &rarr;</p>
                </Box>

                <ImagesPreFooter>
                    <ImagesPreFooterContact src={WhatsApp} alt="WhatsApp"/>
                    <ImagesPreFooterScrollUp onClick={() => window.scrollTo(0,0)} src={ScrollUp} alt="ScrollUp"/>
                </ImagesPreFooter>

            </MecStyle>


        </div>
    )
}

export default MechanicPage