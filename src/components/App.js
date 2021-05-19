import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('Handle Robot Reimagined for Logistics');
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        console.log(response.data.items);
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    }

    render () {
        return (
            <div style={{'marginTop':'40px'}} className="ui container">
                <div className="ui basic segment">
                    <h1 className="ui blue huge tag label">The Kibandaumiza</h1>
                    
                </div>

                <SearchBar onFormSubmit={this.onTermSubmit} />

                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />  {/* we pass video because we deal with a single object */}
                        </div>

                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                        
                    </div>
                    
                </div>

                
                
            </div>
        )
    }
}

export default App;