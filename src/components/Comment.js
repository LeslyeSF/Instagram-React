import InsertIcon from "./AuxFunctions";

export default function Comment({ name, comment }){
    return (
        <div class="comments">
            <p><button class="name-user">l{name}</button> {comment}</p>
            <InsertIcon name="heart-outline" />
        </div>
    );
}