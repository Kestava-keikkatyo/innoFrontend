import { Button, Grid } from "@material-ui/core";
import React from "react";
import { Link, Route } from "react-router-dom";
import logo from "../assets/keikka-kaveri4.png";
import AdminDatabank from "../pages/AdminPage/AdminDatabank";
import Agency from "../pages/AdminPage/Agency";
import UserCompany from "../pages/AdminPage/UserCompany";
import Users from "../pages/AdminPage/Users";

export interface AdminProps {
  path: string;
  children: any;
}

const AdminRoute: React.FC<AdminProps> = (path, children) => {
  return (


    <Route>
       <div>
      <div className="databank-top-container relative">
        <div className="databank-banner" />

        <div className="databank-logo">
          <Link to="/" style={{ height: 200 }}>
            <img src={logo} alt="keikkakaveri logo" />{' '}
          </Link>
        </div>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Button>
                <Link to="/admin/users">Käyttäjät</Link>
              </Button>
              <Button>
                <Link to="/admin/usercompany">Käyttäjäyritykset</Link>
              </Button>
              <Button>
                <Link to="/admin/agency">Vuokratyöyritykset</Link>
              </Button>
              <Button>
                <Link to="/admin/admindatabank">Tietopankki</Link>
              </Button>
              <Button>
                <Link to="">Kirjaudu ulos</Link>
              </Button>
            </Grid>
        </div>
      </div>
      <Route exact path="/admin/users" component={Users}></Route>
          <Route path="/admin/usercompany" component={UserCompany}></Route>
          <Route path="/admin/agency" component={Agency}></Route>
          <Route path="/admin/admindatabank" component={AdminDatabank}></Route>
    </Route>


  );
};



export default AdminRoute;
