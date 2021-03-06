import React from "react";

const videoItem =({video,onSelectVideo})=>{
    return(
    <>
    <div className="col-md-12" onClick={()=>{onSelectVideo(video)}}>
        <div className="row border p-1" style={{cursor: "pointer"}}>
            <div className="col-md-3">
                <img 
                height="70px"
                width= "80px"
                alt={video.snippet.tittle}
                src={video.snippet.thumbnails.medium.url}
                />

            </div>
            <div className="col-md-9">
                    <p>{video.snippet.title}</p>
            </div>
        </div>
    </div>
    </>
    )

}
export default videoItem;