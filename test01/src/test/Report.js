const Report = () => {
    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            alert("제출중입니다.");
        }}>
            <input/>
            <button>제출하기</button>
        </form>
    );
};

export default Report;