import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FilterState } from "../../types";

const initialState: FilterState = {
    isFilterOpen: false,
    filterStartYear: 1900,
    filterEndYear: new Date().getFullYear(),
    filterStartRuntime: 30,
    filterEndRuntime: 999,
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setIsFilterOpen: (state, action: PayloadAction<boolean>) => {
            state.isFilterOpen = action.payload;
        },
    },
});

export const { setIsFilterOpen } = filterSlice.actions;

export default filterSlice.reducer;
