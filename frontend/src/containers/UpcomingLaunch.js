import React from 'react';
import axios from 'axios';
import PaginationList from '../components/PaginationList.js';

export default class UpcomingLaunch extends React.Component {
  state = {
    launch: []
  }

  componentDidMount() {
    axios.get(`http://0.0.0.0:8000/upcoming`)
      .then(res => {
        const rockets = res.data;

        for (var i = 0; i < rockets.length; i++) {
          if (rockets[i].video_link === null) {
            rockets[i].video_link = 'https://youtu.be/Tk338VXcb24';
          }

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