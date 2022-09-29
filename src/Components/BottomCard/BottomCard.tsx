import { BottomCardStyle } from './BottomCardStyle'

interface BottomCardProps{
    children: any
    title: string
    buttonUrl?: string
    buttonTitle?: string
    cor?: string
    hasButton?: boolean
}

const BottomCard: React.FC<BottomCardProps> = ({title, children, buttonUrl, buttonTitle, cor, hasButton}) => {
    return (
        <BottomCardStyle>
            <div style={{backgroundColor: cor}} className="card-title">
                {title}
            </div>

            <div className="card-body">
                <div className="card-content">
                    {children}

                </div>

                {hasButton ? 
                    <a className='card-link' href={buttonUrl}>
                        <button style={{backgroundColor: cor}}>{buttonTitle}</button>
                    </a> :
                    <></>
                }
            </div>
        </BottomCardStyle>
    )
}

export default BottomCard;