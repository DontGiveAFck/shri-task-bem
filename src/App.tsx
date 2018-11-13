import { cn } from '@bem-react/classname';
import { withBemMod } from "@bem-react/core";
import { Header } from './components/common.blocks/Header/Header';
import { Footer } from "./components/common.blocks/Footer/Footer";
import { Content } from './components/common.blocks/Content/Content';
import * as React from 'react';
import './App.css';

const cnPage = cn('Page');

const App = (props: any) => (
    <div className={cnPage()}>
        <Header/>
        <Content/>
        <Footer/>
    </div>
);

export const AppBem = withBemMod(cnPage(), { isFull: true })(App);
