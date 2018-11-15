import { IClassNameProps, withBemMod } from "@bem-react/core";
import './Event_size_l.css';

interface IEventSizeMProps extends IClassNameProps {
    size?: string;
    className?: string;
}

export const EventSizeL = withBemMod<IEventSizeMProps>("Event", { size: "l" });