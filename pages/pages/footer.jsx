import React from 'react';
import { Stack } from '@mui/material';
import { Facebook, Email, Instagram } from '@mui/icons-material/';

const Footer = () => {
    return (
        <Stack
            alignItems='center'
            justifyContent='center'
            style={{
                backgroundColor: '#6C7351',
                padding: '7% 15%'
            }}
        >
            <Stack
                direction={'row'}
                alignItems='center'
                justifyContent='space-evenly'
                spacing='2'
                width='250px'
            >
                <Facebook style={{ margin: '2% 1%' }} />
                <Email style={{ margin: '2% 1%' }} />
                <Instagram style={{ margin: '2% 1%' }} />
            </Stack>
            <p>© Copyright 2021 Altitude Coffee</p>
        </Stack >
    );
};

export default Footer;
