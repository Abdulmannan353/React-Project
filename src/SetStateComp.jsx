import React from "react";
export default class SetStateComp extends React.Component{
constructor()
 {

    super();

    this.state = 
    {
        sub: 'Frontend Developer',
    };
 }
 ChangeSub =()=>
 {
     this.setState({

        sub: 'Mern Stack Developer',
     });


 }
    render()
  {
    return(
             <div>
                <h1>
                    {this.state.sub}
                </h1>
                <button onClick={this.ChangeSub}>Click Me</button>
            </div> 
    )
  }
    
}