import { createSlice } from "@reduxjs/toolkit";




const vendorReference = localStorage.getItem('vendorRef')

const initialState = {vendorRef : vendorReference !== null ? vendorReference:''}

const vendorRef = createSlice(
    {
        name : 'vendorRef',
        initialState,
        reducers: {

        }
    }
)

export const {} = vendorRef.actions 
export default vendorRef