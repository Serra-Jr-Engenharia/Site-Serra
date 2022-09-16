import './Card.css'

interface CardProps{
    children: any
    title: string
    buttonUrl: string
    buttonTitle: string
    // height: string
}

export default function Card(props: CardProps){
    return (
        <div className="Card" >
            <div className="card-title">
                {props.title}
            </div>

            <div className="card-body">
                <div className="card-content">
                    {props.children}

                </div>

                <a className='card-link' href={props.buttonUrl}>
                    <button>{props.buttonTitle}</button>
                </a>
                
            </div>
        </div>
    )
}