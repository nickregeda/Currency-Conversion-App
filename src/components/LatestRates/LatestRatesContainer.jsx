import LatestRates from "./LatestRates";
import {connect} from "react-redux";
import {getLatestRates} from "../../redux/LatestRatesReducer";

let mapStateToProps = (state) => {
    return {
        supported_symbols: state.LatestRatesReducer.supported_symbols,
        symbols: state.LatestRatesReducer.symbols,
    }
}

export default connect(mapStateToProps, {getLatestRates})(LatestRates);