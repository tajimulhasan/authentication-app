import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from "./card.module.scss";

interface ICard {
    children: ReactNode;
    isRoundedBorder?: boolean;
    backgroundColor: "white" | "fill" | "secondary";
}

const Card = (props: ICard) => {
    const { children, isRoundedBorder, backgroundColor } = props;
    return (
        <div className={classNames(styles.card, {
            [styles.borderRounded]: isRoundedBorder,
            [styles.whiteBg]: backgroundColor == "white",
            [styles.fillBg]: backgroundColor == "fill",
            [styles.secondaryBg]: backgroundColor == "secondary",
        })}>
            {children}
        </div >
    );
};

export default Card;