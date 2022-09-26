import presentationImage from '../../assets/presentation-image.png'
import monitorIcon from '../../assets/FrontDeskAssets/Sites.png'
import sistemasIcon from '../../assets/FrontDeskAssets/sistemas-web.png'
import manutencaoIcon from '../../assets/FrontDeskAssets/manutencao.png'
import desenhoIcon from '../../assets/FrontDeskAssets/desenho-tecnico.png'
import roboIcon from '../../assets/FrontDeskAssets/braco-robo.png'
import impressoraIcon from '../../assets/FrontDeskAssets/impressora-3d.png'
import nossaHistoria from '../../assets/FrontDeskAssets/nossa-historia.png'

import FrontDeskIcons from "./FrontDeskIcons/FrontDeskIcons";
import Card from "../Card/Card";
import Title from "../Title/Title";
import { FrontDeskStyle,CardAboutUs,ourHistory } from './FrontDeskStyle'

const FrontDesk = () =>{
    return(
        <FrontDeskStyle>
            <div className="presentation">
                <div className="slogan">
                    <p>
                        Engrenando
                    </p>
                    <p>
                        ideias,
                    </p>
                    <p>inovando o </p>
                    <p>
                        mercado.
                    </p>
                </div>
                <img src={presentationImage} alt="apresentação" />
            </div>

            <Title text="O que fazemos" />
            <div className="FrontDeskContent">
                <div style={{width: '60vw'}}>
                    <Card title="Projetos de Computação" buttonTitle="Saiba Mais" buttonUrl="/">
                        <FrontDeskIcons text="Desenvolvimento de WebSites" image={monitorIcon} alt="Desenvolvimento de WebSites"/>
                        <FrontDeskIcons text="Desenvolvimento de Sistemas Web" image={sistemasIcon} alt="Desenvolvimento de Sistemas Web"/>
                    </Card>
                </div>
            </div>
            
            

            <div className="FrontDeskContent">
                <div style={{width: '60vw'}}>
                    <Card title="Projetos de Mecânica" buttonTitle="Saiba Mais" buttonUrl="/" cor='#FAB423'>
                        <FrontDeskIcons text="Projeto e Manutenção de Equipamentos" image={manutencaoIcon} alt="Projeto e Manutenção de Equipamentos"/>
                        <FrontDeskIcons text="Desenho Técnico e Industrial" image={desenhoIcon} alt="Desenho Técnico e Industrial"/>
                        <FrontDeskIcons text="Automação Industrial" image={roboIcon} alt="Automação Industrial"/>
                        <FrontDeskIcons text="Prototipagem" image={impressoraIcon} alt="Prototipagem"/>
                    </Card>
                </div>
            </div>

            <Title text="Nossa História" />

                <div className="FrontDeskContent">
                    <div style={{width: '60vw'}}>
                        <Card title="Nossa História" buttonTitle="Saiba Mais" buttonUrl="/"cor='#001830'>

                            <CardAboutUs>
                                <p>A Serra Jr. Engenharia, criada em 08 de maio de 2002, é uma empresa formada exclusivamente por alunos do curso de graduação de Engenharia Mecânica e de Engenharia de Computação do Instituto Politécnico da Universidade do Estado do Rio de Janeiro – IPRJ/UERJ e tem como objetivo central o incentivo à inserção e desenvolvimento dos alunos na prática empresarial. Teve suas atividades paradas no ano de 2011 devido a tragédia climática que abalou Nova Friburgo. Em 2013, retomou com força total seus projetos. Hoje, está melhor do que nunca oferecendo soluções em engenharia mecânica e computação para todo o mercado.</p>
                                <img src={nossaHistoria} alt="Imagem com os membros da Serra Jr. Engenharia" />
                            </CardAboutUs>
                            
                        </Card>
                    </div>
                </div>
            <div className="history">
                {/* <hr style={{background: '#FD6300', height: '3px', width: '100%', margin: '0', border: '0px'}}/> */}
            </div>
        </FrontDeskStyle>    
    )
}

export default FrontDesk