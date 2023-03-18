
import config from "../firebaseconfig";


function IntroText(){
 
    return(<div>
           <button onClick={() => config.auth().signOut()}>Sign out</button>
      
        </div>
    )
}

export default IntroText