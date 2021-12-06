import InsertIcon from "./AuxFunctions";

export default function InformationPost({nameprofile: name , linkImgProfile}){
    return(
        <div class="info-post">
            <div class="profile">
                <img src={linkImgProfile}/>
                <button class="name-user">{name}</button>
            </div>
            <button><InsertIcon name="ellipsis-horizontal-outline" /></button>
        </div>
    );
}