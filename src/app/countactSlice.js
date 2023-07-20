import { createSlice } from '@reduxjs/toolkit';

const saveDataToLocalStorage = (key, data) => {
    localStorage.setItem(key, data);
};

const readDataFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    if (data){
        return data
    }
    return '[]';
};

const initialState = {
    countacts: readDataFromLocalStorage("contactsData"),
}

export const countactSlice = createSlice({
    name: "countacts",
    initialState,
    reducers: {
        addCountact: (state, action) => {
            let data = JSON.parse(state.countacts);
            data = [...data, action.payload];
            state.countacts = JSON.stringify(data);
            saveDataToLocalStorage("contactsData",JSON.stringify(data));
        },
        deleteCountact: (state, action) => {
            const id = action.payload;
            let data = JSON.parse(state.countacts);
            data = data.filter((item) => item.id !== id);
            state.countacts = JSON.stringify(data);
            saveDataToLocalStorage("contactsData",JSON.stringify(data));
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