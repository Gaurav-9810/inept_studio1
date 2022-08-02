import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';

import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? 'blue' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
 }));
 const blue = {
  500: '#007FFF',
  600: '#fff',
  700: '#0059B2',
};

const CustomButton = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${blue[600]};
 
  border-radius: 8px;
  color: black;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid black;

  &:hover {
    background-color: ${blue[500]};
    color:white;
  }
`;

function TechUsed1() {
  return (
    <div>
<Grid container spacing={2}>
      <Grid item xs={8}>
      <Item>
            <PhotoLibraryIcon/>
              <h2 className='text-lg font-bold text-black'>Adobe Photoshop</h2>
              <p>Photoshop is an extremely powerful program for creating prints and patterns to be the best they can be in the designing world. It has tools, and settings to open up new opportunities, to create design.</p>
              
              <CustomButton className="px-4 py-2 sm:px-4 sm:py-2">Button</CustomButton>
      </Item>
      </Grid>
      <Grid item xs={4}>
      <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
      <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
      <Item>xs=8</Item>
      </Grid>
</Grid>
    </div>
  )
}

export default TechUsed1