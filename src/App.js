import React, { useState, useEffect } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';

function App() {
  const [posts, setPosts] = useState([]);

  // ローカルストレージから投稿を取得
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts') || ('[]'));
    if(savedPosts.length > 0) {
      setPosts(savedPosts);
    }
  }, []);

  // 投稿をローカルストレージに保存
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  // 新しい投稿を追加する関数
  const addPost = ({ content, name }) => {
    const newPost = {
      content,
      name,
      date: new Date().toLocaleString(), // 現在の日時を取得して保存
    };
    setPosts([newPost, ...posts]); // 新しい投稿を追加
  };

  return (
    <div className="App">
      <h1>掲示板</h1>
      <PostForm onAddPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;