import React, { Fragment } from 'react';
import css from './FooteList.module.css';


const FooterList = () => {
    return (
        <Fragment>
            <div className={css.content}>
            <div>
                <h4>FREE SHIPPING</h4>
                <p>Free shipping worldwide</p>
            </div>
            <div>
                <h4>24X7 SERVICE</h4>
                <p>Free shipping worldwide</p>
            </div>
            <div>
                <h4>FESTIVAL </h4>
                <p>Free shipping worldwide</p>
            </div>
        </div>
        <div className={css.contentBtn}>
            <div>
                <h4>

                LET'S BE FRIEND 
                </h4>
                <h6>
                    Nisi nisi tempor consequat laboris nosi
                </h6>
            </div>
            <div className={css["button-container"]}>
                <input type="text" name="" id="" placeholder='Enter Your Email Address' className={css.input}/>
                <button type="submit" className={css.btn}>Subscribe</button>
            </div>
        </div>
        </Fragment>
        
    );
};

export default FooterList;