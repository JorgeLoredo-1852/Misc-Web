import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderInput(formProps){
        return (
            <div className="form-group">
                <div>{formProps.label}</div>
                <input {...formProps.input}/>
            </div>
        );
    }

    render(){
        return (
            <form style={{margin:"20px"}}>
                <Field name="Title" component={this.renderInput} label= "Enter Title"/>
                <Field name="Description" component = {this.renderInput} label="Enter Description"/>
            </form>
        );
    }
};

export default reduxForm({
    form: "StreamCreate"
})(StreamCreate);