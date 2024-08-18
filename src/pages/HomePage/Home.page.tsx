import ShopNavbar from '@/components/navbar/ShopNavbar';

import './homePage.scss';
export function HomePage() {
  return (
    <div className="homePage">
      <ShopNavbar />
      <div className="line">
        <span></span>
      </div>
      <div className="info">
        <img src="https://res.cloudinary.com/dytlryqvs/image/upload/v1723987281/logo_gjafqg.png" alt="" />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        </span>
      </div>

      <div className="photos">
        <img
          src="https://cdn.dsmcdn.com/mnresize/500/-/ty960/product/media/images/20230706/9/391580217/975761916/2/2_org.jpg"
          alt=""
          className="img1"
        />
        <img
          src="https://productimages.hepsiburada.net/s/66/375-375/110000008033462.jpg"
          alt=""
          className="img2"
        />
        <img
          src="https://productimages.hepsiburada.net/s/66/375-375/110000008033466.jpg"
          alt=""
          className="img3"
        />
      </div>
    </div>
  );
}
