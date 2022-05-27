import "../styles/Footer.css";
import Fox from '../res/fox.png';

function Footer() {
  return (
    <div className="footer">
      <img id="Foxy" src={Fox} alt='fox' />
      <p> &copy; 2021 kdmashyprojects</p>
    </div>
  )
}

export default Footer