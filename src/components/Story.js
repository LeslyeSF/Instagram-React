export default function Story({ nameImg , nameUser}){
    return(
        <div class="story">
            <div>
                <img class="frame" src="./images/stories_background.jpg" />
                <img class="story-photo" src={nameImg} />
            </div>
            <p>{nameUser}</p> 
        </div>
    );
}