/*function Student(props)
{
    return(
<div> 
    <h1>Arnav here !!!</h1>
    <p>hey why are you alone here ?{props.name}</p>
 
</div>
    )
}
export default Student;*/
import React,{component} from 'react'
export default class Student extends React.Component{
   constructor (){
       super();
       this.state={
           data:"hey"
       }
   }
   apple(){
       this.setState({data:this.state.data})
   }
    render(){
        return (
            <div><h1>{this.state.data}</h1> 
            <h2>{6*5}</h2>
            </div>
        )
    }
} 