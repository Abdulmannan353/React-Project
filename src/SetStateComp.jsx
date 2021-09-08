import React from "react";
import axios from "axios"
export default class SetStateComp extends React.Component{
constructor()
  {

    super();

    this.state = 
    {
        arr: [],
    };
  }
  componentDidMount()
  {
      axios.get('https://restcountries.eu/rest/v2/all').then
       (
       (posRes) =>{
           this.setState({arr:posRes.data});

       },

       (errRes)=>{
           console.log(errRes);
       }
       )
  }

    render()
  {
    return(
             <div>
                <table border="1" align="center">
                    <thead style={{color: "red",backgroundColor: "yellow", fontSize: 20, fontFamily: "fantasy" }}>
                        <tr>
                            <th>S#</th>
                            <th>NAME</th>
                            <th>CAPITAL</th>
                            <th>FLAG</th>
                        </tr>
                    </thead>
                    <tbody style={{color: "red", fontSize: 14}}>
                        {this.state.arr.map(
                            (el,i)=>(
                                <tr key = {i} >
                                    <td align="center">
                                        {i
                                        }
                                    </td>
                                    <td align="center" width="80">
                                        {el.name}
                                    </td>
                                    <td align= "center" width= "80">{el.capital}</td>
                                    <td><img src={el.flag} alt={el.name} width= "150" height= "50"/></td>
                                </tr>
                            )
                        )}
                    </tbody>

                </table>
            </div> 
    )
  }
    
}