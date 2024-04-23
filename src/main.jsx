import React from 'react'
import ReactDOM from 'react-dom/client'
import StarRating from './StarRating'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={['terrible','bad','ok','good','excellent']} /> */}
  </React.StrictMode>
);


//  fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`)
//    .then((res) => res.json())
//    .then((data) => setMovies(data.search));
