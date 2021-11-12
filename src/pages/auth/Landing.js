import React from "react";
import '../../css/Landing.css';

class Landing extends React.Component {
    render() {
        return (
            <div className="landing-page" data-testid="landing-page">
                <div className="landing-top-region">
                    <div className="left-item"></div>
                    <img
                        className="landing-logo middle-item"
                        src="knotwork-02.png"
                        alt="Knotwork logo"
                    ></img>
                    <div
                        className="login-button right-item"
                        onClick={() => this.props.history.push("/auth/login")}
                    >
                        LOG IN
                    </div>
                </div>

                <div className="rectangle">
                    <div className="slogan">
                        An organised and structured way to keep in touch.
                    </div>
                    <div className="icons-content">
                        <div className="group-pic">
                            <img
                                className="pic"
                                src="groups.png"
                                alt="Knotwork logo"
                            ></img>
                            <div class="text">Group View</div>
                            <div class="sub">
                                View contacts in the same group.
                            </div>
                        </div>
                        <div className="group-pic">
                            <img
                                className="pic"
                                src="favourites.png"
                                alt="Knotwork logo"
                            ></img>
                            <div className="text">Favourites</div>
                            <div className="sub">
                                Users can favourite contacts.
                            </div>
                        </div>
                        <div className="group-pic">
                            <img
                                className="pic"
                                src="table.png"
                                alt="Knotwork logo"
                            ></img>

                            <div class="text">Table View</div>
                            <div class="sub">
                                View contacts in a table format.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="register">
                    Register today to strengthen your relationships
                </div>
                <div class="action-buttons button-row">
                    <button
                        className="button primary-button"
                        type="button"
                        name="next"
                        onClick={() => this.props.history.push("/auth/signup")}
                    >
                        REGISTER
                    </button>
                </div>
            </div>
        );
    }
}

export default Landing;
