import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// Описуємо тип для користувача
interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
}

// Початковий стан для списку користувачів
interface UsersState {
    users: User[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null
}

// Початковий стан
const initialState: UsersState = {
    users: [],
    status: 'idle',
    error: null,
}
// Асинхронна функція для завантаження користувачів з API
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data as User
})

// Створюємо slice для користувачів
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading' // Запит виконується
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User>) => {
                state.status = 'succeeded' // Запит успішний
                // @ts-ignore
                state.users = action.payload// Оновлюємо список користувачів
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message || 'Failed to fetch users';
            })
    }

})
export default usersSlice.reducer
