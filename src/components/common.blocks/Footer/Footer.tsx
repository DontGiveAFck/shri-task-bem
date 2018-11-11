import { cn } from '@bem-react/classname';
import { withBemMod } from "@bem-react/core";
import * as React from 'react';
import { FooterMenu } from '../FooterMenu/FooterMenu';
import './Footer.css';

const cnFooter = cn('Footer');

const FooterBlock = (props: any) => (
    <footer className={cnFooter()}>
        <FooterMenu className={cnFooter('Menu')}/>
        <span className={cnFooter('Corporation')}>© 2001–2017  ООО «Яндекс»</span>
    </footer>
);

export const Footer = withBemMod(cnFooter(), { isFull: true })(FooterBlock);


