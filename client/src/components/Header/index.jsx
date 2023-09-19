import { Link, redirect } from 'react-router-dom';
import { Grid } from '@mui/material';

import Auth from '../../utils/auth';

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
        location.replace('/');
    };
    return (
        <header>
            <Grid className='group'>
                <div className='center'>
                    <h1>Farming Simulator</h1>
                </div>
                <div className='floatRight getin'>
                    {Auth.loggedIn() ? (
                        <>
                            {/* <span>Welcome, {Auth.getProfile().data.username}!</span> */}
                            <button onClick={logout} >Logout</button>
                        </>
                    ) : (
                        <div>
                            <div>
                            <Link to="/login">Login</Link>
                            </div>
                            <div>
                            <Link to="/signup">Signup</Link>
                            </div>
                        </div>
                    )}
                </div>
            </Grid>
        </header>
    );
};

export default Header;