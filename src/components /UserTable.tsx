import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store'
import { fetchUsers } from '../features/users/userSlice'

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import UserFilter from './UserFilter';
import UserCard from './UserCard';
import { Grid } from '@mui/material';

const UserTable: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { users, status, error } = useSelector((state: RootState) => state.users);

    const [filters, setFilters] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [dispatch, status]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
        user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
        user.phone.toLowerCase().includes(filters.phone.toLowerCase())
    );

    if (status === 'loading') return <Typography variant="h6" color="textSecondary">Loading...</Typography>;
    if (status === 'failed') return <Typography variant="h6" color="error">{error}</Typography>;

    return (
        <Container>
            <UserFilter filters={filters} onFilterChange={handleFilterChange} />

            <Grid container spacing={2}>
                {filteredUsers.map(user => (
                    <Grid item xs={12} sm={6} md={4} key={user.id}>
                        <UserCard
                            name={user.name}
                            username={user.username}
                            email={user.email}
                            phone={user.phone}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default UserTable;
