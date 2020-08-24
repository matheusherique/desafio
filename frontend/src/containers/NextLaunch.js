import React from 'react';
import axios from 'axios';
import List from '../components/List.js';

class NextLaunch extends React.Component {
  state = {
    launch: {}
  }

  componentDidMount() {
    axios.get(`http://0.0.0.0:8000/next`)
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
export default NextLaunch;