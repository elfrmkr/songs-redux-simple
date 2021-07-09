import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends React.Component{
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className = 'item' key = {song.title}>
                    <div className = 'right floated content'>
                      <button
                       onClick = {() => this.props.selectSong(song)}
                       className = "ui button primary">
                       Select
                       </button>  
                    </div>
                    <div className = "content"> {song.title} </div>
                </div>
            );
        });
    }
    render() {
        // this.props === {songs: state.songs};
        return (
            <div className = "ui divided list"> {this.renderList()}</div>
        );
    };
};
// we are gonna take the data in the store and make some computations to it adn eventually that data will be props inside of our component
const mapStateToProps = state => {
    console.log(state);
    return {songs: state.songs};
};

export default connect(mapStateToProps, {selectSong})(SongList);