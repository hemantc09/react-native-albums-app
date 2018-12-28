import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //note there is response.data because the api returns the data as response
      .then(response => this.setState({ albums: response.data }));
    // After the above statement run our albums[] get full with the response data from api
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      //passing from parent (props) called album to the child <AlbumDetail> component
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log('updated state is after setSate()', this.state);

    return (
      <ScrollView>
          {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
