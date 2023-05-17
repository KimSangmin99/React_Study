import React, { useState, useRef, useEffect } from "react";

const UseEffect = () => {
    const [state, setState] = useState("");
    // 호출 횟수를 체크하기 위한 ref 생성
    let ref = useRef(0);

    // 컴포넌트가 가장 처음 렌더링 될 때만 setup 함수 실행
    useEffect(() => {
        ref.current = ref.current + 1;
        console.log(`setup 함수 실행(${ref.current})`);
        console.log({state});
        return () => {
            console.log(`cleanup 함수 실행(${ref.current})`);
        }
    }, [state]);

    const onChange = (e) => {
        setState(e.target.value);
    };

    return (
        <>
          ✔ 입력 필드 : &nbsp;
          {/* 입력 필드에 텍스트를 입력할 때마다 onChange 이벤트가 발생함 */}
          <input value={state} onChange={onChange} />
          <br />
          ️✔ 입력된 텍스트 : {state}
        </>
      );
};

export default UseEffect;

