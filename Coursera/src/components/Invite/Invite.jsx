import "./Invite.css";
import Button1 from "../Button/Button1";

const InvitePerson = () => {
    return(
        <div className="content-invite">
            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/53405f7f3dd342ada40d32c06bbe54ab.png?auto=format%2Ccompress&dpr=1" alt="" />
            <p>Achieve your career goals with Coursera Plus</p>
            <Button1 textbutton1 = "Start 7-day Free Trial" className="white-button"/>
            <p><strong>$59/month, cancel anytime</strong></p>
        </div>
    )
};

export default InvitePerson;