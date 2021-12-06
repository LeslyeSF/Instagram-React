import Footer from "./Footer";
import Suggestion from "./Suggestion";

const listSuggestion = [
    {nameUser: "bearnadinho", linkImg:"./images/Sugest1.png", infoUser: "Bernadinho", type: "main"},
    {nameUser: "doremary", linkImg:"./images/Sugest2.png", infoUser: "Segue você"},
    {nameUser: "frankfrankie", linkImg:"./images/Sugest3.png", infoUser: "Segue você"},
    {nameUser: "runningbear", linkImg:"./images/Sugest4.png", infoUser: "Novo no instagram"},
    {nameUser: "pattyice", linkImg:"./images/Sugest5.png", infoUser: "Segue você"},
    {nameUser: "janj", linkImg:"./images/Sugest6.png", infoUser: "Segue você"},
];
export default function BoxSuggestions(){
    return(
        <aside>                   
            {listSuggestion.map(({nameUser , linkImg, infoUser, type})=> <Suggestion nameUser={nameUser} linkImg={linkImg} infoUser={infoUser} type={type}/>)}
            <Footer />                    
        </aside>
    );
}