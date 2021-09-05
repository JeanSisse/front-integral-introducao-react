import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">

        <div className="informe">
          <h1>Join our community</h1>
          
          <h2>30-day, hassle-free money back guarantee</h2>

          <p>
            Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.
          </p>
        </div>

        <div className="subscription">
          <div className="payment-info">
            <span>Monthly Subscription</span>
            
            <div className="price-per-month">
              <div className="price">
                <span>$29</span>
              </div>
              <div className="per-month">
                <span>per month</span>
              </div>
            </div>

            <p>Full access for less than $1 a day</p>
            
            <button className="btn">Sign Up</button>

          </div>

          <div className="why-us">
            <span>Why Us</span>

            <p>Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week</p>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
