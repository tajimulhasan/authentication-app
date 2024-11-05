import React from 'react';

import PublicFooterMenu from '@/menus/publicFooterMenu/PublicFooterMenu';
import PublicHeaderMenu from '@/menus/publicHeaderMenu/PublicHeaderMenu';

interface IPublicLayout {
    children: React.ReactNode;
}

const PublicLayout = (props: IPublicLayout) => {
    const { children } = props;
    return (
        <>
            <PublicHeaderMenu />
            {children}
            <PublicFooterMenu />
        </>
    );
};

export default PublicLayout;