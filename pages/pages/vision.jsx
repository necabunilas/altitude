import React from 'react';
import { Stack } from '@mui/material';
import { Coffee, DirectionsBike, Laptop } from '@mui/icons-material/';

const Vision = () => {
    return (
        <Stack
            alignItems="center"
            style={{
                backgroundColor: '#eae7d9',
                paddingTop: '7%',
                paddingBottom: '7%',
                paddingLeft: '15%',
                paddingRight: '15%',
                textAlign: 'center'
            }}
        >
            <h2
                style={{ fontWeight: 'lighter' }}
            >
                Vision
            </h2>
            <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={2}
            >
                <Stack alignItems="center" style={{ padding: '5% 5% 3%' }}>
                    <Coffee sx={{ fontSize:75 }}/>
                    <h3 style={{ marginBottom: '0' }}>Coffee Lovers</h3>
                    <p>A place where coffee junkees can enjoy peacefully their coffee.</p>
                </Stack>
                <Stack alignItems="center" style={{ padding: '5% 5% 3%' }}>
                    <DirectionsBike sx={{ fontSize:75 }}/>
                    <h3 style={{ marginBottom: '0' }}>Cyclists</h3>
                    <p>As always, cycling always goes together with great coffee.</p>
                </Stack>
                <Stack alignItems="center" style={{ padding: '5% 5% 3%' }}>
                    <Laptop sx={{ fontSize:75 }}/>
                    <h3 style={{ marginBottom: '0' }}>Developers</h3>
                    <p>A place where developers and designers can bring out their creative juices.</p>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Vision;
