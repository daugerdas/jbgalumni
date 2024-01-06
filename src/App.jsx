import "./App.css";
import logo from "./assets/jbga-logo.svg";
import picture1 from "./assets/undraw_coffee_with_friends_3cbj.svg";

function App() {
  return (
    <div className="container">
      <img
        src={logo}
        alt="Panevėžio Juozo Balčikonio gimnazijos alumni"
        className="logo"
      />
      <div className="card">
        <div className="card-content">
          <h2>Mentorystės programa 2024</h2>
          <p>
            Mentorystės programa suteikia proga moksleiviams bendrauti su
            pasirinktais mentoriais rūpimais klausimais.{" "}
          </p>
          <a href="/mentoryste">
            <button>Daugiau informacijos</button>
          </a>
        </div>
        <img src={picture1} alt="" className="picture" />
      </div>
    </div>
  );
}

export default App;
