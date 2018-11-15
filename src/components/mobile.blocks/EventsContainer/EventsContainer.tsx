import { cn } from '@bem-react/classname';
import { withBemMod } from "@bem-react/core";
import * as React from 'react';
import { Event } from '../Event/index';
import * as inputEvents from './EventsContainer.json';
import './EventsContainer.css';

const cnEvents = cn('EventsContainer');

class EventsContainerBlock extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <section className={cnEvents()}>
                {inputEvents.events.map((event: object, i: number) =>
                    <Event key={i} eventObject={event}/>
                )}
            </section>
        );
    }
}

export const EventsContainer = withBemMod(cnEvents(), { isFull: true })(EventsContainerBlock);
