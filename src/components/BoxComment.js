import Comment from "./Comment";
export default function BoxComment({ nameprofile, userComment, numberComments, comments, time}){
    let insertComment = "", insertNumCom = "";
    if(numberComments !== 0){
        insertNumCom = <p class="number-comments">Ver todos os {numberComments} comentários</p>;
        insertComment = comments.map(({ name, comment})=> <Comment name={name} comment={comment} /> );
    }
    return(
        <div class="comments-section">
            <p><button class="name-user">{nameprofile}</button> {userComment}</p>
            {insertNumCom}
            {insertComment}
            <p class="number-comments time">Há {time}</p>
            <div class="horizontal-space"></div>
            <div class="box-comments">
                <input value="Adicione um comentário..."/>
                <button>Publicar</button>
            </div>
        </div>
    );
}