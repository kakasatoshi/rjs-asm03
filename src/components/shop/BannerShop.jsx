import React from 'react';
import css from "./BannerShop.module.css"

const BannerShop = ({text,textRight}) => {
    const textForRight=textRight?textRight:text;
    return (
        <div className={css.content}>
            <div className={css.left}>{text}</div>
            <div className={css.right}>{textForRight}</div>
        </div>
    );
};

export default BannerShop;