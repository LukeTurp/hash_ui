import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';

export const LogInForm = (props) => {
    return (
        <div>
            <TextField
                floatingLabelText='Username'
                onChange={props.onChange}
                name='username' />
                <br />
            <TextField
                floatingLabelText='Password' 
                type='password' 
                onChange={props.onChange}
                name='password' />
                <br />
                <br />
            <RaisedButton 
            label="Submit" 
            primary={true}
            onClick={props.onClick} />
        </div>
    )
}
