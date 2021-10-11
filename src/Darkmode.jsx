import {useState} from 'react';

const Darkmode=()=>{
const [Dark, setDark] = useState({
    backgroundColor:'#fff',
    Color:'#000'
   
})

const Toggle=()=>{
  if(Dark.Color==='#fff'){
setDark({
    backgroundColor:'#fff',
    Color:'#000' 
  })
  document.body.style.backgroundColor = 'black';
}
  else{
  setDark(
  {
    backgroundColor:'#000',
    color:'#fff'
  })
  document.body.style.backgroundColor = '#494e53';
  document.body.style.color = '#fff';
}

};

return(
<>
<div className="form-check form-switch">
<input className="form-check-input" onClick={Toggle} type="checkbox" id="flexSwitchCheckDefault"/>
<label  className="form-check-label" for="flexSwitchCheckDefault" >
</label>
</div>

</>
)
};
export default Darkmode;