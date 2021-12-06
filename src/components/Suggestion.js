export default function Suggestion({linkImg , nameUser , infoUser, type}){
    if (type ==="main"){
        return(
            <div>
                <div class="main-suggestion">
                    <img src={linkImg} />
                    <div>
                        <button>{nameUser}</button>
                        <p>{infoUser}</p>
                    </div>
                </div>

                <div class="horizontal-space">
                    <p>Sugestões para você</p>
                    <button class="direito">Ver tudo</button>
                </div> 
            </div> 
        );
    }else {
        return (
            <div class="suggestion">
                <div class="info-suggestion">
                    <img src={linkImg} />
                    <div>
                        <button>{nameUser}</button>
                        <p>{infoUser}</p>
                    </div>
                </div>
    
                <button class="follow">Seguir</button>
            </div>
        );
    }
    
}