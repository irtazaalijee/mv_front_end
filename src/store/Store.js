import { configureStore } from "@reduxjs/toolkit";
import navigetFeature from "../features/user slice/NavigationSlice";
export const Store = configureStore({
    reducer:{
        navigationSlice : navigetFeature
    }
}) 

// export const store = configureStore(Store)

