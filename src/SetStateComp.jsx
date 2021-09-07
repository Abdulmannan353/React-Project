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
                <Table border="1" align="center">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Capital</th>
                            <th>Flag</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.arr.map(
                            (el,i)=>{
                                <tr key = {i} >
                                    <td>
                                        {el.name}
                                    </td>
                                    <td>{el.capital}</td>
                                    <td><img src={el.flag} alt={el.name} /></td>
                                </tr>
                            }
                        )}
                    </tbody>

                </Table>
            </div> 
    )
  }
    
}