import React from 'react'
import axios from 'axios'
import { LogInForm } from './LogInForm'
import { login } from '../../modules/forms'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          access_token: null,
          refresh_token: null,
          userInput: {}
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = event => {
      Promise.resolve(this.props.login(this.state.userInput))
        .then(
              setTimeout(()=>console.log(this.props)
              //change location here
              , 1500)

        )
    }

    onChange = event => {
      let input = { ...this.state.userInput }
      input[event.target.name] = event.target.value
      this.setState({
        userInput: input
      })
    }

//delete this call when not testing
    componentDidMount() {
        axios.get('http://localhost:8000/').then(resp=>
          console.log('Test connection with Flask server responded with: ',resp.data))
    }

    render() {
      return (
        <div>
          <LogInForm
            onChange={this.onChange}
            onClick={this.onSubmit}/>
        </div>
      )
    }
}

const mapStateToProps = state => ({
  username: state.forms.username,
  access_token: state.forms.access_token,
  refresh_token: state.forms.refresh_token
})

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
