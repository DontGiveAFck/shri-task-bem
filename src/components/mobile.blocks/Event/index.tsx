import { compose } from "@bem-react/core";
import { Event as Base } from "./Event";
import { EventTypeInfo } from "./_type/Event_type_info";
import { EventTypeCritical } from "./_type/Event_type_critical";
import { EventSizeS } from "./_size/Event_size_s";
import { EventSizeM } from "./_size/Event_size_m";
import { EventSizeL } from "./_size/Event_size_l";
import "./Event.css";

export const Event = compose(
    EventTypeInfo,
    EventTypeCritical,
    EventSizeL,
    EventSizeM,
    EventSizeS
)(Base);