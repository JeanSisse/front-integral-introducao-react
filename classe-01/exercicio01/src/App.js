import './App.css';

import imgVictor from "./assets/image-victor.jpg";
function App() {
  return (
    <div className="App display-box">
      <div className="card">

        <div className="top-card">
          <img src={imgVictor} alt="foto perfil" />
        </div>


        <div className="name-age display-box">
          <p>Victor Cest</p>
          <span>26</span>
        </div>

        <div className="state">
          <span>London</span>
        </div>

        <hr/>
        <div className="profile-stats">
          <div>
            <p>90K</p>
            <span>Followers</span>
          </div>

          <div>
            <p>803K</p>
            <span>Likes</span>
          </div>

          <div>
            <p>1.4K</p>
            <span>Photos</span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
