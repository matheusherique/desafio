import React from 'react';
import axios from 'axios';
import OneListView from '../components/OneListView.js';

export default class LatestLaunch extends React.Component {
  state = {
    launch: {}
  }

  componentDidMount() {
    axios.get(`http://0.0.0.0:8000/latest/`)
      .then(res => {
        const rockets = res.data;
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