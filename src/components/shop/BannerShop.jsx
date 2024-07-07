import React from 'react';
import css from "./BannerShop.module.css"

const BannerShop = ({text}) => {
    return (
        <div className={css.content}>
            <div className={css.left}>{text}</div>
            <div className={css.right}>{text}</div>
        </div>
    );
};

export default BannerShop;