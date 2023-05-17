const bucketItems = [
    { id: 0, text: "세계 일주 여행" },
    { id: 1, text: "스카이 다이빙" },
    { id: 2, text: "오로라 구경하기" },
    { id: 3, text: "마라톤 완주" },
];

// const List = () => {
//     const bucketList = bucketItems.map((bucketItem) => <li>{bucketItem}</li>);
//     return (
//         <>
//             <h1>버킷리스트</h1>
//             <ul>{bucketList}</ul>
//         </>
//     );
// };

const List = () => {
    const bucketList = bucketItems.map((bucketItem) => (
        <li key={bucketItem.id}>{bucketItem.text}</li>
    ));

    return (
        <>
            <h1>버킷 리스트</h1>
            <ul>{bucketList}</ul>
        </>
    );
};

export default List;