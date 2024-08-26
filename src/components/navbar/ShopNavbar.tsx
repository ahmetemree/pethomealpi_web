import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import './ShopNavbar.scss';

function ShopNavbar() {
  let navigate = useNavigate();
  return (
    <div className="shopNavbar">
      <div className="navbarContainer">
        <img
          src="https://res.cloudinary.com/dytlryqvs/image/upload/v1723987281/logo_gjafqg.png"
          alt=""
          onClick={() => navigate('/')}
        />
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
        </div>
      </div>
      <div className="line">
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default ShopNavbar;
