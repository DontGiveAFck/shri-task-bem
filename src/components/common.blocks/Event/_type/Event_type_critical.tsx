import { IClassNameProps, withBemMod } from "@bem-react/core";
import './Event_type_critical.css';

interface IEventTypeCriticalProps extends IClassNameProps {
    type?: string;
    className?: string;
}

export const EventTypeCritical = withBemMod<IEventTypeCriticalProps>("Event", { type: "critical" });