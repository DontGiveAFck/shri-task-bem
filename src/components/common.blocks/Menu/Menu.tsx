import { cn } from '@bem-react/classname';
import { withBemMod } from "@bem-react/core";
import * as React from 'react';
import './Menu.css';

const cnMenu = cn('Menu');

const MenuBlock = (props: any) => (
    <nav className={cnMenu()}>
        <ul className={cnMenu('List')}>
            <li className={cnMenu('Item')}><a className={cnMenu('Reference')} href="#">События</a></li>
            <li className={cnMenu('Item')}><a className={cnMenu('Reference')} href="#">Сводка</a></li>
            <li className={cnMenu('Item')}><a className={cnMenu('Reference')} href="#">Устройства</a></li>
            <li className={cnMenu('Item')}><a className={cnMenu('Reference')} href="#">Сценарии</a></li>
            <li className={cnMenu('Item')}><a className={cnMenu('Reference')} href="cameras.html">Видеонаблюдение</a></li>
        </ul>
        <div className={cnMenu('Icon')}/>
    </nav>
);

export const Menu = withBemMod(cnMenu(), { isFull: true })(MenuBlock);
