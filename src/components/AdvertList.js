import React from 'react';
import axios from 'axios';

export default class AdvertList extends React.Component {
  state = {
    adverts: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/bireysel-ilanlar`)
      .then(res => {
        const  adverts = res.data;
        this.setState({  adverts });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state. adverts
            .map( adverts =>
              <li key={ adverts.id}>{ adverts.name}</li>
            )
        }
      </ul>
    )
  }
}