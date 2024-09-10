import React from 'react';
import UserTable from "./components /UserTable"
import { Container, Typography } from '@mui/material';

const App: React.FC = () => {
    return (
        <Container>
            <Typography variant="h2" align="center" gutterBottom>
                User Management System
            </Typography>
            <UserTable />
        </Container>
    );
};

export default App;
