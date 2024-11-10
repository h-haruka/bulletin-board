import React from 'react';

function PostList({ posts }) {
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index} className="post">
            <p>{post.content}</p>
            <p style={{ fontSize: '0.8em', color: 'gray' }}>{post.date}</p>
            <p style={{ fontSize: '0.8em' }}>名前:{post.name}</p>
          </div>
        ))
      ):(
        <p>投稿がありません</p>
      )}
    </div>
  );
}

export default PostList;