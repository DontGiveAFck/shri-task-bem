import * as React from "react";
import { IClassNameProps, ModBody, withBemMod } from "@bem-react/core";
import './Button_type_positive.css';

interface IButtonActionPositiveProps extends IClassNameProps {
    type?: string;
    className?: string;
}

const ButtonTypePositive: ModBody<IButtonActionPositiveProps> = (Base, props) => {
    return (
        <div className={props.className}>Да</div>
    );
};

export const ButtonActionTypePositive = withBemMod<IButtonActionPositiveProps>(
    "Button",
    { type: "positive" },
    ButtonTypePositive
);