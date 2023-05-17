import { useState, useMemo } from "react";

// Todo를 30개를 랜덤으로 생성함
const randomTodos = () => {
    const todos = [];
    for (let i = 0; i < 30; i++){
        todos.push({
            id: i,
            text: `Todo ${i + 1}`,
            completed: Math.random() > 0.5
        });
    }
    console.log(todos);
    return todos;
};

const todos = randomTodos();

// 필터 기능 구현
const filterTodos = (todos, tab) => {
    let startTime = performance.now();
    while (performance.now() - startTime < 200) {
      // while (performance.now() - startTime < 300) {
      // 굉장히 많은 연산으로 느려지는 코드를 시뮬레이션 하기 위해서 300ms를 아무것도 하지 않는 코드
      // 하지만 codesandbox 정책 상 10,000번 이상의 반복문이 되어 에러를 발생시킴.
      // 따라서 이 코드를 로컬에서 실행시킬 때는 startTime < 500으로 수정하여 테스트할 것.
    }
    return todos.filter((todo) => {
        if(tab === "completed"){
            return todo.completed;
        }else if(tab === "incompleted"){
            return !todo.completed;
        }
        return true;
    });
};

const TodoList = ({ todos, tab}) => {
    // todos와 tab이 변경될 때만 filterTodos() 함수를 호출하여 값을 재연산함
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  return (
    <ul>
      {visibleTodos.map((todo) => (
        <li key={todo.id}>{todo.completed ? <s>{todo.text}</s> : todo.text}</li>
      ))}
    </ul>
  );
};

const PerformanceHook = () => {
    const [tab, setTab] = useState("all");
    return(
        <>
            Filter : 
            <button onClick={() => setTab("all")}>모두</button>
            <button onClick={() => setTab("incompleted")}>미완료</button>
            <button onClick={() => setTab("completed")}>완료</button>
            <TodoList todos={todos} tab={tab}/>
        </>
    );
};

export default PerformanceHook;