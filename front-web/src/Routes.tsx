import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Orders from "./Pages/Orders";

function Routes() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/orders">
                    <Orders/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;