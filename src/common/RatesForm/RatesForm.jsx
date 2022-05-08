import s from "../components/LatestRates/LatestRates.module.css";
import {ErrorMessage, Field} from "formik";
import SupportedSymbols from "./SupportedSymbolsMap";

const RatesForm = (props) => {
    return (
        <>
            <div className={s.field_container}>
                <label htmlFor='base'>Base currency</label>
                <Field className={s.field} name={'base'} as={'select'}>
                    <SupportedSymbols/>
                </Field>
                <ErrorMessage className={s.error_mes} name={'base'} component={'div'}/>
            </div>
            <div className={s.field_container}>
                <label htmlFor='symbol1'>Currency №1</label>
                <Field className={s.field} name={'symbol1'} as={'select'}>
                    <SupportedSymbols/>
                </Field>
                <ErrorMessage className={s.error_mes} name={'symbol1'} component={'div'}/>
            </div>
            <div className={s.field_container}>
                <label htmlFor='symbol2'>Currency №2</label>
                <Field className={s.field} name={'symbol2'} as={'select'}>
                    <SupportedSymbols/>
                </Field>
                <ErrorMessage className={s.error_mes} name={'symbol2'} component={'div'}/>
            </div>
            <div className={s.field_container}>
                <label htmlFor='symbol3'>Currency №3</label>
                <Field className={s.field} name={'symbol3'} as={'select'}>
                    <SupportedSymbols/>
                </Field>
                <ErrorMessage className={s.error_mes} name={'symbol3'} component={'div'}/>
            </div>

            <button className={s.button}>Submit</button>
        </>
    )
}

export default RatesForm;