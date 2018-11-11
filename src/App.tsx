import { cn } from '@bem-react/classname';
import { withBemMod } from "@bem-react/core";
import { Header } from './components/common.blocks/Header/Header';
import { Footer } from "./components/common.blocks/Footer/Footer";
import * as React from 'react';
import './App.css';

const cnPage = cn('Page');

const App = (props: any) => (
    <div className={cnPage()}>
        <Header/>
        <Footer/>
    </div>
);

export const AppBem = withBemMod(cnPage(), { isFull: true })(App);
