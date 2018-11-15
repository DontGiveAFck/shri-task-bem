import { cn } from '@bem-react/classname';
import * as React from 'react';
import { Logo } from '../Logo/Logo';
import { Menu } from '../HeaderMenu/HeaderMenu';
import './Header.css';

const cnHeader = cn('Header');

export const Header = (props: any) => (
    <header className={cnHeader()}>
        <Logo className={cnHeader('Logo')}/>
        <Menu className={cnHeader('Menu')}/>
    </header>
);
