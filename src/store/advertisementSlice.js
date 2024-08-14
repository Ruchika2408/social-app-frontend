import { createSlice } from "@reduxjs/toolkit";

const advertisementSlice = createSlice({
    name: 'advertisement',
    initialState: {
      advertisements: [],
      currentAdvertisement: {
        email: '',
        title: "",
        description: "",
        imgUrl: "",
        time: "",
      },
    },
    reducers: {
      setAdvertisements: (state, action) => {
        state.advertisements = action.payload
      },
      setCurrentAdvertisement: (state,action) => {
        state.currentAdvertisement = action.payload
      }
    }
})

export const {setAdvertisements, setCurrentAdvertisement} = advertisementSlice.actions;
export default advertisementSlice.reducer;