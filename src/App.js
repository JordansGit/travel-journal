import React from 'react'
import logo from './logo.png'
import data from './data'
import Post from './components/Post'

function App() {
  const posts = data.map(post => <Post post={post} />)

  return (
    <div className="app">
      <header>
        <img src={logo} className='logo'></img>
        <h2>my travel journal.</h2>
      </header>
      <section>
        {posts}
      </section>
    </div>
  );
}

export default App;
