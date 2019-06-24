// Third party modules
import React, { PropTypes } from "react";
import connect from "react-redux/lib/connect/connect";

// Application modules
import Profile from "../components/_Profile";
import { action } from "../actions/Actions";

export class _Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Profile
                profile={
                    this.props.profile &&
                    this.props.profile.data &&
                    this.props.profile.data.items &&
                    this.props.profile.data.items[0]}
                tags={
                    this.props.tags &&
                    this.props.tags.data &&
                    this.props.tags.data.items
                }
                questions={
                    this.props.questions &&
                    this.props.questions.data &&
                    this.props.questions.data.items
                }
                userId={this.props.params.userId}
                dispatchAction={this.props.dispatchAction}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        profile: state._stackOverFlow.getUserProfile,
        tags: state._stackOverFlow.getTopTags,
        questions: state._stackOverFlow.getUserQuestions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAction: (param1, param2) => {
            dispatch(action(param1, param2));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(_Profile);
