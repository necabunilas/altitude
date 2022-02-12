import React from 'react';

const Home = () => {
    return (
        <div
            style={{
                backgroundImage: `url('https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-6/264446102_254997676725486_962463315145754458_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHWOZ7nF3vwLyDnmm_P4aZpNjsDIixyro42OwMiLHKujojM70A-2Zaw8mBQyLh0-oY&_nc_ohc=ui6W0nMwQIgAX9Wzjrq&_nc_ht=scontent.fmnl9-2.fna&oh=00_AT9i0OHDKfdxSY5V-cjmtGVYknKun1zrzHprGTwVVBVRLA&oe=620BDD38')`,
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'scroll',
                backgroundPosition: 'top', 
                padding: '3%',
                textAlign: 'center',
                height: '700px'
            }}
        >
            <h1 style={{
                marginTop: '200px',
                marginBottom: '20px',
                fontWeight: 'lighter',
                fontSize: '6rem',
                color: 'black'
                }}
            >
                Altitude Coffee
            </h1>
            <p>Coffee. Cycling. Outdoors.</p>
        </div >
    );
};

export default Home;
