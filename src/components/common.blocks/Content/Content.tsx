import { cn } from '@bem-react/classname';
import * as React from 'react';
import { EventsContainer } from '../EventsContainer/EventsContainer';
import './Content.css';

const cnContent = cn('Content');

export const Content = (props: any) => (
    <main className={cnContent()}>
        <h1 className={cnContent('Title')}>Лента событий</h1>
        <EventsContainer/>
    </main>
);
