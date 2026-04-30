import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.results.slice(0, 5));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: "20px", padding: "20px" }}>
        <h2>Current Affairs</h2>

        {articles.map((item) => (
          <div key={item.id} style={{ marginBottom: "20px" }}>
            <h4>{item.title}</h4>
            <p>{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;