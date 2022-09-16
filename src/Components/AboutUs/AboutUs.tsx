import './AboutUs.css'
import imageAboutUs from '../../assets/AboutUsAssets/presentation-image.png'


export default function AboutUs(){
    return(
        <div className="AboutUs">
            <div className='presentation-aboutus'>
                <p>Sobre nós</p>
                <img src={imageAboutUs} alt="imagem sobre nós" />
            </div>
        </div>
    )
}