import "./componentStyling.css";

function Navbar() {
  return (
    <section className="navSection">
      <div className="navComponent">
        <div className="websiteTitle">
          <h1>Dinapaws</h1>
        </div>

        <div className="navOptions">
          <p>Home</p>
          <p>About</p>
          <p>Polices</p>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
