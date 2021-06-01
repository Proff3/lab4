import React from "react";
import Navigator from "./Navigator";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Accordion from "./Accordion";
import DriversTable from "./DriversTable";
import OrdersTable from "./OrdersTable";
import TrucksTable from "./TrucksTable";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Navigator></Navigator>
            <div className="wrapper">
                <Accordion></Accordion>
                <Switch>
                    <Route path="/trucks">
                        <TrucksTable></TrucksTable>
                    </Route>
                    <Route path="/orders">
                        <OrdersTable></OrdersTable>
                    </Route>
                    <Route path="/">
                        <DriversTable></DriversTable>
                    </Route>
                </Switch>
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
