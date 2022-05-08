import s from './RatesForm.module.css';
import {ErrorMessage, Field, Form} from "formik";
import SupportedSymbols from "../SupportedSymbolsMap";
import moment from "moment";

const RatesForm = (props) => {
    let onClick = () => {
        if (props.date_option) { // it means that the value at the moment of click was true (so after onClick it will be changed to false)
            props.setFieldValue('date', '');
        }
    }

    // moment.HTML5_FMT.DATE
    const current_date = moment().format('YYYY-MM-DD');
    console.log(current_date)
    return (
        <Form className={s.form}>
            <div className={s.date_option}>
                <Field onClick={onClick} className={s.date_checkbox} type={'checkbox'} name={'date_checkbox'}/>
                <label className={s.label_checkbox} htmlFor="{'date_checkbox'}">Date</label>
            </div>
            {props.date_option &&
                <div className={s.field_container}>
                    <Field name={'date'} type={'date'} max={`${current_date}`}/>
                    <ErrorMessage className={s.error_mes} name={'date'} component={'div'}/>
                </div>
            }
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
        </Form>
    )
}

export default RatesForm;