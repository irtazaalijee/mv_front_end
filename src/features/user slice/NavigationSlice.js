import { createSlice } from "@reduxjs/toolkit";

const vendorRef = localStorage.getItem('vendorRef')

const initialState = {navigateScreen:'Dashboard',vendorRef :vendorRef !== null ? vendorRef:''  }


const NavigationSlice = createSlice({
  name: 'navigationSlice',
  initialState,
  reducers : {
    changeNavigationScreen : (state,action) =>{
        state.navigateScreen = action.payload;
    },
    getVendorRef : (state , action) => {

    }
  }
})
export const {changeNavigationScreen} = NavigationSlice.actions;

export default NavigationSlice.reducer;