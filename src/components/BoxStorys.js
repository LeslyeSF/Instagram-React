import Story from "./Story";

const storysInfo = [
    {nameImg:"./images/storie1.png", nameUser: "bobrown"},
    {nameImg:"./images/storie2.png", nameUser: "carla_bear"},
    {nameImg:"./images/storie3.png", nameUser: "sebastianbear"},
    {nameImg:"./images/storie4.png", nameUser: "mommybear"},
    {nameImg:"./images/storie5.png", nameUser: "predatorjack"},
    {nameImg:"./images/storie6.png", nameUser: "adam_riggs"},
    {nameImg:"./images/storie7.png", nameUser: "fighterbear"},
    {nameImg:"./images/storie8.png", nameUser: "brisamorgana"},
];
export default function BoxStorys(){
    return(
        <nav>
            {storysInfo.map(({ nameImg, nameUser}) => <Story nameImg={nameImg} nameUser={nameUser} />)}
            <button class="button-story"><ion-icon name="chevron-forward-circle"></ion-icon></button>
        </nav>
    );
}