import { cn } from '@bem-react/classname';
import { withBemMod } from "@bem-react/core";
import * as React from 'react';
import './Buttons.css';

const cnButtons = cn('Buttons');

const ButtonsBlock = (props: any) => (
    <div className={cnButtons()}>
        <div className={cnButtons("ButtonPositive")}>Да</div>
        <div className={cnButtons("ButtonNegative")}>Нет</div>
    </div>
);

export const Buttons = withBemMod(cnButtons(), { isFull: true })(ButtonsBlock);


