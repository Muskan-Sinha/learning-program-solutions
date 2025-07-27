import React, { Component } from 'react';
import Post from './Post'; // your data class

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
      error: null
    };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        const postObjects = data.map(
          (item) => new Post(item.id, item.title, item.body)
        );
        this.setState({ posts: postObjects });
      })
      .catch((error) => {
        this.setState({ hasError: true, error });
      });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("Something went wrong: " + error.toString());
    console.error("Error info:", info);
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <h2>Blog Posts</h2>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
