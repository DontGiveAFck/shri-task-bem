import { cn } from '@bem-react/classname';
import { IClassNameProps } from "@bem-react/core";
import * as React from 'react';
import { Music } from '../Music/Music';
import { Button } from '../Button/index';
import './Event.css';

const cnEvent = cn('Event');


interface IEventBlockProps extends IClassNameProps {
    eventObject: {
        type: string,
        title: string,
        icon: string,
        source: string,
        time: string,
        description: string | undefined,
        size: string,
        data: {
            type: string | undefined,
            temperature: string | undefined,
            humidity: string | undefined,
            image: string | undefined,
            track: object | undefined,
            buttons: object | undefined
        }
    }
}

interface IEventIcons {
    [eventIcon: string]: string;
}

const eventIcons: IEventIcons = {
    "ac": "images/ac-white.svg",
    "ac-white": "images/ac-white.svg",
    "battery": "images/battery.svg",
    "cam": "images/cam-white.svg",
    "fridge": "images/fridge.svg",
    "kettle": "images/kettle.svg",
    "key": "images/key.svg",
    "music": "images/music.svg",
    "robot-cleaner": "images/robot-cleaner.svg",
    "router": "images/router.svg",
    "stats": "images/stats.svg",
    "thermal": "images/thermal.svg",
};

export class Event extends React.Component<IEventBlockProps>{
    constructor(props: any) {
        super(props);
    }

    public render() {
        const { eventObject }  = this.props;

        return (
            <section className={cnEvent({ size: eventObject.size, type: eventObject.type })}>
                <img src="images/Next.svg" alt="" className={cnEvent('ArrowRight')}/>
                <img src="images/cross.svg" alt="" className={cnEvent("ArrowCross")}/>
                <div className={cnEvent("IconTitleRow")}>
                    <img className={cnEvent('Icon')} src={eventIcons[eventObject.icon]}/>
                    <div className={cnEvent('Title')}>{eventObject.title}</div>
                </div>
                <div className={cnEvent("SourceTimeRow")}>
                    <div className={cnEvent("Source")}>{eventObject.source}</div>
                    <div className={cnEvent("Time")}>{eventObject.time}</div>
                </div>
                <div className={cnEvent("EventContainer", {type: eventObject.type})}>
                    { eventObject.description && <div className={eventObject.type === 'info' ? cnEvent("Description") : cnEvent('Description', { type: eventObject.type })}>{eventObject.description}</div> }
                    { eventObject.data && <div className={cnEvent("Data")}>
                        { eventObject.data.type && <img className={cnEvent('Image')} src="images/Richdata.png"/>}
                        {eventObject.data.image && <div>
                            <div className={cnEvent("ImageWrapper")}/>
                            <img className={cnEvent("Image")} src='images/md.png'/>
                        </div>
                        }
                        { eventObject.data.temperature && <div className={cnEvent("TemperatureHumidityRow")}>
                            <span className={cnEvent("Temperature")}>Температура: </span>&nbsp;<span
                            className={cnEvent("TemperatureValue")}>{ eventObject.data.temperature } C</span>
                            <span className={cnEvent("Humidity")}>Влажность: </span>&nbsp;<span
                            className={cnEvent("HumidityValue")}>{ eventObject.data.humidity } %</span>
                        </div>
                        }
                        { eventObject.data.track && <Music musicData={eventObject.data}/>}

                        { eventObject.data.buttons && <Button type='positive'/>}
                        { eventObject.data.buttons && <Button type='negative'/>}
                    </div>
                    }
                </div>
            </section>
        );
    }
}
