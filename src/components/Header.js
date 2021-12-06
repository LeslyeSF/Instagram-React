import InsertIcon from "./AuxFunctions";

export default function Header(){
    return(
        <header>
            <div class="container">
                <div class="logo">
                    <InsertIcon name="logo-instagram" />
                    <div class="spacer"></div>
                    <img src="./images/logo.png" alt="Logo Instagram"/>
                    <InsertIcon name="paper-plane-outline" classname="paper-plane"/>
                </div>
                <input class="search-area" value="Pesquisar"/>
                <div class="button-options">
                    <InsertIcon name="paper-plane-outline" />
                    <InsertIcon name="compass-outline" />
                    <InsertIcon name="heart-outline" />
                    <InsertIcon name="person-outline" />
                </div>
            </div>
        </header>
    );
}