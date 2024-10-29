import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { CARD_BG } from '@/shared/enums';
import styles from "./card.module.scss";

interface ICard {
    children: ReactNode;
    isRoundedBorder?: boolean;
    backgroundColor: CARD_BG;
}

const Card = (props: ICard) => {
    const { children, isRoundedBorder, backgroundColor } = props;

    const getBgClass = {
        [CARD_BG.CARD_BG_WHITE]: styles.whiteBg,
        [CARD_BG.CARD_BG_FILL]: styles.fillBg,
        [CARD_BG.CARD_BG_SECONDARY]: styles.secondaryBg,
    }

    return (
        <div className={classNames(styles.card, getBgClass[backgroundColor], { [styles.borderRounded]: isRoundedBorder, })}>
            {children}
        </div >
    );
};

export default Card;