import Test01 from "./test/Test01";
import { Test02, Test021 } from "./test/Test02";
import { GetBrand, GetOS } from "./test/Laptop";
import Counter from "./test/Counter";
import ControlPanel from "./test/ControlPanel";
import Area from "./test/Area";
import Report from "./test/Report";
import LoginPanel from "./test/LoginPanel";
import LoginPanel01 from "./test/LoginPanel01";
import List from "./test/List";
import Listcomp from "./test/Listcomp";
import Reducer from "./test/Reducer";
import Theme from "./test/Theme";
import VideoPlayer from "./test/RefHook";
import UseEffect from "./test/UseEffect";
import PerformanceHook from "./test/PerformanceHook";
import "./App.css";

const Laptop = ({ brand, os }) => {
  return (
    <>
      <h1>내 노트북은 {brand} 노트북입니다.</h1>
      <h1>내 노트북 OS는 {os} 입니다.</h1>
    </>
  );
};

Laptop.defaultProps = {
  brand: "LG",
  os: "Linux",
};

const Wrapper = (props) => {
  return <h1>자식 엘리먼트의 갯수는 {props.children.length} 개 입니다.</h1>;
};

const App = () => {
  return (
    <>
      <Counter /><br/>
      <Area /><br/>
      <ControlPanel/><br/>
      <Report/><br/>
      <LoginPanel/><br/>
      <LoginPanel01/><br/>
      <List/><br/>
      <Listcomp/><br/>
      <Reducer/><br/>
      <Theme/><br/>
      <VideoPlayer/><br/>
      <UseEffect/><br/>
      <PerformanceHook/><br/>
    </>
  );
};

export default App;
