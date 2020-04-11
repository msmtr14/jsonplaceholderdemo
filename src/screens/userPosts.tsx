import React, { Component, Fragment } from "react";
import { connect, DispatchProp } from "react-redux";
import { getUserPosts } from "../redux/actions/userActions";
import * as STYLES from "./styles";
interface Props extends DispatchProp {
  match?: any;
  posts?: any;
}

class UserPosts extends Component<Props> {
  componentDidMount() {
    const { dispatch, match } = this.props;
    const userId = match.params.id;
    dispatch(getUserPosts(userId));
  }

  render() {
    const { posts } = this.props;
    return (
      <Fragment>
        <div
          className="col-md-12"
          style={{
            ...STYLES.BODY,
          }}
        >
          {posts ? (
            posts.map((post: any, i: number) => (
              <div
                key={post.id}
                className="col-md-5"
                style={{
                  ...STYLES.CONTAINER,
                  marginRight: "5.33%",
                }}
              >
                <div className="col-md-12 row">
                  <div
                    className="col-md-5"
                    style={{
                      ...STYLES.paddingVertical,
                    }}
                  >
                    POST_ID: <b>{post.id}</b>
                  </div>
                  <div
                    className="col-md-5"
                    style={{
                      ...STYLES.paddingVertical,
                    }}
                  >
                    USER_ID: <b>{post.userId}</b>
                  </div>
                </div>
                <div className="col-md-12">
                  <p
                    style={{
                      ...STYLES.TEXT_TITLE,
                    }}
                  >
                    {post.title}
                  </p>
                </div>
                <div className="col-md-12">
                  <p
                    style={{
                      ...STYLES.TEXT_SUMMARY,
                    }}
                  >
                    {post.body}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h5>Loading...</h5>
          )}
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    state,
    posts: state.userReducer.posts,
  };
}

export default connect(mapStateToProps)(UserPosts);
