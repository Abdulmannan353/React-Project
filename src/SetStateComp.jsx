import React from "react";
export default class SetStateComp extends React.Component{
constructor()
 {

    super();

    this.state = 
    {
        login: '',
    };
 }
login= ()=>
{
 if(this.refs.usrnam.value==="Abdul Mannan" && this.refs.pass.value==="Abdul")
    {
        this.setState({login: "SUCESS"});
    }
        else
    {
        this.setState({ login: "FAILED"});
    }

}
    render()
  {
    return(
             <div>
                 <br /><br /><br />
                <fieldset>
                    <legend>
                        Login Form
                    </legend>
                        <input type="text" ref ="usrnam" placeholder ="Enter Your Name Here"/>
                        <br /><br /><br />
                        <input type="password" ref="pass" Placeholder ="Enter Your Password Here"/>
                        <br /> <br /> <br />
                        <button onClick= {this.login}>LOGIN</button>
                        <br /><br /><br />
                        <h1> LOGIN STATUS :
                        { this.state.login}
                        </h1>
                    
                </fieldset>
            </div> 
    )
  }
    
}zdsfvsdzczxcdsczXCdscfsdCCZS