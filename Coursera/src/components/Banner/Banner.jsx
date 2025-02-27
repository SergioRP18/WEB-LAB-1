import Button1 from '../Button/Button1';
import './Banner.css'

const Banner = ({icon, title, description, image,}) => {
    return(
        <div className="container">
            <div className="content-banner">
                <div className="right-content">
                    <div className="logo-icon">
                        <img src= {icon} />
                    </div>
                    <h1 className="title-banner">{title}</h1>
                    <div className="content-text">
                        <p>{description}</p>
                        <Button1 txtbutton1="Start 7-day Free Trial"/>               
                    </div>
                </div>
                <div className="content-image">
                    <img src= {image} alt="Coursera Plus Hero Image" />
                </div>
            </div>
        </div>
    )
};

export default Banner;