import react,{useState} from 'react';
import teambg from './teamIcons/teamback.jpg';
import team1 from './teamIcons/team1.jpg';
import team2 from './teamIcons/team2.jpg';


const Team=()=>{
   

    return(
      <>
     
      <div class="container-fluid" style={{backgroundRepeat:"no-repeat",backgroundSize:"cover",
      backgroundImage:`url(${teambg})`,height:"500px"}}>
           <center><h1><br/>Our Team </h1></center>
         <div class="row">
          <div className="col1" style={{padding:"100px 100px",borderRadius:"50%",
          float:"left",height:"380px",marginLeft:"2%",backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
          backgroundImage:`url(${team1})`,
          display:"float",width:"48%",background:"red"}}>
             <strong>
                  <h1 style={{color:"rgb(9 112 63)"}}>
                      <center>
                      DESIGNER
                      </center>
                  </h1>
              </strong>
              </div>
              <div className="col2" style={{padding:"100px 100px",
              float:"left",height:"380px",backgroundRepeat:"no-repeat",backgroundSize:"cover",
              backgroundImage:`url(${team2})`,
              borderRadius:"50%",background:"purple",marginRight:"2%",
              display:"float",width:"48%"}}>
                 <strong>
                  <h1 style={{color:"rgb(9 112 63)"}}>
                      <center>
                      DEVELOPER
                      </center>
                  </h1>
              </strong>
              </div>  
             
         </div>
      </div>
      </>
    );
};
export default Team;