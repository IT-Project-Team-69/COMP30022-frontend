import React from "react";
import axios from "axios";
import "../pages/Profile.css";
import { FontAwesome } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";

class ProfilePhoto extends React.Component {
    constructor(props) {
        super(props);
        this.hiddenInputRef = React.createRef();
    }

    onHiddenInputClick = async (event) => {
        this.props.onChange(event);
    };

    onFileSelect = (event) => {
        this.hiddenInputRef.current.click();
    };

    render() {
        return (
            <div className="profile-photo-row">
                <div className="profile-photo" onClick={this.onFileSelect}>
                    <img src={this.props.src} alt={this.props.alt}></img>
                    <div className="overlay-icon">
                        <FaCamera />
                    </div>
                    <input
                        className="invisible-button"
                        type="file"
                        onChange={this.onHiddenInputClick}
                        ref={this.hiddenInputRef}
                    />
                </div>
            </div>
        );
    }
}

export default ProfilePhoto;
