import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UsersList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return (
      <div className="card card-block" key={user.id}>
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <a href={`mailto:${user.email}`} className="btn btn-primary">Mail</a>
      </div>
    )
  }

  render() {
    console.log(this.props.users);
    return (
      <div className='users-list'>
        {this.props.users.map(this.renderUser)}
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, actions)(UsersList);
