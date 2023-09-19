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
                    Blurb about game and how to play. Hover over tomato to choose a plant to plant.  The active icon will be the plant planted.
                    Click on a soil plot to plant the plant.  Wait for plant to grow (between 8 and 24 hours).  When plant fully grown, click to harvest.
                    Repeat to your heart's content.
                </div>
                <div>
                    {Auth.loggedIn() && (
                    <>
                        <button>To My Farm!</button>
                    </>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Home;