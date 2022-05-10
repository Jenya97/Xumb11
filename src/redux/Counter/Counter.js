const counter={
    count:0,
}

export const INCREMENT='INCREMENT';
export const ASYNC_INCREMENT='ASYNC_INCREMENT';
export const DECREMENT='DECREMENT';
export const ASYNC_DECREMENT='ASYNC_DECREMENT';


export default function countReducer(state=counter,action){
     switch(action.type){
         case INCREMENT:
             return {...state,count:state.count+1}
         case DECREMENT:
            return {...state,count:state.count-1}
            default:
                return state
     }
}


export const incrementCreate=()=>(
    {
        type:INCREMENT
    }
)
export const asyncIncrementCreate=()=>(
    {
        type:ASYNC_INCREMENT
    }
)
export const decrementCreate=()=>(
    {
        type:DECREMENT
    }
)
export const asyncDecrementCreate=()=>(
    {
        type:ASYNC_DECREMENT
    }
)