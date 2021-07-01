/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ReprintModule from './components/reprintModule/reprintModule';
import DischargeModule from './components/dischargeModule/dischargeModule';

function App() {

  return (
    <Router basename={'/sactran'}>
      <div>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/reprint/:operationId/:option/:documentType/:documentNumber/:businessName/:contactModeCode/:productCode/:causeCode/:reasonCode/:companyCode/:responsibleSector/:registerSector/:user/:origin/:initContact/:closeContact/:productNumber`} component={Reprint} />
          <Route path={`${process.env.PUBLIC_URL}/discharge/:operationId/:option/:documentType/:documentNumber/:businessName/:contactModeCode/:productCode/:causeCode/:reasonCode/:companyCode/:responsibleSector/:registerSector/:user/:origin/:initContact/:closeContact/:productNumber`} component={Discharge} />
        </Switch>
      </div>
    </Router>
  );
}

export default App

function Reprint() {
  return <ReprintModule></ReprintModule>;
}

function Discharge() {
  return <DischargeModule></DischargeModule>;
}