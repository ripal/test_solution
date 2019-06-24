// Third party modules
import React, { PropTypes } from "react";
import Row from "../components/_Row";
import s from "../styles/_main.less";
import browserHistory from "react-router/lib/browserHistory";

class _Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getFeatauredQuestions();
    }

    // get feataured questions
    getFeatauredQuestions = () => {
        this.props.dispatchAction({
            type: "getFeaturedQuestions",
            data: {
                "order": "desc",
                "sort": "activity",
                "site": "stackoverflow",
            }
        });
    }

    // user clicked on name
    onUserNameClick = (e) => {
        e.preventDefault();
        const userId = e.target.id;

        browserHistory.push("/user/" + userId);
    }

    render() {
        if (this.props.stackOverFlow) {
            return (
                <div className={s.full_width}>
                    {this.props.stackOverFlow.map((item) => {
                        return <Row
                            item={item}
                            key={item.question_id}
                            onUserNameClick={this.onUserNameClick}
                        />
                    })}
                </div>
            );
        }
        return <div>Please wait...</div>
    }
}

export default _Home;
