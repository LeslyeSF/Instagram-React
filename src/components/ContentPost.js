export default function ContentPost({ typePost, linkPost }){
    if(typePost === "video"){
        return(
            <video width="612px" height="612px" autoplay controls >
                <source src={linkPost[0]} type="video/mp4"/>
                <source src={linkPost[1]} type="video/ogv"/>
            </video>
        );
    } else{
        return(
            <img src={linkPost}/>
        );
    }
}