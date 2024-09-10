import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/system';

interface UserFilterProps {
    filters: {
        name: string;
        username: string;
        email: string;
        phone: string;
    };
    onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const filterBoxStyle: SxProps<Theme> = (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(3),
});
const UserFilter: React.FC<UserFilterProps> = ({ filters, onFilterChange }) => (
    <Box sx={filterBoxStyle}>
        <TextField
            label="Name"
            name="name"
            value={filters.name}
            onChange={onFilterChange}
            margin="normal"
            variant="outlined"
            fullWidth
        />
        <TextField
            label="Username"
            name="username"
            value={filters.username}
            onChange={onFilterChange}
            margin="normal"
            variant="outlined"
            fullWidth
        />
        <TextField
            label="Email"
            name="email"
            value={filters.email}
            onChange={onFilterChange}
            margin="normal"
            variant="outlined"
            fullWidth
        />
        <TextField
            label="Phone"
            name="phone"
            value={filters.phone}
            onChange={onFilterChange}
            margin="normal"
            variant="outlined"
            fullWidth
        />
    </Box>
);

export default UserFilter;
