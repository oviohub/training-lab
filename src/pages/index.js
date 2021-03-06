/**
 * The Home page
 */

import React from 'react';
import Layout from '../layouts/layout';
import { Grid } from '@material-ui/core';

import Header from '../components/Header';
import Block from '../components/Block';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <Grid container>
      <Block backgroundColor="orange" shape="triangle" shapeColor="darkBlue" size={12}/>
    </Grid>
    <Footer />
  </Layout>
);

export default IndexPage;
