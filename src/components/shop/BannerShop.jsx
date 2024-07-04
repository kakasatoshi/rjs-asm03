import React from 'react';
import css from "./BannerShop.module.css"

const BannerShop = () => {
    return (
        <div className={css.content}>
            <div className={css.left}>SHOP</div>
            <div className={css.right}>SHOP</div>
        </div>
    );
};

export default BannerShop;