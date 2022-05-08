import React from "react";
import HistoricalRates from "./HistoricalRates";
import {connect} from "react-redux";
import {getHistoricalRates, setHistoricalRates} from "../../redux/HistoricalRatesReducer";
import {getLatestRates, setSymbols} from "../../redux/LatestRatesReducer";

class HistoricalRatesContainer extends React.Component {
    componentWillUnmount() {
        this.props.setHistoricalRates({});
    }

    render() {
        return (
            <HistoricalRates {...this.props} getHistoricalRates={this.props.getHistoricalRates}/>
        )
    }
}

let mapStateToProps = (state) => ({
    rates: state.HistoricalRatesReducer.historical_rates,
    symbols: state.LatestRatesReducer.symbols,
    supported_symbols: state.LatestRatesReducer.supported_symbols,
})

export default connect(mapStateToProps, {
    getHistoricalRates,
    setHistoricalRates,
    getLatestRates,
    setSymbols
})(HistoricalRatesContainer);