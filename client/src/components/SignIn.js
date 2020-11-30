import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : "",
            errorMessage : ""
        };
        this.handleInputValue = this.handleInputValue.bind(this);
    }
    handleInputValue = (key) => (e) => {
        this.setState( {[key] : e.target.value });
    };
    handleSignIn = async () => {
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState({ errorMessage : "이메일과 비밀번호를 입력해주세요" })
        } else {
            await axios.post( `url/signin`, { 
                email : email,
                password : password
            })
            .then((res) => this.props.handleResponseSuccess(res.id))
        }
    }
    render() {}
}

export default withRouter(SignIn);