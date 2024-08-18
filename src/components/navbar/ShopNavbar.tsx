import { Navigate, useNavigate } from 'react-router-dom';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import './ShopNavbar.scss';

function ShopNavbar() {
  let navigate = useNavigate();
  return (
    <div className="shopNavbar">
      <img src="https://res.cloudinary.com/dytlryqvs/image/upload/v1723987281/logo_gjafqg.png" alt="" onClick={() => navigate('/')} />
      <div className="options">
        <span onClick={() => navigate('/about')}>About Us</span>
        <span onClick={() => navigate('/products')}>Products</span>
        <span onClick={() => navigate('/contact')}>Contact</span>
      </div>
      <div className="rightContainer">
        <div className="buttons">

        <button>Login</button>
        <button>Sign Up</button>
        </div>
        {/* <div className="instagram">
          <img
            src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
}

export default ShopNavbar;
