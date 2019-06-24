// Third party modules
import React, { PropTypes } from "react";

// Application modules
import s from "../styles/_main.less";

function Block({ title, subtitle, containerClass, subtitleClass, titleClass }) {
    return <div className={`${s.mrgn_cell_size} ${s.text_align_center} ${containerClass}`}>
        {title && <div className={`${s.pdng_top_8} ${titleClass}`} style={{ fontSize: "16px" }}>
            {title}
        </div>}

        {subtitle && <div className={subtitleClass} style={{ fontSize: "12px" }}>
            {subtitle}
        </div>}
    </div>
}

export default Block;
