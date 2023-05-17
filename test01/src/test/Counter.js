import { useState } from "react";

const Counter = () => {
    const [state, setState] = useState(0);
    
    // 객체를 활용한 state 예시
    // const [area, setArea] = useState({
    //     left : 0,
    //     top : 0,
    //     width : 200,
    //     height : 100,
    // });

    // state 의 값을 바꿀 때에는 state의 값을 직접 수정해서는 안되며, useState를 통해 반환되 setState() 함수를 사용하여 수정해야한다.
    // const [left, setLeft] = useState(0);
    // //...
    // left += 20;          // 잘못된 코드

    // const [left, setLeft] = useState(0);
    // //...
    // setLeft(left + 20);  // 올바른 코드

    return (
        <div>
            <h1>State 값 : { state }</h1>
            <button onClick={() => setState(state + 1)}>클릭시 1 씩 증가</button>
            <button onClick={() => setState(state - 1)}>클릭시 1 씩 감소</button>
            <button onClick={() => setState(0)}>초기화</button>
        </div>
    );
};

export default Counter;