import { cn } from '@bem-react/classname';
import * as React from 'react';
import { FooterMenu } from '../FooterMenu/FooterMenu';
import './Footer.css';

const cnFooter = cn('Footer');

export const Footer = (props: any) => (
    <footer className={cnFooter()}>
        <FooterMenu className={cnFooter('Menu')}/>
        <span className={cnFooter('Corporation')}>© 2001–2017  ООО «Яндекс»</span>
    </footer>
);
