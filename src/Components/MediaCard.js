import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert } from '@mui/material';

export default function MediaCard({ appData }) {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    const handleGoButtonClick = () => {

        if (isOnline) {
            window.open(appData.url, '_blank');
        } else {
            console.log('The browser is offline.');
        }
    };

    React.useEffect(() => {
        const handleOnlineStatusChange = () => {
            setIsOnline(navigator.onLine);
        };

        window.addEventListener('online', handleOnlineStatusChange);
        window.addEventListener('offline', handleOnlineStatusChange);
        return () => {
            window.removeEventListener('online', handleOnlineStatusChange);
            window.removeEventListener('offline', handleOnlineStatusChange);
        };
    }, []);

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardMedia sx={{ height: 140 }} image={appData.image} title={appData.title} />
            <CardContent sx={{ flex: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {appData.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {appData.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleGoButtonClick}>
                    GO
                </Button>
            </CardActions>
            <Alert sx={{ marginTop: 'auto' }} severity={isOnline ? 'success' : 'error'}>
                {isOnline ? 'Online' : 'Offline'}
            </Alert>
        </Card>
    );
}
