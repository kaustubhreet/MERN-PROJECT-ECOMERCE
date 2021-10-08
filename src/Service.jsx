import react from 'react'
import imag from './congrats.png';
import Card from './Card';
import Sdata from './Sdata';
import Flag from './footer.jsx';
import Particle from './Particle.jsx';

import './About.css';

const Service=()=>{
    return(
       <> 
        <Particle />
        <div className="my-5">
              <h1 className="text-center">Our Services</h1>
          </div>    
          <div className="container-fluid mb-5">
          
              <div className="row">
                  <div className="col-10 mx-auto">
                      <div className="row gy-4">
                        {
                            Sdata.map((val,ind)=>{
                                return <Card key={ind}
                                imgsrc={val.imgsrc}
                                title={val.title}/>
                            })
                                                    }
                

                          </div>
                      </div>
                  </div>
              </div>
              <br/>
< Flag />
       </>
    );
};
export default Service;