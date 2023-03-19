const element = (
  // Write your code here.
  <div className="bg-card1">
    <h1 className="main-heading">Congratulations</h1>
    <div className="bg-card2">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="photo"
      />
      <h1 className="name">Kiran V</h1>
      <p className="collegename">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
