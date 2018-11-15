import { cn } from '@bem-react/classname';
import * as React from 'react';
import logo from './Logo.png';

const cnLogo = cn('Logo');

export const Logo = (props: any) => (
    <a href="#" className={cnLogo()}>
        <img src={logo} alt="logo" className={cnLogo('Image')}/>
    </a>
);
