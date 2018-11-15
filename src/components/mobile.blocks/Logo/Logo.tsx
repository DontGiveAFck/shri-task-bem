import { cn } from '@bem-react/classname';
import { withBemMod } from "@bem-react/core";
import * as React from 'react';
import logo from './Logo.png';

const cnLogo = cn('Header');

const Logo = (props: any) => (
    <a href="#" className={props.className}>
        <img src={logo} alt="logo"/>
    </a>
);

export const LogoBem = withBemMod(cnLogo(), { isFull: true })(Logo);


