import Post from "./Post";

const postList =[
    {nameprofile: "babybaby", linkImgProfile: "./images/ImgPerfil3.png", typePost: "image", 
    linkPost:"./images/ImgTL3.png", firstLikeImg: "./images/storie3.png", firstLikeName:"mommybear", 
    numberLike: 101523, userComment:"jet s2", numberComments: 10, comments:[
        {name:"luxinc", comment: "uuuuuuuu"},
        {name:"sebastianbear", comment: "omg"},
        {name:"adam_riggs", comment: "jeeet"}
    ], time:"37 minutos"},
    {nameprofile: "reedadamchristopher", linkImgProfile: "./images/ImgPerfil1.png", typePost: "image", 
    linkPost:"./images/ImgTL1.png", firstLikeImg: "./images/storie6.png", firstLikeName:"adam_riggs", 
    numberLike: 10, userComment:"let`s go to Maria", numberComments: 0, comments:[ ], time:"50 minutos"},
    {nameprofile: "luxinc", linkImgProfile: "./images/ImgPerfil2.png", typePost: "video", 
    linkPost:["./images/video.mp4", "./images/video.ogv"], firstLikeImg: "./images/storie3.png", firstLikeName:"mommybear", 
    numberLike: 100, userComment:"enjoying the landscape", numberComments: 3, comments:[
        {name:"bartbear", comment: "beautiful day"},
        {name:"annyb", comment: "Pleaseeeeee, follow me back s2"}
    ], time:"1 dia"}];

export default function Timeline(){
    return (
        <div class="timeline">
            {postList.map(({ nameprofile, linkImgProfile, typePost, linkPost, firstLikeImg, firstLikeName, numberLike, userComment, numberComments, comments, time})=> <Post nameprofile={nameprofile} linkImgProfile={linkImgProfile} typePost={typePost} linkPost={linkPost} firstLikeImg={firstLikeImg} firstLikeName={firstLikeName} numberLike={numberLike} userComment={userComment} numberComments={numberComments} comments={comments} time={time} />  )}
        </div>
    );
}