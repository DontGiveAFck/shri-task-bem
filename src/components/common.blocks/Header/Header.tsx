import { cn } from '@bem-react/classname';
import { withBemMod } from "@bem-react/core";
import * as React from 'react';
import { LogoBem } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import './Header.css';

const cnHeader = cn('Header');

const HeaderBlock = (props: any) => (
    <header className={cnHeader()}>
        <LogoBem className={cnHeader('Logo')}/>
        <Menu className={cnHeader('Menu')}/>
    </header>
);

export const Header = withBemMod(cnHeader(), { isFull: true })(HeaderBlock);
