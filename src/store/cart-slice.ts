import {createSlice, type PayloadAction} from '@reduxjs/toolkit';


type CartItem = {
    id: string;
    title: string;
    price: number;
    quantity: number;
}
type CartState = {
    items: CartItem[]
}

const initialState: CartState = {
    items: []
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart( state, action: PayloadAction<{ id: string; title: string; price: number}> ){
            const itemIndex = state.items.findIndex( (item) => item.id === action.payload.id );
            // if itemIndex have found, add quantity
            if(itemIndex > 0){
                state.items[itemIndex].quantity++;
            }else{
                state.items.push({...action.payload, quantity: 1})
            }
        },
        removeFromCart(state, action: PayloadAction<{id: string}>){
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);

            // if found item quantity is 1 , remove the item
            if(state.items[itemIndex].quantity === 1){
                state.items.splice(itemIndex, 1);
            }else{
                // only deduct quantity --
                state.items[itemIndex].quantity--;

            }
        }
    }
});