import { useState } from "react";

const Listcomp = () => {
  const [items, setItems] = useState([
    { id: 0, name: "세계 일주 여행" },
    { id: 1, name: "스카이 다이빙" },
    { id: 2, name: "오로라 구경하기" },
    { id: 3, name: "마라톤 완주" },
  ]);

  const [inputText, setValue] = useState("");
  const [id, setId] = useState(4);

  const onChange = (e) => setValue(e.target.value);

  const onClick = () => {
    const newItems = items.concat({
      id: id,
      name: inputText,
    });

    setItems(newItems);
    setId(id + 1);
    setValue("");
  };
  const onRemove = (id) => {
    const newItems = items.filter((name) => name.id !== id);
    setItems(newItems);
  };
  const mRemove = (id) => {
    const newItems = items.filter((name) => name.id == id);
    setItems(newItems);
    alert("삭제 완료 ! ");
  }
  const bucketList = items.map((item) => (
    <li
      key={item.id}
      onContextMenu={(e) => {
        e.preventDefault();
        onRemove(item.id);
      }}>{item.name}</li>
  ));
  return (
    <>
      <h1>버킷리스트</h1>
      <p>-우클릭 시 내용 삭제-</p><br/>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가하기</button>
      <button onClick={mRemove}>초기화</button>
      <ul>{bucketList}</ul>
    </>
  );
};

export default Listcomp;
