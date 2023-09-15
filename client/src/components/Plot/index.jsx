import * as React from 'react';
import { Box, Container, Grid } from '@mui/material';

const Plot = () => {
    const handlePlant = async (event) => {
        if (event.target.innerHTML === 'X') {
            event.target.innerHTML = 'O';
        } else {
            event.target.innerHTML = 'X';
        }
    }
    return (
    <Container fixed >
        <Box sx={{bgcolor:'#cfe8fc', height: '20vh', width:'60%'}}>
            <Grid container spacing={0}>
                <Grid div xs={6}>
                    <div onClick={handlePlant} className='plant'>X</div>
                    <div onClick={handlePlant} className='plant'>X</div>
                    <div onClick={handlePlant} className='plant'>X</div>
                </Grid>
                <Grid div xs={6}>
                    <div onClick={handlePlant} className='plant'>X</div>
                    <div onClick={handlePlant} className='plant'>X</div>
                    <div onClick={handlePlant} className='plant'>X</div>
                </Grid>
            </Grid>
        </Box>
    </Container>
    )
}

export default Plot;