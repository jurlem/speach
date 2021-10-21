import 'regenerator-runtime/runtime'
import React from "react";
import TextToSpeech from '../components/TextToSpeech'
import Container from '@mui/material/Container';



const Home = () => {
  return (
    <Container maxWidth="md">
      <TextToSpeech />
    </Container >
  )
}
export default Home;
