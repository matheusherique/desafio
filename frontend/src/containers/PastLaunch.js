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

        for (var i = 0; i < rockets.length; i++) {

          if (rockets[i].site_name === null) {
            rockets[i].site_name = 'Não informado';
          }
        }

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