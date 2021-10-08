import Typewriter from "typewriter-effect";
import './About.css';

const Typing=()=> {
    return (
      <>
      <div className="typing my-4" >
        <Typewriter
    
         onInit={(typewriter)=> {
    
         typewriter
          
         .typeString("WELCOME TO OUR WEBSITE ")
           
         .pauseFor(100)
         .deleteAll()
         .typeString("COLLABORATE WITH US FOR DEVELOPMMENT PROJECTS")
         .start();
         }}
         />  
      </div>
      
      </>
    );
  }
    
  export default Typing;