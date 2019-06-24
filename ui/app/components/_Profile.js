// Third party modules
import React, { PropTypes } from "react";
import Row from "../components/_Row";
import s from "../styles/_main.less";
import Block from "./_Block";
import browserHistory from "react-router/lib/browserHistory";

class _Profile extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getUserProfile();
        this.getTopTags();
        this.getTopQuestions();
    }

    // get user profile
    getUserProfile = () => {
        this.props.dispatchAction({
            type: "getUserProfile",
            data: {
                "order": "desc",
                "sort": "reputation",
                "site": "stackoverflow",
            },
            params: {
                "userId": this.props.userId
            }
        });
    }

    // get top tags
    getTopTags = () => {
        this.props.dispatchAction({
            type: "getTopTags",
            data: {
                "order": "desc",
                "sort": "popular",
                "site": "stackoverflow",
            },
            params: {
                "userId": this.props.userId
            }
        });
    }

    // get top questions
    getTopQuestions = () => {
        this.props.dispatchAction({
            type: "getUserQuestions",
            data: {
                "order": "desc",
                "sort": "activity",
                "site": "stackoverflow",
            },
            params: {
                "userId": this.props.userId
            }
        });
    }

    render() {
        if (this.props.profile) {
            return (
                <div>
                    <div className={`${s.flex_row} ${s.input_border} ${s.pdng_bottom_content}`}>
                        <div className={`${s.pdng_content} ${s.margn_right_32} ${s.border_ln_primary} ${s.radius_small}`}>
                            <div className={s.text_align_center}>
                                <img src={this.props.profile.profile_image} />
                                <div className={`${s.pdng_cell_size} ${s.text_align_center}`}>
                                    {this.props.profile.reputation + " Reputation"}
                                </div>
                                <div className={s.flex_row}>
                                    <Block
                                        title={this.props.profile.badge_counts.bronze}
                                        subtitle={"Bronze"}
                                        containerClass={s.border_ln_primary}
                                        subtitleClass={`${s.pdng_left_cell_size} ${s.pdng_right_cell_size}`} />
                                    <Block
                                        title={this.props.profile.badge_counts.silver}
                                        subtitle={"Silver"}
                                        containerClass={s.border_ln_primary}
                                        subtitleClass={`${s.pdng_left_cell_size} ${s.pdng_right_cell_size}`} />
                                    <Block
                                        title={this.props.profile.badge_counts.gold}
                                        subtitle={"Gold"}
                                        containerClass={s.border_ln_primary}
                                        subtitleClass={`${s.pdng_left_cell_size} ${s.pdng_right_cell_size}`} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={s.primary_text_body}>
                                {"Name: " + this.props.profile.display_name}
                            </div>
                            <div className={s.primary_text_body}>
                                {"location: " + this.props.profile.location}
                            </div>
                            <div className={s.primary_text_body}>
                                Link: <a href="">{this.props.profile.link}</a>
                            </div>
                        </div>
                    </div>
                    <div className={`${s.subheadeline_semibold} ${s.input_border} ${s.pdng_bottom_content} ${s.pdng_cell_size}`}>Top Tags</div>
                    {
                        this.props.tags && this.props.tags.map((tag, index) => {
                            return <div key={index} className={s.flex_row}>
                                <Block title={tag.name}
                                    containerClass={s.border_ln_primary}
                                    titleClass={`${s.pdng_left_cell_size} ${s.pdng_bottom_8} ${s.pdng_right_cell_size}`} />
                                <div className={`${s.pdng_top_content} ${s.pdng_left_content}`}>
                                    Post(s): {tag.count}
                                </div>
                            </div>
                        })
                    }
                    <div className={`${s.subheadeline_semibold} ${s.input_border} ${s.pdng_bottom_content} ${s.pdng_cell_size}`}>Top Questions</div>
                    {this.props.questions && this.props.questions.map((item) => {
                        return <Row
                            item={item}
                            key={item.question_id}
                            onUserNameClick={this.onUserNameClick}
                        />
                    })}
                </div>
            );
        } else {
            return <div>Please wait...</div>
        }
    }
}

export default _Profile;
