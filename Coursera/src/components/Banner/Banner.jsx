import './Banner.css'

const Banner = () => {
    return(
        <div className="container">
            <div className="content-banner">
                <div className="logo-icon">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/coursera_plus/landing_page/coursera-plus-blue.png?auto=format%2Ccompress&dpr=1&h=20" alt="" />
                </div>
                <h1 className="title-banner">Achieve your career goals with Coursera Plus</h1>
                <div className="content-text">
                    <p>Subscribe to build job-ready skills from world-class institutions.</p>
                    <span>$59</span>
                    <span>/month, cancel anytime</span>
                    <button>Start 7-day Free Trial</button>
                    <button>
                        <span>or <span>$399</span>/year with 14-day money-back guarantee</span>
                    </button>
                </div>
            </div>
            <div className="content-image">
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/DMFk42PH8L9y9MeQ5xc7I/c55cade640bb097b0e5429b780ff7c98/redesigned-hero-image.png?auto=format%2Ccompress&dpr=1" alt="" />
            </div>
        </div>
    )
};

export default Banner;