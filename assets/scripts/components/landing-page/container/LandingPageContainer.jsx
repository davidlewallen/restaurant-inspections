import React from 'react';
import axios from 'axios';

import LandingPage from '../components/LandingPage';

class LandingPageContainer extends React.Component {
  constructor() {
    super();

    this.state = { data: [] };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('https://data.austintexas.gov/resource/nguv-n54k.json')
    .then((resp) => {
      console.log('data', resp);
      this.setState({ data: resp.data });
    });
  }

  render() {
    return (
      <LandingPage inspectionData={this.state.data} />
    );
  }
}

export default LandingPageContainer;
