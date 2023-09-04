import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import ProductPage from "./product/index";
import UploadPage from "./upload/index";
import { Button } from "antd";
import { CloudDownloadOutlined } from "@ant-design/icons";
function App() {
  const history = useHistory();
  return (
    <div className="App">
      <div id="header">
        <div id="header-area">
          <Link to={"/"}>
            <img src="/images/icons/logo.PNG" alt="" />
          </Link>
          <Button
            onClick={() => {
              history.push("/upload");
            }}
            icon={<CloudDownloadOutlined />}
            type="primary"
            size="large"
          >
            상품업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
          <Route exact={true} path="/products/:id">
            <ProductPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
