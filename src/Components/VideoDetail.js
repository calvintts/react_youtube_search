import React from 'react'

const VideoDetail = ({video}) => {
    if (!video){
        return <div>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <iframe title="video player" width="100%" height="500" src={videoSrc} />
            <p>{video.snippet.description}</p>
        </div>
    )
}

export default VideoDetail