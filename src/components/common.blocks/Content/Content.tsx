import { cn } from '@bem-react/classname';
import { withBemMod } from "@bem-react/core";
import * as React from 'react';
// import { Events } from '../Events/Events';
import './Content.css';

const cnContent = cn('Content');

const ContentBlock = (props: any) => (
    <main>
        <h1 className={cnContent('Title')}>Лента событий</h1>
    </main>
);

export const Content = withBemMod(cnContent(), { isFull: true })(ContentBlock);
