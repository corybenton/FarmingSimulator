import Plot from '../components/Plot';
import * as React from 'react';
import {
    Box, SpeedDial, SpeedDialIcon, SpeedDialAction, Grid, Drawer, Button,
    List, ListItem, TablePagination, ListItemButton, ListItemText, SvgIcon
} from '@mui/material';
import { useQuery } from '@apollo/client';
import CornIcon from '../assets/corn-svgrepo-com.svg';
import TomatoIcon from '../assets/tomato-svgrepo-com.svg'
import PumpkinIcon from '../assets/pumpkin-fruit-svgrepo-com.svg'
import LettuceIcon from '../assets/lettuce-svgrepo-com.svg'
import BlueberryIcon from '../assets/blueberries-svgrepo-com.svg'
import EggplantIcon from '../assets/eggplant-svgrepo-com.svg'

const Farm = () => {
    const choices = [
        { icon: <img className='icon' src={TomatoIcon} />, name: 'Tomato' },
        { icon: <img className='icon' src={PumpkinIcon} />, name: 'Pumpkin' },
        { icon: <img className='icon' src={CornIcon} />, name: 'Corn' },
        { icon: <img className='icon' src={LettuceIcon} />, name: 'Lettuce' },
        { icon: <img className='icon' src={BlueberryIcon} />, name: 'Blueberry' },
        { icon: <img className='icon' src={EggplantIcon} />, name: 'Eggplant' },
    ];

    const [drawerState, setDrawerState] = React.useState({ bottom: false });
    const [activePlantIconState, setActivePlantIconState] = React.useState(TomatoIcon);
    const [activePlantState, setActivePlantState] = React.useState('tomato');

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerState({ ...drawerState, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Pumpkin', 'Tomato', 'Corn', 'Lettuce', 'Blueberry', 'Eggplant'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={handleSell}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const handleChooser = (event) => {
        setActivePlantIconState(event.target.src);
        let plant = event.target.src.split("/");
        plant = plant[5].split("-");
        setActivePlantState(plant[0]);
    }

    const handleSell = () => {
        console.log('x');
    }

    return (
        <div>
            <div>
                <div>
                    {/* plant chooser */}
                    <Box sx={{ height: 100, transform: 'translateZ(0px)', flexGrow: 1 }}>
                        <SpeedDial
                            ariaLabel="Plant Chooser"
                            sx={{ position: 'absolute', top: 16, left: 16 }}
                            direction='right'
                            icon={<img className='activeIcon' src={activePlantIconState} />}
                        >
                            {choices.map((action) => (
                                <SpeedDialAction
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                    sx={{ height: 3 }}
                                    onClick={handleChooser}
                                />
                            ))}
                        </SpeedDial>
                    </Box>
                </div>
                <div>
                    {/* money */}
                </div>
            </div>
            <Grid container spacing={0}>
                <Grid div xs={6}>
                    <Plot activePlantState={activePlantState}/>
                    <Plot activePlantState={activePlantState}/>
                </Grid>
                <Grid div xs={6}>
                    <Plot activePlantState={activePlantState}/>
                    <Plot activePlantState={activePlantState}/>
                </Grid>
            </Grid>
            <div>
                {/* Inventory/Shop */}
                {['bottom'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                        <Drawer
                            anchor={anchor}
                            open={drawerState[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Farm;