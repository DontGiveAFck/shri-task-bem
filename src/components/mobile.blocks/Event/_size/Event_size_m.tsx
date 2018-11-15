import { IClassNameProps, withBemMod } from "@bem-react/core";
import './Event_size_m.css';

interface IEventSizeMProps extends IClassNameProps {
    size?: string;
    className?: string;
}

export const EventSizeM = withBemMod<IEventSizeMProps>("Event", { size: "m" });