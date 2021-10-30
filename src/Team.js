import teambg from './teamIcons/teamback.jpg';
import team1 from './teamIcons/team1.jpg';
import team2 from './teamIcons/team2.jpg';


const Team=()=>{
   

    return(
      <>
     <div class="container shadow-lg p-3 mb-5 bg-white rounded"><h1><center>WEB DEVELOPER</center></h1>
     
     <div className="container">
     <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={team1} class="d-block w-100" style={{height:"400px"}} alt="1"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={team2} class="d-block w-100" style={{height:"400px"}}alt="2"/>
    </div>
    <div class="carousel-item">
      <img src={teambg} class="d-block w-100"style={{height:"400px"}} alt="3"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    
  </button>
</div></div>
</div>
     <div class="container-fluid my-4 shadow-lg p-3 mb-5 bg-white rounded"><h1><center>APP DEVELOPER</center></h1>
     <img src={team1} class="d-block w-100" style={{height:"400px"}} alt="1"/>
     </div>
     <div class="container-fluid shadow-lg p-3 mb-5 bg-white rounded"><h1><center>SOFTWARE DEVELOPER</center></h1>
     <img src={team2} class="d-block w-100" style={{height:"400px"}} alt="1"/>
     </div>
      </>
    );
};
export default Team;