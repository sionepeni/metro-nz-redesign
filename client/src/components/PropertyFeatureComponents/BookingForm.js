import '../../style/FeaturePageStyles/BookingForm.css';
import AgentPic from '../../style/pics/Ellipse 5.png';
import Phone from '../../style/pics/phoneicon.png';
import Info from '../../style/pics/Info.png';
import Email from '../../style/pics/email.png';


export default function BookingForm() {

    return(
        <div className="Form-Container">
            <div className="Sub-Header">
                <h2>Property for rent</h2>
                <h2>$500 p/w</h2>
                <p>Save on a longer rental plan <img src={Info}/> </p>
                <hr className='Horizontal'/>
            </div>
            <div className="Input-Container">
                <h3>Get in touch for viewing</h3><br/>
                <form className="Input-Form">
                    <input type="text" name="fullname" class="input-field" placeholder="Full Name" />
                    <input type="email" name="emailaddress" class="input-field" placeholder="Email Address" />
                    <input type="" name="phonenumber" class="input-field" placeholder="Phone Number" />
                    <input type="button" name="next" class="next action-button" value="Book a viewing" />
                    <hr className='Horizontal'/>
                </form>             
            </div>
            <div className="Agent-Card">
            <h3>Reach the agent</h3>
            <img src={AgentPic} alt="Agent" className="Agent-Pic" />
            <div className="Agent-Details">
                <h3>Andy Smith</h3>
                <img src={Phone} alt="Phone" className='Phone' />
                <img src={Email} alt="Email" className="Email" />

                
            </div>
            <input type="button" name="next" className="Apply-Button" value="Apply to rent" />

            </div>
            

            

        </div>
    )
}