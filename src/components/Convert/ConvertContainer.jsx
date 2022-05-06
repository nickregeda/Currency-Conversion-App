import {connect} from "react-redux";
import Convert from "./Convert";
import {getConvertRate, setRate} from "../../redux/ConvertReducer";
import React from "react";

class ConvertContainer extends React.Component {
    componentWillUnmount() {
        this.props.setRate(0);
    }

    render() {
        return (
            <Convert {...this.props} getConvertRate={this.props.getConvertRate}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        result_rate: state.ConvertReducer.result_rate,
        supported_symbols: state.LatestRatesReducer.supported_symbols,
    }
}

export default connect(mapStateToProps, {getConvertRate, setRate})(ConvertContainer)