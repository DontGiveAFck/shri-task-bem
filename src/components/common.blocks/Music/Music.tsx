import { cn } from '@bem-react/classname';
import * as React from 'react';
import './Music.css';

const cnMusic = cn('Music');

export const Music = (props: any) => (
    <div className={cnMusic()}>
        <div className={cnMusic("TrackRow")}>
            <img src={props.musicData.albumcover} alt="albumcover" className={cnMusic("TrackIcon")}/>
            <div className={cnMusic("Track")}>
                <p className={cnMusic("TrackTitle")}> {props.musicData.artist} - {props.musicData.track.name}</p>
                <div className={cnMusic("RangeLengthRow")}>
                    <input type="range" min="0" max="100" className={cnMusic("TrackRange")}/>
                    <span className={cnMusic("TrackLength")}>{props.musicData.track.length}</span>
                </div>
            </div>
        </div>
        <div className={cnMusic("VolumeRow")}>
            <img src="images/Prev.svg" alt="prev" className={cnMusic("ButtonLeft")}/>
            <img src="images/Prev.svg" alt="next" className={cnMusic("ButtonRight")}/>
            <input type="range" min="0" max="100" className={cnMusic("VolumeRange")}/>
            <span className={cnMusic("VolumePercentage")}>{props.musicData.volume}%</span>
        </div>
    </div>
);
