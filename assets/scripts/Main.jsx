/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from 'react-bootstrap';

import LandingPage from './components/landing-page/container/LandingPageContainer';

ReactDOM.render(
  <Grid>
    <LandingPage />
  </Grid>
, document.getElementById('react-root'));
