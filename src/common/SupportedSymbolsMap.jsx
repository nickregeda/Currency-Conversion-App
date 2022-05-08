import {connect} from "react-redux";

const SupportedSymbolsMap = (props) => {
    let supported_symbols = [];
    for (let [key, value] of Object.entries(props.supported_symbols)) {
        supported_symbols.push(`${key}: ${value}`);
    }
    let supported_symbols_option = [<option key={'empty_option'} value={''}>none</option>,
        supported_symbols.map(s => <option key={s} value={s}>{s}</option>)];
    return (
        <>
            {supported_symbols_option}
        </>
    )
}

let mapStateToProps = (state) => ({
    supported_symbols: state.RatesReducer.supported_symbols,
})

let SupportedSymbols = connect(mapStateToProps, {})(SupportedSymbolsMap);

export default SupportedSymbols;