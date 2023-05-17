import { Navigate } from "react-router-dom";

const MyAccount = () => {
  let isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return <div>나의 계정 페이지에 오신 것을 환영합니다!</div>;
};

export default MyAccount;