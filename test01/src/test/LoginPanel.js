// const Button = ({ name, isLoggedIn }) => {
//     if (isLoggedIn) {
//       return null;
//     }
//     return <button>{name}</button>;
//   };

//   const Button = ({ name, isLoggedIn }) => {
//     return isLoggedIn ? null : <button>{name}</button>;
//   }

const Button = ({ name, isLoggedIn }) => {
  return !isLoggedIn && <button>{name}</button>;
};
const LoginPanel = () => {
  return (
    <>
      <Button isLoggedIn={false} name="Login" />
      <Button isLoggedIn={true} name="Logout" />
    </>
  );
};

export default LoginPanel;
