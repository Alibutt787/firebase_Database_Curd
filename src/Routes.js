import React from "react";
import "./App.css";
import { Friends } from "./friend";
import { Contect } from "./Contect";
import { Switch, Route } from "react-router-dom";
import { MyPics } from "./MyPics";
import { Admin } from "./Admin";
import { Home } from "./Home";
import { PageNotFound } from "./404";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Admin" component={Admin} />
        <Route exact path="/frd" component={Friends} />
        <Route exact path="/pics" component={MyPics} />
        <Route path="/Contact" component={Contect} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </>
  );
};
