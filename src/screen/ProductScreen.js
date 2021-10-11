
//import Service from '../Service';
import { Link } from 'react-router-dom';

const ProductScreen=(props)=>{
      //console.log(props.match.params.id);
      //const product=data.products.find(x=>x._id===props.match.params.id);
   return(
       <div>
           <div className="back-to-result">
        <Link to="/service">Back to result</Link>
      </div>
     
    
     <div className="container">
     <h1>{props.id}</h1>
     <p>{props.title}</p>
     </div>
       </div>

   )
};

export default ProductScreen;