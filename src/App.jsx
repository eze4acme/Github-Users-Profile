import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const url = "https://api.github.com/users";
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  if (!data) {
    return <h1>Loading....</h1>;
  }
  return (
    <section className="section">
      <h1 className="title">Github Users profile</h1>
      <ul className="sect">
        {data.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id} className="setup">
              <img src={avatar_url} alt="" />
              <div className="text-section">
                <h1>{login}</h1>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default App;
