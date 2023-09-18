import Auth from '../utils/auth';

const Home = () => {
    return (
        <main>
            <div>
                <div>
                    <span>Donate to end world hunger!</span>
                    <button>Donate!</button>
                </div>
                <div>
                    Blurb about game and how to play.
                </div>
                <div>
                    {Auth.loggedIn() ? (
                    <>
                        <button>To My Farm!</button>
                    </>
                    ): (
                        <></>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Home;