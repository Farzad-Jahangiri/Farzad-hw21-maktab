import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    countacts: '[{"email":"farzad292.j@gmail.com","family":"جهانگیری","id":"09029418292","name":"فرزاد","phone_number":"09029418292","relative":"دوست"}]',
}

export const countactSlice = createSlice({
    name: "countacts",
    initialState,
    reducers: {
        addCountact: (state, action) => {
            // console.log(state.countacts);
            let data = JSON.parse(state.countacts);
            // console.log(data);
            data = [...data, action.payload];
            // console.log(data);
            state.countacts = JSON.stringify(data);
        },
        deleteCountact: (state, action) => {
            const id = action.payload;
            let data = JSON.parse(state.countacts);
            data = data.filter((item) => item.id !== id);
            state.countacts = JSON.stringify(data);
        },
        EditeCountact: (state, action) => {
            const previousId = action.payload.previousId;
            let data = JSON.parse(state.countacts);
            data = data.filter((item) => item.id !== previousId);
            const contact = {
                id: action.payload.phone_number,
                name: action.payload.name,
                family: action.payload.family,
                phone_number: action.payload.phone_number,
                relative: action.payload.relative,
                email: action.payload.email,
            };
            data = [...data, contact];
            state.countacts = JSON.stringify(data);
        }
    }
});

export const { addCountact, deleteCountact, EditeCountact } = countactSlice.actions;

export default countactSlice.reducer;