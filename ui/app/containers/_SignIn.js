// Third party modules
import React, { PropTypes } from "react";
import connect from "react-redux/lib/connect/connect";
import cx from "classnames";

// Application modules
import SignIn from "../components/_SignIn";
import { action, actionEncrypted } from "../actions/Actions";

export class _SignIn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SignIn
                dispatchAction={this.props.dispatchAction}
            />
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAction: (param1, param2) => {
            dispatch(action(param1, param2));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(_SignIn);
