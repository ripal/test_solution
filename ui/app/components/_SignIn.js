// Third party modules
import React, { PropTypes } from "react";

// Application modules
import browserHistory from "react-router/lib/browserHistory";

const propTypes = {
    // onForgotPassword: PropTypes.func,
    // signIn: PropTypes.object,
    dispatchAction: PropTypes.func,
    // dispatchActionEncrypted: PropTypes.func,
};

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emailError: "",
            passwordError: "",

            emailId: "",
            password: ""
        };
    }

    isValidEmail = (emailId) => {
        if (!emailId || emailId.trim() === "") {
            this.setState({ emailError: "Email is required." });
            return false;
        } else {
            let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (!emailId.match(emailRegex)) {
                this.setState({ emailError: "Inalid email entered." })
                return false;
            }
        }
        this.setState({ emailError: "" });
        return true;
    }

    isValidPassword = (password) => {
        if (!password || password.trim() === "") {
            this.setState({ passwordError: "Password is required." });
            return false;
        } else if (password.length < 6 || password.length > 15) {
            this.setState({ passwordError: "Password must be between 6 and 16 char in length." })
            return false;
        }
        this.setState({ passwordError: "" });
        return true;
    }

    onSignInClick = (e) => {
        const emailId = this.state.emailId;
        const password = this.state.password;
        const validEmail = this.isValidEmail(emailId);
        const validPassword = this.isValidPassword(password);
        if (validEmail && validPassword)
            browserHistory.push("/home");
    }

    render() {
        return (
            <div>
                <input
                    id={"email"}
                    type={"text"}
                    onChange={(e) => this.setState({ emailId: e.target.value })}
                    placeholder={"Email"}
                />
                <div>{this.state.emailError}</div>

                <input
                    id={"password"}
                    type={"password"}
                    onChange={(e) => this.setState({ password: e.target.value })}
                    placeholder={"Password"}
                />
                <div>{this.state.passwordError}</div>

                <button
                    id="btn_signin"
                    onClick={this.onSignInClick}
                >
                    {"Sign In"}
                </button>
            </div>
        );
    }
}

SignIn.propTypes = propTypes;
export default SignIn;
