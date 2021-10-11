import ProductScreen from './screen/ProductScreen';
import {NavLink} from 'react-router-dom';
import { Link ,Route} from 'react-router-dom';

import Sdata from './Sdata';
import Flag from './footer.jsx';
import Particle from './Particle.jsx';
import './About.css';

const Service = () => {
 
    return (
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
                                Sdata.map((val, ind) => /*{
                                    return 
                                    
                                    <Card key={ind}
                                        imgsrc={val.imgsrc}
                                        id={val._id}
                                        title={val.title}

                                />*/
                <div className="col-md-4 col-10 mx-auto">
                    {/* <Route path="/product/:id" component={ProductScreen}/> */}
          <div class="card shadow p-3 mb-5 bg-white rounded" key={ind} >
      <img src={val.imgsrc} class="card-img-top" alt="..."/>
      <div className="card-body">
      <Link to={'/product'}><h5 className="card-title"> {val.title}</h5></Link>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <NavLink to={'./product'} className="btn btn-primary">
        <ProductScreen id={val._id}/> Go somewhere</NavLink>
      </div>
    </div>
  </div>

                                )
                            }
                    </div>
                    </div>
                </div>
            </div>
            <br />
            < Flag />
        </>
    );
};
export default Service;