import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

import Auth from '../../utils/auth';

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header>
            <Grid xs={6} className='group'>
                <div className='center'>
                    <h1>Farming Simulator</h1>
                </div>
                <div>
                    {Auth.loggedIn() ? (
                        <>
                            {/* <span>Welcome, {Auth.getProfile().data.username}!</span> */}
                            <button onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <Grid className='floatRight getin' xs={6}>
                            <div>
                            <Link to="/login">Login</Link>
                            </div>
                            <div>
                            <Link to="/signup">Signup</Link>
                            </div>
                        </Grid>
                    )}
                </div>
            </Grid>
        </header>
    );
};

export default Header;