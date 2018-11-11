import { cn } from '@bem-react/classname';
import { withBemMod } from "@bem-react/core";
import * as React from 'react';
import './FooterMenu.css';

const cnFooterMenu = cn('FooterMenu');

const FooterMenuBlock = (props: any) => (
    <ul className={cnFooterMenu()}>
        <li className={cnFooterMenu('Item')}><a href="#" className={cnFooterMenu('Reference')}>Помощь</a></li>
        <li className={cnFooterMenu('Item')}><a href="#" className={cnFooterMenu('Reference')}>Обратная связь</a></li>
        <li className={cnFooterMenu('Item')}><a href="#" className={cnFooterMenu('Reference')}>Разработчикам</a></li>
        <li className={cnFooterMenu('Item')}><a href="#" className={cnFooterMenu('Reference')}>Условия использования</a></li>
        <li className={cnFooterMenu('Item')}><a href="files/license.pdf" className={cnFooterMenu('Reference')}>Ссылка на лицензию</a></li>
    </ul>
);

export const FooterMenu = withBemMod(cnFooterMenu(), { isFull: true })(FooterMenuBlock);


