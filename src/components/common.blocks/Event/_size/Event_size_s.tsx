import { IClassNameProps, withBemMod } from "@bem-react/core";
import './Event_size_s.css';

interface IEventSizeSProps extends IClassNameProps {
    size?: string;
    className?: string;
}

export const EventSizeS = withBemMod<IEventSizeSProps>("Event", { size: "s" });