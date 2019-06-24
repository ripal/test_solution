// Third party modules
import React, { PropTypes } from "react";
import connect from "react-redux/lib/connect/connect";

// Application modules
import Home from "../components/_Home";
import { action } from "../actions/Actions";

export class _Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Home
                stackOverFlow={this.props.stackOverFlow && this.props.stackOverFlow.data && this.props.stackOverFlow.data.items}
                dispatchAction={this.props.dispatchAction}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        stackOverFlow: state._stackOverFlow.getFeaturedQuestions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAction: (param1, param2) => {
            dispatch(action(param1, param2));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(_Home);
