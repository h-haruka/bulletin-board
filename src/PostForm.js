import React, { useEffect, useState } from 'react';

function PostForm({ onAddPost }) {
  const [content, setContent] = useState('');
  const [name, setName] = useState('');

  // ローカルストレージから名前を読み込む
  useEffect(() => {
    const savedName = localStorage.getItem('name');
    if(savedName) {
      setName(savedName);
    }
  }, []);

  // 名前が変更されたらローカルストレージに保存する
  const handleNameChange = (e) => {
    setName(e.target.value);
    localStorage.setItem('name', e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() && name.trim()) {
      onAddPost({content, name});
      setContent(''); // フォームをクリア
    }
  };

  const handleKeyDown = (e) => {
    if(e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // デフォルトのEnter動作を無効化
      handleSubmit(e); // handleSubmit関数を呼び出し
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} onKeyDown={handleKeyDown} placeholder="投稿内容を入力" />
      <input type="text" value={name} onChange={handleNameChange} placeholder="ニックネーム"></input>
      <button type="submit">送信</button>
    </form>
  );
}

export default PostForm;