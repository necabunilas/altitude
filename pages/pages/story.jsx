import React from 'react';
import { Stack } from '@mui/material';

const Story = () => {
    return (
        <Stack
            sx={{
                backgroundColor: '#442727',
                color: '#8f8f8f',
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
                Our Story
            </h2>
            <p 
                style={{ margin: '3% 15%' }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </Stack>
    );
};

export default Story;
