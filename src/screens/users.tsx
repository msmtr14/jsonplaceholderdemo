import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions/userActions";
import { SearchBar } from "../components/searchbar";

interface IProps {
  state?: any;
  users?: any;
  history?: any;
  dispatch?: any;
}

class Users extends Component<IProps> {
  state = {
    userData: [],
  };
  componentDidMount() {
    this.props.dispatch(getUsers()).then((res: any) => {
      this.setState({
        userData: res.payload,
      });
    });
  }

  _performSearch = (userData: any) => {
    this.setState({ userData });
  };

  render() {
    const { users } = this.props;
    const { userData } = this.state;

    return users ? (
      <Fragment>
        <SearchBar
          getSearchData={(data: any) => this._performSearch(data)}
          data={users}
        />
        <table className="table table-striped">
          <thead>
            <th>ID</th>
            <th>USER_NAME</th>
            <th>NAME</th>
            <th>EMAIL</th>
          </thead>
          <tbody>
            {userData.length > 0 ? (
              userData.map((user: any, i: number) => (
                <tr
                  key={user.id}
                  onClick={() => (window.location.href = `/posts/${user.id}`)}
                  // onClick={() => <Redirect to={"/posts"} push />}
                >
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            ) : (
              <p>No Users</p>
            )}
          </tbody>
        </table>
      </Fragment>
    ) : (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    state,
    users: state.userReducer.users,
  };
}

export default connect(mapStateToProps)(Users);
