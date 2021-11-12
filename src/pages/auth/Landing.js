import React from "react";
import InputField from "../../components/InputField";
import AuthController from "../../controllers/AuthController";
import "../../css/landing.css";
import groupLogo from "./groups.png"
import favLogo from "./favourites.png"
import tableLogo from "./table.png"

class Landing extends React.Component {
    render() {
        return (<div>
            <div class="shadow2">
                <img
                    className=" logoLand auth-logo"
                    src="knotwork-02.png"
                    alt="Knotwork logo"
                ></img>
                <div class="login-button">
                    LOG IN
                </div>
            </div>
            
            <div className="rectangle">
                <div className="slogan">
                    An organised and structured way to keep in touch.
                </div>

                <div class="left-item">
                    <img
                        className="pic"
                        src={groupLogo}
                        alt="Knotwork logo"
                    ></img>
                    <div class="text1">
                        Group View
                    </div>
                    <div class="sub1">
                        View contacts in the same group.
                    </div>
                </div>

                <div class="middle-item">
                    <img
                        className="pic"
                        src={favLogo}
                        alt="Knotwork logo"
                    ></img>
                    <div class="text2">
                        Favourites
                    </div>
                    <div class="sub2">
                        Users can favourite contacts.
                    </div>
                </div>

                <div class="right-item">
                    <img
                        className="pic"
                        src={tableLogo}
                        alt="Knotwork logo"
                    ></img>
                    
                    
                    <div class="text3">
                        Table View
                    </div>
                    
                    
                    <div class="sub3">
                        View contacts in a table format.
                    </div>
                </div>

                
            </div>

            <div class="register">
                Register today to strengthen your relationships
            </div>
            <div class="register-button">
            <button
                        className="button primary-button"
                        type="button"
                        name="next"
                        onClick={() =>
                            this.props.history.push("/")
                        }
                    >
                        REGISTER
                    </button>
                    </div>
            
            
            </div>
        );
    }
}

export default Landing;
