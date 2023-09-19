import * as React from 'react';
import { Box, Container, Grid } from '@mui/material';
import TomatoSeed from '../../assets/tomato_seedling.png';
import PumpkinSeed from '../../assets/pumpkin_seedling.png';
import CornSeed from '../../assets/corn_seedling.jpg';
import LettuceSeed from '../../assets/lettuce_seedling.jpg';
import BlueberrySeed from '../../assets/blueberry_seedling.png';
import EggplantSeed from '../../assets/eggplant_seedling.jpg';
import Soil from '../../assets/soil.webp';

const Plot = ({ activePlantState, plotNumber }) => {

    const handlePlant = async (event) => {
        let toPlant, plantExp;
        switch(activePlantState) {
            case 'tomato':
                toPlant = TomatoSeed;
                plantExp = 12*60*60;
                break;
            case 'pumpkin':
                toPlant = PumpkinSeed;
                plantExp = 17*60*60;
                break;
            case 'corn':
                toPlant = CornSeed;
                plantExp = 14*60*60;
                break;
            case 'lettuce':
                toPlant = LettuceSeed;
                plantExp = 8*60*60;
                break;
            case 'blueberries':
                toPlant = BlueberrySeed;
                plantExp = 24*60*60;
                break;
            case 'eggplant':
                toPlant = EggplantSeed;
                plantExp = 19*60*60;
                break;
        }


        if (event.target.src.slice(-21) == Soil) {
            event.target.src = toPlant;
            const randomPlant = activePlantState + Math.floor(Math.random()*1000000);
            // localStorage.setItem(randomPlant, Date.now() + plantExp);
        } else if (event.target.src.slice(-12, -4) === 'seedling') {
            console.log('Growing');
        } else {

        }
    }
    return (
    <Container fixed className='plantContainer' >
        <Box className='plantBox' sx={{bgcolor:'#a64a2b'}}>
            <Grid container spacing={0} className='plot'>
                <Grid div >
                    <img onClick={handlePlant} className='plant' src={Soil}/>
                    <img onClick={handlePlant} className='plant' src={Soil}/>
                {/* </Grid>
                <Grid div sm={3}> */}
                    <img onClick={handlePlant} className='plant' src={Soil}/>
                    <img onClick={handlePlant} className='plant' src={Soil}/>
                {/* </Grid>
                <Grid div sm={3}> */}
                    <img onClick={handlePlant} className='plant' src={Soil}/>
                    <img onClick={handlePlant} className='plant' src={Soil}/>
                </Grid>
            </Grid>
        </Box>
    </Container>
    )
}

export default Plot;