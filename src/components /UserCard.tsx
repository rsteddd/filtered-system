import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/system';

interface UserCardProps {
    name: string;
    username: string;
    email: string;
    phone: string;
}

const cardStyle: SxProps<Theme> = (theme) => ({
    marginBottom: theme.spacing(2),
    transition: '0.3s',
});

const UserCard: React.FC<UserCardProps> = ({ name, username, email, phone }) => (
    <Card sx={cardStyle}>
        <CardContent>
            <Typography variant="h6">{name}</Typography>
            <Typography color="textSecondary">{username}</Typography>
            <Typography color="textSecondary">{email}</Typography>
            <Typography color="textSecondary">{phone}</Typography>
        </CardContent>
    </Card>
);

export default UserCard;
