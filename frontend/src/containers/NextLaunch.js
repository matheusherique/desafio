import React from 'react';
import axios from 'axios';
import OneListView from '../components/OneListView.js';

class NextLaunch extends React.Component {
  state = {
    launch: {}
  }

  componentDidMount() {
    axios.get(`http://0.0.0.0:8000/next/`)
      .then(res => {
        const rockets = res.data;
        rockets.video_link = 'https://www.youtube.com/embed/Tk338VXcb24';
        console.log(rockets)
        this.setState({ launch: rockets });
      })
  }

  render() {
    return (
        <OneListView data={this.state.launch} />
    );
  }
}
export default NextLaunch;