const RatesMap = (props) => {
    let rates = [];
    if (props.rates) {
        for (let [key, value] of Object.entries(props.rates)) {
            rates.push(`${key}: ${value}`);
        }
    }
    let rates_elements = rates.map(r => <div key={r}>{r}</div>)

    return <>{rates_elements}</>
}

export default RatesMap;