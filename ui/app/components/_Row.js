// Third party modules
import React, { PropTypes } from "react";

// Application modules
import s from "../styles/_main.less";
import Block from "./_Block";

function readableDate(dt) {
    const dtObj = new Date(dt);
    return dtObj.getDate() + "/" + (dtObj.getMonth() + 1) + "/" + dtObj.getFullYear();
}

function Row({ item, onUserNameClick }) {
    return <div className={`${s.flex_row} ${s.input_border}`}>
        <Block title={item.bounty_amount || "0"} subtitle={"votes"} />
        <Block title={item.answer_count || "0"} subtitle={"answers"} />
        <Block title={item.view_count || "0"} subtitle={"views"} />
        <div className={s["column-14-24"]}>
            <div className={`${s.mrgn_top_cell_size} ${s.mrgn_left_cell_size}`}>{item.title}</div>
            <div className={s.flex_row}>
                <div className={`${s.flex_row} ${s["column-16-24"]}`}>
                    {item.tags && item.tags.map((tag, index) => {
                        return <Block
                            key={index}
                            subtitle={tag}
                            containerClass={s.border_ln_primary}
                            subtitleClass={`${s.pdng_left_cell_size} ${s.pdng_right_cell_size}`} />
                    })}
                </div>
                <div className={`${s.flex_row_reverse} ${s["column-8-24"]}`}>
                    <a className={`${s.primary_text_caption}`} id={item.owner.user_id} href="" onClick={onUserNameClick}>{item.owner.display_name}</a>
                    <div className={`${s.primary_text_caption} ${s.mrgn_right_component}`}>{readableDate(item.last_activity_date)}</div>
                </div>
            </div>
        </div>
    </div>
}

export default Row;
