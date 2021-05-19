import React from 'react';
import './VideoItem.css';


const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="item video-item">
                <div onClick={() => onVideoSelect(video)} className="ui basic segment">
            
                    <img className="ui image" alt="{video.snippet.title}" src={video.snippet.thumbnails.medium.url} /> <br/>

                    <div className="content">

                        <div className="header">{video.snippet.title} <br/></div>

                        <div className="ui label">
                        
                            by:  {video.snippet.channelTitle}
                    
                        </div>
                    </div>
                    
                
                    
                </div>
        </div>
        
    )
};

export default VideoItem;