import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Signup.actions';


//use test simplification if you run into errors. previous error * resulted in spelling error because Component was spelled wrong which would display superstate because couldnt' define state
class Signup extends React.Component {

  render() {
    return(
      <div>
        <div>
          <h1> Sign up </h1>
          <div>
            <label>Username</label><br/>
            <input onChange={(event) => this.props.changeUsername(event.target.value)} type="text" value={this.props.username}/>
          </div>
          <div>
            <label> Email </label><br/>
            <input onChange={(event) => this.props.changeEmail(event.target.value)} type="text" value={this.props.email}/>
          </div>
          <div>
            <label> First Name </label><br/>
            <input onChange={(event) => this.props.changeFirstName(event.target.value)} type="text" value={this.props.first_name}/>
          </div>
          <div>
            <label> Last Name </label><br/>
            <input onChange={(event) => this.props.changeLastName(event.target.value)} type="text" value={this.props.last_name}/>
          </div>
          <div>
            <label> password </label><br/>
            <input onChange={(event) => this.props.changePassword(event.target.value)} type="text" value={this.props.password}/>
          </div>
          <div>
            <label> password confirmation </label><br/>
            <input onChange={(event) => this.props.changeConfirmation(event.target.value)} type="text" value={this.props.confirmation}/>
          </div>
          <button onClick={() => this.props.savePage(this.props.username, this.props.email, this.props.password, this.props.first_name, this.props.last_name)}>Submit</button>
        </div>
      </div>
    );
  }
}

// a === b ? c:d

const SignupContainer = ReactRedux.connect(
  state => state.signup,
  actions
)(Signup);

export default SignupContainer;
