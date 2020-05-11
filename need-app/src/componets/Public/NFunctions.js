import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PublicHome from "./PublicHome";
// import fRegistration from "./Registration";
import PublicNavbar from "./PublicNavbar";
import Category from "./Category";
import supplierList from "./SupplierList";
import ViewSupplier from "./ViewSupplier"
import ViewFood from './ViewFood';
import CategoryWise from './Categorywise';


function App() {
  return (
    <Router>
      <div className="">
        <PublicNavbar />
        {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

        <Switch>
          <Route exact path={"/ngo/Home"} component={PublicHome} />
          <Route exact path={"/ngo/supplierList"} component={supplierList}/>
          <Route exact path={"/ngo/Category"} component={Category} />
          {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
          <Route path={'/ngo/viewfood'} component={ViewFood} />
          <Route path={'/ngo/categorywise'} component={CategoryWise}/>
          <Route path={'/ngo/view_supplier'} component={ViewSupplier}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
