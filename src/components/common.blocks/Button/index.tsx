import { compose } from "@bem-react/core";
import { Button as Base } from "./Button";
import { ButtonActionTypePositive } from "./_type/Button_type_positive";
import { ButtonActionTypeNegative } from "./_type/Button_type_negative";
import "./Button.css";

export const Button = compose(
    ButtonActionTypePositive,
    ButtonActionTypeNegative
)(Base);