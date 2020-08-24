import React from 'react';
import axios from 'axios';
import PaginationList from '../components/PaginationList.js';

export default class PastLaunch extends React.Component {
  state = {
    launch: []
  }

  componentDidMount() {
    axios.get(`http://0.0.0.0:8000/past`)
      .then(res => {
        const rockets = res.data;
        console.log(rockets)
        this.setState({ launch: rockets });
      })
  }

  render() {
    return (
        <PaginationList data={this.state.launch} />
    );
  }
}