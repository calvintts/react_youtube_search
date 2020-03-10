import React, {Component} from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from "./VideoDetail";

export default class App extends Component
{
    state = {
        videos:[],
        selectedVideo:null
    }
    onSearchSubmit = async term => {
        const res = await youtube.get('/search',{
            params:{
                q: term
            }
        })
        this.setState({
            videos:res.data.items,
            selectedVideo: res.data.items[0],
        })
    }

    onVideoSelect = video => {
        this.setState({selectedVideo: video})
    }

    componentDidMount(){
        this.onSearchSubmit("hello world")
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={ this.onSearchSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail onVideoSelect={this.onVideoSelect} video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}