import React from 'react'
import logo from './logo.png'
import data from './data'
import Post from './components/Post'

function App() {
  const posts = data.map(post => {
    return (
      <Post post={post} />
    )
  })

  return (
    <div className="app">
      <header>
        <img src={logo} className='logo'></img>
        <h2>my travel journal.</h2>
      </header>
      {posts}
    </div>
  );
}

export default App;
