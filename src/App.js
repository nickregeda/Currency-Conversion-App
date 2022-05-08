import {Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {useEffect} from "react";
import {getSupportedSymbols} from "./redux/RatesReducer";
import {connect} from "react-redux";
import ConvertContainer from "./components/Convert/ConvertContainer";
import CurrencyRatesContainer from "./components/CurrencyRates/CurrencyRatesContainer";

function App(props) {
    useEffect(
        () => {
            return props.getSupportedSymbols();
        },)

    return (
        <div className="container">
            <Navbar/>
            <Routes>
                <Route path={'/currency-rates'} element={<CurrencyRatesContainer/>}/>
                <Route path={'/convert'} element={<ConvertContainer/>}/>
            </Routes>
        </div>
    );
}

export default connect(null, {getSupportedSymbols})(App);
