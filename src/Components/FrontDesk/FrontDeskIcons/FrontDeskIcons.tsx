import './FrontDeskIcons.css'

interface IconsProp{
    image: string;
    alt: string;
    text: string;
}

export default function FrontDeskIcons(props: IconsProp){
    return (
        <div className="FrontDeskIcons">
            <img src={props.image} alt={props.alt} />
            <p>{props.text}</p>
        </div>
    )
}