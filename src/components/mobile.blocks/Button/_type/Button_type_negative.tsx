import * as React from "react";
import { IClassNameProps, ModBody, withBemMod } from "@bem-react/core";
import './Button_type_negative.css';

interface IButtonActionPositiveProps extends IClassNameProps {
    type?: string;
    className?: string;
}

const ButtonTypeNegative: ModBody<IButtonActionPositiveProps> = (Base, props) => {
    return (
        <div className={props.className}>Нет</div>
    );
};

export const ButtonActionTypeNegative = withBemMod<IButtonActionPositiveProps>(
    "Button",
    { type: "negative" },
    ButtonTypeNegative
);