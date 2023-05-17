import { useReducer } from "react";

// 컴포넌트와 분리된 state 업데이트 로직
const reducer =(state, action) => {
    if(action.type === "increment"){
        return {
            count : state.count + 1
        };
    }else if(action.type === "dec"){
        return {
            count : state.count - 1
        };
    }
};

const Reducer = () => {
    // reducer 함수와 count의 기본값을 0으로 전달하여 state를 생성함.
    const [state, dispatch] = useReducer(reducer, { count : 0});

    return(
        <div>
            <h1>State 값 : {state.count}</h1>
            {/* dispatch 함수에 action.type 값으로 'increment'를 전달하여 리렌더링시킴 */}
            <button onClick={() => dispatch({ type : "increment"})}>클릭시 1 증가</button>
            <button onClick={() => dispatch({ type : "dec"})}>클릭시 1 감소</button>
        </div>
    );
};

export default Reducer;