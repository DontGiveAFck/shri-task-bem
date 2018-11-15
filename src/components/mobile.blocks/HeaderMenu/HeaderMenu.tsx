import { cn } from '@bem-react/classname';
import { withBemMod } from "@bem-react/core";
import * as React from 'react';
import './HeaderMenu.css';

const cnMenu = cn('Menu');

const MenuBlock = (props: any) => (
    <nav className={cnMenu()}>
        <img src="images/icon_list_m.png" className={cnMenu('Icon')}/>
    </nav>
);

export const Menu = withBemMod(cnMenu(), { isFull: true })(MenuBlock);
