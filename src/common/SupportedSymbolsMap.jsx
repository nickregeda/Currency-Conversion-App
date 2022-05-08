import {connect} from "react-redux";

const supportedSymbolsMap = (props) => {
    let supported_symbols = [];
    for (let [key, value] of Object.entries(props.supported_symbols)) {
        supported_symbols.push(`${key}: ${value}`);
    }
    let supported_symbols_option = [<option style={{display: "none"}}
                                            key={'empty_option'}></option>, supported_symbols.map(s =>
        <option key={s} value={s}>{s}</option>)];
    return (
        <div>
            {supported_symbols_option}
        </div>
    )
}

let mapStateToProps = (state) => ({
    supported_symbols: state.LatestRatesReducer.supported_symbols,
})

export default connect(mapStateToProps, {})(supportedSymbolsMap);