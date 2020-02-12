import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";
 import "antd/dist/antd.css";
import Head from "./components/container/Head";
import Index from "./components/Index/Index";
import Shop from "./components/Shop/shop";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
  return (

    <Router>
      <Layout style={{ backgroundColor: "rgba(182,215,222,0.8)" }}>
        <Header
          style={{
            backgroundColor: "rgba(255,255,255, 0.8)",
            zIndex: 1,
            width: "100%"
          }}
        >
          <div style={{ float: "left" }}> 这里是LOGO</div>
          <Head />
        </Header>
        <Content style={{ paddingTop: "64px", minHeight: "700px" }}>
          <Route exact path="/" component={Index} />
          {/* <Route path="/cart" component={Cart}/> */}
          <Route path="/shop" component={Shop} />
          {/* <Route path="/user:id" component={User} /> */}
          <Redirect from="*" to="/" />
        </Content>

        <Footer style={{ textAlign: "center" }}>Jacky©2020</Footer>
      </Layout>
    </Router>
  );
}

export default App;
