/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import ReprintModule from './components/reprintModule/reprintModule';
import DischargeModule from './components/dischargeModule/dischargeModule';
import ResetPinModule from './components/resetPinModule/resetPinModule';
import CloseChangeModule from './components/closeChangeModule/closeChangeModule';

function App() {

  return (
    <Router basename={'/sactran'}>
      <div>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/reprint/:operationId/:option/:documentType/:documentNumber/:businessName/:contactModeCode/:productCode/:causeCode/:reasonCode/:companyCode/:responsibleSector/:registerSector/:user/:origin/:initContact/:closeContact/:productNumber`} component={Reprint} />
          <Route path={`${process.env.PUBLIC_URL}/discharge/:operationId/:option/:documentType/:documentNumber/:businessName/:contactModeCode/:productCode/:causeCode/:reasonCode/:companyCode/:responsibleSector/:registerSector/:user/:origin/:initContact/:closeContact/:productNumber`} component={Discharge} />
          <Route path={`${process.env.PUBLIC_URL}/resetPin/:operationId/:option/:documentType/:documentNumber/:businessName/:contactModeCode/:productCode/:causeCode/:reasonCode/:companyCode/:responsibleSector/:registerSector/:user/:origin/:initContact/:closeContact/:productNumber`} component={ResetPin} />
          <Route path={`${process.env.PUBLIC_URL}/closeChange/:operationId/:option/:documentType/:documentNumber/:businessName/:contactModeCode/:productCode/:causeCode/:reasonCode/:companyCode/:responsibleSector/:registerSector/:user/:origin/:initContact/:closeContact/:productNumber`} component={CloseChange} />
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

function ResetPin() {
  return <ResetPinModule></ResetPinModule>;
}

function CloseChange() {
  return <CloseChangeModule></CloseChangeModule>;
}