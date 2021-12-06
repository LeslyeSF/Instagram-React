import BoxStorys from "./BoxStorys";
import BoxSuggestions from "./BoxSuggestions";
import Header from "./Header";
import NavBottom from "./NavBottom";
import Timeline from "./Timeline";

export default function App(){
    return(
        <div>
            <Header />
            <main>
                <div class="main-box">
                    <BoxStorys />
                    <Timeline />
                </div>
                <div class="second-box">
                    <BoxSuggestions />
                </div>
                <NavBottom/>
            </main>
        </div>
        
    );
}