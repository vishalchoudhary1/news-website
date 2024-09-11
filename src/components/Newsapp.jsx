import React, { useEffect, useState } from "react";
import Card from "./card";
function Newsapp() {
  const [Search, setSearch] = useState("india")
  const [newsData, setNewsData] = useState(null)
  const API_KEY = "c43f9c89ee9843948d934158ee5e566d";

  const getData = async() => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${Search}&apiKey=${API_KEY}`)
    const jsonData = await response.json();
    console.log(jsonData.articles)
    setNewsData(jsonData.articles)
  }

  useEffect(()=>{
    getData()
  }, [])
  
  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value)
  }

  const userInput = (e)=>{
    setSearch(e.target.value)
  }

  return (
    <>
      <nav>
        <div>
          <h1>Tredy news</h1>
        </div>
        <ul>
          <a>All News</a>
          <a>Trending</a>
        </ul>
        <div className="searchBar">
          <input type="text" placeholder="Search News" value={Search} onChange={handleInput}/>
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        <p className="head">Stay update with trendyNews</p>
      </div>
      <div className="categoryBtn">
          <button onClick={userInput} value="sports">Sports</button>
          <button onClick={userInput} value="politics">Politics</button>
          <button onClick={userInput} value="entertainment">Entertainment</button>
          <button onClick={userInput} value="health">Health</button>
          <button onClick={userInput} value="fitness">fitness</button>
      </div>

      {newsData?  <Card data={newsData}/> : null}
    </>
  );
}

export default Newsapp;
