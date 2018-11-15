import { cn } from '@bem-react/classname';
import { withBemMod } from "@bem-react/core";
import * as React from 'react';
import { EventsContainer } from '../EventsContainer/EventsContainer';
import './Content.css';

const cnContent = cn('Content');

const ContentBlock = (props: any) => (
    <main className={cnContent()}>
        <h1 className={cnContent('Title')}>Лента событий</h1>
        <EventsContainer/>
    </main>
);

export const Content = withBemMod(cnContent(), { isFull: true })(ContentBlock);
