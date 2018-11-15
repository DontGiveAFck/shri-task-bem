import { cn } from '@bem-react/classname';
import { Header } from './Header/Header';
import { Footer } from "./Footer/Footer";
import { Content } from './Content/Content';
import { Registry } from "@bem-react/di";
import * as React from 'react';

const cnPage = cn('Page');
const cnHeader = cn('Header');
const cnContent = cn('Content');
const cnFooter = cn('Footer');

export const App = (props: any) => (
    <div className={cnPage()}>
        <Header/>
        <Content/>
        <Footer/>
    </div>
);

const registry = new Registry({ id: cnPage() });
registry.set(cnHeader(), Header);
registry.set(cnContent(), Content);
registry.set(cnFooter(), Footer);