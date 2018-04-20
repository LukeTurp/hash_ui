import React from 'react'
import axios from 'axios'
import { LogInForm } from './LogInForm'
import login from '../../modules/forms'
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
    }

    componentDidMount() {
        axios.get('http://localhost:8000/').then(resp=>
          console.log('Test connection with Flask server responded with: ',resp.data))
    }

    onSubmit = event => {
      axios.post('http://127.0.0.1:8000/api/v1/user/auth', this.state.userInput)
        .then(resp=>{
          console.log(resp)
          this.setState({
            access_token: resp.data.access_token,
            refresh_token: resp.data.refresh_token
          })
        }, err=>console.error(err))
    }

    onChange = event => {
      let input = { ...this.state.userInput }
      input[event.target.name] = event.target.value
      this.setState({
        userInput: input
      }, ()=>console.log(this.state))
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
  credentials: state.credentials
})

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
