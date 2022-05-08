import {Form, Field, Formik, ErrorMessage} from "formik";
import ConvertFormSchema from "../../validationForms/ConvertFormSchema";
import s from './Convert.module.css'
import {useState} from "react";
import SupportedSymbols from "../../common/SupportedSymbolsMap";

export const ConvertForm = (props) => {
    return (
        <Form className={s.form}>
            <div className={s.fields}>
                <div className={s.field_container}>
                    <label htmlFor='value_from'>From</label>
                    <Field className={s.field} as={'select'} name={'value_from'}>
                        <SupportedSymbols/>
                    </Field>
                    <ErrorMessage className={s.error_mes} name={'value_from'} component={'div'}/>
                </div>
                <div className={s.field_container}>
                    <label htmlFor='value_to'>To</label>
                    <Field className={s.field} as={'select'} name={'value_to'}>
                        <SupportedSymbols/>
                    </Field>
                    <ErrorMessage className={s.error_mes} name={'value_to'} component={'div'}/>
                </div>
                <div className={s.field_container}>
                    <label htmlFor="amount">Amount of {props.value_from}</label>
                    <Field className={s.field_amount} type={'text'} name={'amount'} autoComplete={'off'}/>
                    <ErrorMessage className={s.error_mes} name={'amount'} component={'div'}/>
                </div>
            </div>
            <button className={s.button}>Submit</button>
        </Form>
    )
}

const Convert = (props) => {
    const [value_to, setValueTo] = useState();
    const [value_from, setValueFrom] = useState();

    let onSubmit = (values) => {
        let symbols = Object.values(values).map(s => s.substr(0, 3));
        let value_from = symbols[0];
        setValueFrom(value_from);
        let value_to = symbols[1];
        setValueTo(value_to);
        let amount = symbols[2];
        props.getConvertRate(value_from, value_to, amount)
    }

    return (
        <div className={s.container}>
            <Formik
                initialValues={{value_from: '', value_to: '', amount: ''}}
                validationSchema={ConvertFormSchema}
                onSubmit={onSubmit}
            >
                {({vales}) => {
                    return <ConvertForm value_from={value_from}/>
                }}
            </Formik>
            <div className={s.result}>
                {props.result_rate && props.result_rate !== 0 ? props.result_rate + ' ' + value_to : null}
            </div>
        </div>
    )
}
export default Convert;