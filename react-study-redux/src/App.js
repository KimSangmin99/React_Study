import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByQuantity,
  selectCount,
  decrementByQuantity,
  incrementAsync,
  refrash,
} from "./app/counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementQuantity, setIncrementQuantity] = useState("2");
  const [decrementQuantity, setdecrementQuantity] = useState("2");

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>1씩 감소</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>1씩 증가</button>
      </div>
      <div>
        <input
          value={incrementQuantity}
          onChange={(e) => setIncrementQuantity(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByQuantity(Number(incrementQuantity)))
          }
        >
          씩 증가
        </button>
        <input
          value={decrementQuantity}
          onChange={(e) => setdecrementQuantity(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(decrementByQuantity(Number(decrementQuantity)))
          }
        >
          씩 감소
        </button>
        <button
          onClick={() =>
            dispatch(incrementAsync(Number(incrementQuantity) || 0))
          }
        >
          씩 증가(비동기)
        </button>
        <button onClick={() => dispatch(refrash())}>초기화</button>
      </div>
    </div>
  );
};

export default App;
