import React from "react";
import CurrencyRates from "./CurrencyRates";
import {connect} from "react-redux";
import {getHistoricalRates, getLatestRates, setRates} from "../../redux/RatesReducer";

class CurrencyRatesContainer extends React.Component {
    componentWillUnmount() {
        this.props.setRates({});
    }

    render() {
        return (
            <CurrencyRates {...this.props} getLatestRates={this.props.getLatestRates}
                           getHistoricalRates={this.props.getHistoricalRates}/>
        )
    }
}

let mapStateToProps = (state) => ({
    rates: state.RatesReducer.rates,
})

export default connect(mapStateToProps, {
    getHistoricalRates,
    getLatestRates,
    setRates
})(CurrencyRatesContainer);