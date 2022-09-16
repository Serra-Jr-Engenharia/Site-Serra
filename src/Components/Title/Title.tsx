import gradientBar from '../../assets/FrontDeskAssets/barra.png'
import './Title.css'

interface TitleProps{
    text: string
}

export default function Title(props: TitleProps){
    return(
        <div className="Title">
            <h3>{props.text}</h3>
            <img className='gradientBar' src={gradientBar} alt="gradientBar" />
        </div>
    )
}