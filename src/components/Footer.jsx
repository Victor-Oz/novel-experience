/** @format */
import InfoCollector from "../components/InfoCollector";
import * as Unicons from "@iconscout/react-unicons";

function Footer() {
  return (
    <footer>
      <InfoCollector />

      <div className="contact-container">
        <p className="email">victorozurumba12@gmail.com </p>

        {/* <p className="terms">terms and conditions</p> */}
      </div>
    </footer>
  );
}

export default Footer;
