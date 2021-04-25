import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import Button from '@material-ui/core/Button';

// 计算器
export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    console.log("dispatch 信息")
    console.log(dispatch)
    return (
        <div>
            <div>
                <Button variant="contained" onClick={() => dispatch(increment())}>加1</Button>
                <span>{count}</span>
                <Button variant="contained" onClick={() => dispatch(decrement())}>减1</Button>
            </div>
        </div>
    )
}