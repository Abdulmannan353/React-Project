import React from "react";
import "./Apps.css";
import SearchBar from "./Components/SearchBar";
 class App extends React.Component
 {
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
                     <SearchBar/>
                      <h1>Search Bar </h1>
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