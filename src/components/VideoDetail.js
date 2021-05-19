import React from 'react';

const VideoDetail = ({ video }) => {
    
        if (!video) {
            return (
                <div className="ui basic segment">
                Loading...
                </div>
            )
        }

        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

        return (
            <div className="ui segment">
                <div className="ui embed">
                    <iframe title="video player" src={videoSrc} />
                </div>
                
                <div className="ui basic segment">
                        <span><div className="ui header">{video.snippet.title} </div></span>
                        <div className="ui pointing blue label">by:  {video.snippet.channelTitle}</div>
                        <p><br/>{video.snippet.description}</p>
                </div>                                        
                                
            </div>
        )
    
        
    
}

export default VideoDetail;