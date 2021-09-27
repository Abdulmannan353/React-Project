import React from "react";
import "./Apps.css";
import SearchBar from "./Components/SearchBar";
import youtube from  "./apis/youtubekey";
 class App extends React.Component{
   onTermSubmit = (term) => {
     youtube.get("/search",{
       params: {
         q: term
       }
     })
   }
     render()
     {
         return(
          <> 
             <div className="container">
                 <div className="row yt">
              
                  <h1 className= "text-center col-md-12"><i class="fab fa-youtube-square"></i>
                  &nbsp; YOUTUBE CLONE</h1> </div>
                  <br /><br />
                

                 <div className = "row">
                   <div className = "col-md-8">
                     <SearchBar onFormSubmit={this.onTermSubmit}/>
                      <h1>video player</h1> 
                  </div>
                   <div className= "col-md-4">
                      <h1>video list</h1>
                  </div>
                </div>
            </div>
               
        </>
      );
        
               
  };
    
}
export default App;