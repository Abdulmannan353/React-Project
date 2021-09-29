import React from "react";
import "./Apps.css";
import SearchBar from "./Components/SearchBar";
import youtube from  "./apis/youtubekey";
import VideoList from "./Components/videoList";
import VideoDetails from "./Components/VideoDetails";
 class App extends React.Component{
   state={
     videos: [],
     selectedVideo: "",
   };
   componentDidMount(){
     this.onTermSubmit("Home")
   }
   onSelectVideo = (video)=>{
     this.setState({selectedVideo: video});
   }
   onTermSubmit =async (term) => {
     const res= await youtube.get("/search",{
       params: {
         q: term
       }
     })
     this.setState({videos:res.data.items, selectedVideo: res.data.items[0]})
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
                      <VideoDetails video={this.state.selectedVideo}/>
                  </div>
                   <div className= "col-md-4">
                     <VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo} />
                  </div>
                </div>
            </div>
               
        </>
      );
        
               
  };
    
}
export default App;