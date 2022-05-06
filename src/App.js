import {Routes, Route} from 'react-router-dom';
import './App.css';
import HistoricalRates from "./components/HistoricalRates/HistoricalRates";
import Navbar from "./components/Navbar/Navbar";
import {useEffect} from "react";
import {getSupportedSymbols} from "./redux/LatestRatesReducer";
import {connect} from "react-redux";
import LatestRatesContainer from "./components/LatestRates/LatestRatesContainer";
import ConvertContainer from "./components/Convert/ConvertContainer";

function App(props) {
    useEffect(
        () => {
            return props.getSupportedSymbols();
        },)

    return (
        <div className="container">
            <Navbar/>
            <Routes>
                <Route path={'/latest-rates'} element={<LatestRatesContainer/>}/>
                <Route path={'/historical-rates'} element={<HistoricalRates/>}/>
                <Route path={'/convert'} element={<ConvertContainer/>}/>
            </Routes>
        </div>
    );
}

export default connect(null, {getSupportedSymbols})(App);
