import React, { useEffect, useState } from 'react';
import axios from 'axios';
import withListLoading from '../components/withListLoading';
import List from '../components/List.js';

export default class LatestLaunch extends React.Component {
  state = {
    launch: {}
  }

  componentDidMount() {
    axios.get(`http://0.0.0.0:8000/latest`)
      .then(res => {
        const rockets = res.data;
        console.log(rockets)
        this.setState({ launch: rockets });
      })
  }

  render() {
    return (
        <List data={this.state.launch} />
    );
  }
}