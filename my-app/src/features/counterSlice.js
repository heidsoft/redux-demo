import { createSlice } from '@reduxjs/toolkit'

// 计数器参数
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        // 初始化状态
        value: 0,
    },
    reducers: {
        // 增加
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        // 减少
        decrement: (state) => {
            state.value -= 1
        }
    },
})

console.log("counterSlice 对象");
console.log(counterSlice);
console.log("counterSlice Action对象");
console.log(counterSlice.actions);

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer