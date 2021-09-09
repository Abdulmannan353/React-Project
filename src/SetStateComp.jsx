import React from "react";
import "./App.css";
 class App extends React.Component
 {
     render()
     {
         return(
          <> 
          <div className="container">
              <div ClassName="row yt">
                  <h1 className= "text-center col-md-12">
                  <i class="fab fa-youtube-square"></i>
                  &nbsp;Vedio Search Engine</h1>
              </div>
              <div className = "row">
                  <div ClassName = "col-md-8">
                      <h1>Search Bar </h1>
                      <h1>vedio player</h1> 
                  </div>
                  <div ClassName = "col-md-4">
                      <h1>video list</h1>
                  </div>
                </div>
            </div>
               
        </>
      );
        
               
  };
    
}
export default App;