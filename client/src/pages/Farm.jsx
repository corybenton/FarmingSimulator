import Plot from '../components/Plot';
import * as React from 'react';
import {
    Box, SpeedDial, SpeedDialAction, Grid, Drawer, Button, Icon,
    List, ListItem, Container, ListItemButton, ListItemText
} from '@mui/material';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_MONEY, QUERY_PLOTS, QUERY_FARM } from '../utils/queries';
import CornIcon from '../assets/corn-svgrepo-com.svg';
import TomatoIcon from '../assets/tomato-svgrepo-com.svg';
import PumpkinIcon from '../assets/pumpkin-fruit-svgrepo-com.svg';
import LettuceIcon from '../assets/lettuce-svgrepo-com.svg';
import BlueberryIcon from '../assets/blueberries-svgrepo-com.svg';
import EggplantIcon from '../assets/eggplant-svgrepo-com.svg';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { BUY_PLOT } from '../utils/mutations';


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

    const drawerChoice = ['Tomato', 'Pumpkin', 'Corn', 'Lettuce', 'Blueberry', 'Eggplant'];
    const { data: plotObj } = useQuery(QUERY_PLOTS);
    const { data: myMoney, loading } = useQuery(QUERY_MONEY);
    const plotNumber = 1 || plotObj.plots.farm.plots;
    

    // const [moneyState, setMoneyState] = React.useState(myMoney.money.money) || 0;

    const plotCost = 1000 * plotNumber;

    let plotStatus = [];
    for (let i = 0; i < 4; i++) {
        if (plotNumber - 1 >= i) {
            plotStatus[i] = true;
        } else {
            plotStatus[i] = false;
        }
    }
    
    const { data: plantedCrops } = useQuery(QUERY_FARM);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerState({ ...drawerState, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 'auto' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {drawerChoice.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={handleSell}>
                            <ListItemText primary={text} />
                            <p>0</p>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const handleChooser = (event) => {
        setActivePlantIconState(event.target.src);
        let plant = event.target.src.split("/");
        plant = plant[plant.length - 1].split("-");
        setActivePlantState(plant[0]);
    }

    const handleSell = () => {
        console.log('x');
    }

    const handleBuy = () => {
        if (myMoney >= plotCost) {
            useMutation(BUY_PLOT);
            setMoneyState(myMoney - plotCost);
        } else {
            console.log('Not enough money');
        }
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
                <div className='bankAccount floatRight'>
                    <AccountBalanceIcon  />
                    {!loading && <p className='myMoney'>${myMoney.money.money}</p>}
                </div>
            </div>
                <div className='plotGroup'>
                {plotStatus.map((index, i) => {
                    return (
                        <div key={i}>
                    {index  ? (
                        <div>
                        <Plot activePlantState={activePlantState} plotNumber={i}  />
                        </div>
                    ): (
                        <Container fixed className='plantContainer'>
                        <Box className='plantBox' sx={{bgcolor:'#6699cc', height:'150px'}}>
                            <button onClick={handleBuy} className='buyPlot'>${plotCost}</button>
                        </Box>
                    </Container>
                    )}
                    </div>
                    )
                })}

                </div> 
            <div>
                {/* Inventory/Shop */}
                {['bottom'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>INVENTORY</Button>
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