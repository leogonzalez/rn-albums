import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

//class based compnent have lifecycle methods

class AlbumList extends Component {
  state = {
    albums: []
  };
  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(({ data }) => {
        this.setState({ albums: data });
      });
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }
  render() {
    return (
      <ScrollView>
        <Text>Album List</Text>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
