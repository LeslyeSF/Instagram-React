import BoxComment from "./BoxComment";
import ContentPost from "./ContentPost";
import InformationPost from "./InformationPost";
import LikeSection from "./LikeSection";
import OptionsPost from "./OptionsPost";

export default function Post({ nameprofile, linkImgProfile, typePost, linkPost, firstLikeImg, firstLikeName, numberLike, userComment, numberComments, comments, time}){
    return (
        <div class="post">
            <InformationPost nameprofile={nameprofile} linkImgProfile={linkImgProfile} />
            <ContentPost typePost={typePost} linkPost={linkPost} />
            <OptionsPost />
            <LikeSection firstLikeImg={firstLikeImg} firstLikeName={firstLikeName} numberLike={numberLike} />
            <BoxComment  nameprofile={nameprofile} userComment={userComment} numberComments={numberComments} comments={comments} time={time} /> 
        </div>
    );

    
}