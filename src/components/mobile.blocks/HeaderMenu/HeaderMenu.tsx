import { cn } from '@bem-react/classname';
import * as React from 'react';
import './HeaderMenu.css';

const cnMenu = cn('Menu');

export const Menu = (props: any) => (
    <nav className={cnMenu()}>
        <img src="images/icon_list_m.png" className={cnMenu('Icon')}/>
    </nav>
);
