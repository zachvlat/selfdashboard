import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import MediaCard from './MediaCard';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const appsData = [
    {
        title: 'Nextcloud',
        description: 'Nextcloud is a suite of client-server software for creating and using file hosting services.',
        image: 'https://duckduckgo.com/i/4597dac5.png',
        url: 'https://nextcloud.zatspi.duckdns.org',
    },
    {
        title: 'Jellyfin',
        description: 'Jellyfin is a free and open-source media server and suite of multimedia applications designed to organize, manage, and share digital media files to networked devices.',
        image: 'https://duckduckgo.com/i/6023242f.png',
        url: 'https://jellyfin.zatspi.duckdns.org',
    },
    {
        title: 'Vaultwarden',
        description: 'Unofficial Bitwarden compatible server written in Rust, formerly known as bitwarden_rs.',
        image: 'https://duckduckgo.com/i/ea6441be.png',
        url: 'https://bitwarden.zatspi.duckdns.org',
    },
    {
        title: 'HomeAssistant',
        description: 'Open source home automation that puts local control and privacy first.',
        image: 'https://design.home-assistant.io/images/brand/logo.png',
        url: 'http://192.168.1.111:8999',
    },
    {
        title: 'FileBrowser',
        description: 'filebrowser provides a file managing interface within a specified directory and it can be used to upload, delete, preview, rename and edit your files.',
        image: 'https://raw.githubusercontent.com/filebrowser/logo/master/banner.png',
        url: 'https://files.zatspi.duckdns.org',
    },
];

export default function DirectionStack() {
    return (
        <div>
            <Stack direction="row" spacing={2}>
                {appsData.map((app, index) => (
                    <MediaCard key={index} appData={app} />
                ))}
            </Stack>
        </div>
    );
}