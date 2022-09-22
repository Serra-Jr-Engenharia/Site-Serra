import {CardStyle} from './CardStyle'

interface CardProps{
    children: any
    title: string
    buttonUrl: string
    buttonTitle: string
    cor?: string
}

const Card: React.FC<CardProps> = ({title, children, buttonUrl, buttonTitle, cor}) => {
    return (
        <CardStyle>
            <div style={{backgroundColor: cor}} className="card-title">
                {title}
            </div>

            <div className="card-body">
                <div className="card-content">
                    {children}

                </div>

                <a className='card-link' href={buttonUrl}>
                    <button style={{backgroundColor: cor}}>{buttonTitle}</button>
                </a>
                
            </div>
        </CardStyle>
    )
}

export default Card;