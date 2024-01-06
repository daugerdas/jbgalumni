import "./App.css";
import logo from "./assets/jbga-logo.svg";
import picture1 from "./assets/undraw_coffee_with_friends_3cbj.svg";
import linkedinLogo from "./assets/linkedin-logo.svg";
function App() {
  return (
    <div className="container">
      <a href="/" className="logo-container">
        <img
          src={logo}
          alt="Panevėžio Juozo Balčikonio gimnazijos alumni"
          className="logo-small"
        />
      </a>
      <div className="header">
        <img src={picture1} alt="" className="picture" />
        <div>
          <h1>Mentorystės programa 2024</h1>
          <p>
            Mentorystės programa suteikia proga moksleiviams bendrauti su
            pasirinktais mentoriais rūpimais klausimais.{" "}
          </p>
          <button>Moksleivių registracija</button>
        </div>
      </div>
      <h2 className="mentors-title">Mentoriai</h2>
      <div className="card-flex">
        <div className="card column">
          <div className="card-title">
            <div className="circle"></div>
            <h2>Vardas Pavardė</h2>
            <img src={linkedinLogo} alt="" className="linkedin-logo" />
          </div>
          <div className="badge">Socialiniai mokslai</div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
            in rem neque quam, odio veniam qui, earum voluptates repellat ea
            necessitatibus. Perferendis labore est quos laboriosam expedita
            harum earum facere?
          </p>
        </div>
        <div className="card column">
          <div className="card-title">
            <div className="circle"></div>
            <h2>Vardas Pavardė</h2>
            <img src={linkedinLogo} alt="" className="linkedin-logo" />
          </div>
          <div className="badge">Socialiniai mokslai</div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
            in rem neque quam, odio veniam qui, earum voluptates repellat ea
            necessitatibus. Perferendis labore est quos laboriosam expedita
            harum earum facere?
          </p>
        </div>
        <div className="card column">
          <div className="card-title">
            <div className="circle"></div>
            <h2>Vardas Pavardė</h2>
            <img src={linkedinLogo} alt="" className="linkedin-logo" />
          </div>
          <div className="badge">Socialiniai mokslai</div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
            in rem neque quam, odio veniam qui, earum voluptates repellat ea
            necessitatibus. Perferendis labore est quos laboriosam expedita
            harum earum facere?
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
