import {BadgeElement} from "./Badge.element";

export default function Badge (props){
    return(
        <BadgeElement>
            <span className={`badge badge-${props.type}`}>
                {props.content}
            </span>
        </BadgeElement>
    )
}