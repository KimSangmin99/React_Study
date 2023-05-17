import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import NewsData from "./components/NewsData";
import Menu from "./components/Menu";
import NoMatch from "./components/NoMatch";
import Login from "./components/Login";
import MyAccount from "./components/MyAccount";


function App() {
  return (
    <div>
      <h1>React Router</h1>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="news/:newsId" element={<NewsData />} />
          <Route path="login" element={<Login />} />
          <Route path="myaccount" element={<MyAccount />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
