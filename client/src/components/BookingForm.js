import '../style/BookingForm.css'
import AgentPic from '../style/pics/Ellipse 5.png'
import Phone from '../style/pics/phoneicon.png'

export default function BookingForm() {

    return(
        <div className="Form-Container">

            <div className="Container-Text">
                <h4>Property for rent</h4>
                <h4>$500 p/w</h4>
                <h6>Save on a longer rental plan &#9432;</h6>
                <hr width="70%" className="Horizontal"/>
                <h5>Get in touch for a viewing</h5>
                
                <form className="Input-Container">
                    <input type="text" name="fullname" class="input-field" placeholder="Full Name" />
                    <input type="email" name="emailaddress" class="input-field" placeholder="Email Address" />
                    <input type="" name="phonenumber" class="input-field" placeholder="Phone Number" />
                    <input type="button" name="next" class="next action-button" value="Book a viewing" />
                </form>
                <hr width="70%" className="Horizontal"/>
                <h4>Reach the agent</h4>

                <div className="Agent-Card">
                    <img src={AgentPic} alt="Pfp"/>
                    <div className="Agent-Text">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                        <h4>Andy Smith</h4>
                        <p>(64) 027 894 667</p>
                        <p>andy@metroproperty.co.nz</p>
                    </div>


                </div>

                <input type="button" name="next" class="Apply-Button" value="Apply to rent" />
           
            </div>
            

        </div>
    )
}