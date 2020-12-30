import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamForm extends React.Component {

    renderInput = (formProps) => {
        return (
            <div className="form-group" style={{width:"100%"}}>
                <div>{formProps.label}</div>
                <input {...formProps.input} autoComplete="off"/>
                {this.renderError(formProps.meta)}
            </div>
        );
    }

    renderError(meta){
        if(meta.touched && meta.error){
            return <div className="alert alert-danger" role="alert">{meta.error}</div>
        }
    }

    onSubmitForm = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render(){
        return (
            <form style={{margin:"20px"}} onSubmit={this.props.handleSubmit(this.onSubmitForm)}>
                <Field name="title" component={this.renderInput} label= "Enter Title"/>
                <Field name="description" component = {this.renderInput} label="Enter Description"/>
                <button className="btn btn-outline-primary">Submit</button>
            </form>
        );
    }

};

const validate = (formValues) =>{
    const errors = {};
    if(!formValues.title){
        errors.title = "You must enter a title";
    }
    if(!formValues.description){
        errors.description = "You must enter a description";
    }
    return errors;
};

const formWrapped = reduxForm({
    form: "StreamForm",
    validate
})(StreamForm);

export default formWrapped;