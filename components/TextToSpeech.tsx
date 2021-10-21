import React, { useState } from 'react';
import { NextPage } from 'next';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const TextToSpeech: NextPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en-EN');

  const handleChange = (e: SelectChangeEvent) => {
    setSelectedLanguage(e.target.value as string);
  };

  const onStart = () => (
    SpeechRecognition.startListening({ language: selectedLanguage })
  )

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();


  if (!browserSupportsSpeechRecognition) {
    return <Typography >Browser doesnt support speech recognition. </Typography>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Stack component="main" spacing={2}>
        <Typography variant="h2" component="h1" align="center" mt={8} gutterBottom>Speech to Text </Typography>

        <Box sx={{ maxWidth: 150 }}>
          <FormControl size='small' >
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              defaultValue={'en-EN'}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedLanguage}
              label="Lang"
              onChange={handleChange}
            >
              <MenuItem value={'en-EN'}>English</MenuItem>
              <MenuItem value={'nl-NL'}>Dutch</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Typography variant="body1" color={listening ? "text.warning" : "text.secondary"}>Microphone: {listening ? 'on' : 'off'}</Typography>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button onClick={() => onStart()}>Start</Button>
          <Button onClick={SpeechRecognition.stopListening}>Stop</Button>
          <Button onClick={resetTranscript}>Reset</Button>
        </ButtonGroup>

        <TextField
          rows={4}
          value={transcript}
          id="outlined-textarea"
          placeholder="..."
          multiline
        />
      </Stack>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
        }}
      >
        <Stack direction='row' >
          <Typography variant="body2">
            Merle Jansen 2021 {' '}
          </Typography>
          <Link color="inherit" href="https://github.com/jurlem/speach/tree/main">
            Github
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};
export default TextToSpeech;
