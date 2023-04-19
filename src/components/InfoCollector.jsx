/** @format */

function InfoCollector() {
  return (
    <div className="input-container">
      <div className="top-input-container">
        <div className="h3 red">Craving new experiencees but</div>
        <div className="h3 purple">Don't know where to start ?</div>
        <p>You just missed the summer edition.</p>
        <p className="h3">We’ll keep you posted.</p>
      </div>
      <form className="input-field-container">
        <input className="first-name" type="text" placeholder="   First Name" />
        <input
          className="last-name"
          type="text"
          placeholder="   Email Address"
        />
      </form>
      <button className="submit-btn">SUBSCRIBE </button>
    </div>
  );
}

export default InfoCollector;
