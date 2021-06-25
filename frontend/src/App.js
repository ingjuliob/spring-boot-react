/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ReprintModule from './components/reprintModule/reprintModule';
import DischargeModule from './components/dischargeModule/dischargeModule';

function App() {

  console.log("URL");
  console.log(`${process.env.PUBLIC_URL}`);
  console.log(`${process.env.NODE_ENV}`);

  return (
    <Router basename={'/transaccional'}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/reprint/1509090912980128785211/ReimprimirTarjeta/DNI/10266305/BRINGIOTTI,%20MANUEL/Email/B/P/34/2/955/041/43275857/BANCA/Email/Email/4517610097274041`}>Reimpresión Común de Tarjeta Banelco</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/reprint/1509090912980128785211/ReimprimirDiferida/DNI/10266305/BRINGIOTTI,%20MANUEL/Email/B/P/34/2/955/041/43275857/BANCA/Email/Email/4517610097274041`}> Reimpresión Diferida de Tarjeta Banelco</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/discharge/1509090912980128785211/BajaBanelco/DNI/10266305/BRINGIOTTI,%20MANUEL/Email/B/P/34/2/955/041/43275857/BANCA/Email/Email/4517610097274041`}> Baja de Tarjeta Banelco</Link>
            </li>
          </ul>
        </nav>

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