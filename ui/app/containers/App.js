// Third party modules
import React, { PropTypes } from "react";
import connect from "react-redux/lib/connect/connect";
import s from "../styles/_main.less";
import { action } from "../actions/Actions";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

// --------dispatch methods from actions--------//
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAction: (param1, param2) => {
            dispatch(action(param1, param2));
        },
    };
};

// ---------- state from reducer -----------//
const mapStateToProps = state => {
    return {
        // userInfo: state.userInfo,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
