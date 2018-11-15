import { IClassNameProps, withBemMod } from "@bem-react/core";
import './Event_type_info.css';

interface IEventTypeCriticalProps extends IClassNameProps {
    type?: string;
    className?: string;
}

export const EventTypeInfo = withBemMod<IEventTypeCriticalProps>("Event", { type: "info" });