import React, { Component } from 'react';
import Button from 'shared/Button';
import Input from 'shared/Input';
import { bindActionCreators } from 'redux';
import { updateUserThunk } from 'services/account/thunks';
import { connect } from 'react-redux';
import '../Account.scss';
import TextArea from 'shared/TextArea';

class ProfileUpdate extends Component {
  constructor(props) {
    super(props);
    const {
      user: {
        data: { username, email, location, bio },
      },
    } = this.props;
    this.state = {
      username,
      email,
      password: '',
      location,
      bio,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateUser(this.state);
  };
  render() {
    const { username, password, email, location, bio } = this.state;
    const {
      user: { data, loading },
    } = this.props;
    return (
      <article className="profile-update">
        <p>EDIT PROFILE</p>
        <h3>{data.username}</h3>
        <form className="profile-update__form" onSubmit={this.handleSubmit}>
          <Input
            label="Username"
            placeholder="Username"
            value={username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <div className="is-half">
            <Input
              label="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <Input
              label="Location"
              placeholder="Location"
              value={location}
              onChange={(e) => this.setState({ location: e.target.value })}
            />
          </div>
          <TextArea
            label="Bio"
            value={bio}
            onChange={(e) => this.setState({ bio: e.target.value })}
          />
          <Input
            label="Password"
            placeholder="*********"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
            type="password"
          />

          <div className="is-half">
            <Button type="submit" loading={loading}>
              Save Changes
            </Button>
            {/* <Button outline>Cancel</Button> */}
          </div>
        </form>
      </article>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.account.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateUser: bindActionCreators(updateUserThunk, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUpdate);
