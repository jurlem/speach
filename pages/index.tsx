import 'regenerator-runtime/runtime'
import React from "react";
import { NextPage } from 'next';

import TextToSpeech from '../components/TextToSpeech'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const Home: NextPage = () => {
  return (
    <Container maxWidth="md">
      <CssBaseline />
      <TextToSpeech />
    </Container >
  )
}
export default Home;
