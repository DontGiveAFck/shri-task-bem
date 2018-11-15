import { cn } from '@bem-react/classname';
import * as React from 'react';
import './Button.css';

const cnButton = cn('Button');

export const Button = (props: any) => (
        <div className={cnButton({type: props.type})}/>
);
