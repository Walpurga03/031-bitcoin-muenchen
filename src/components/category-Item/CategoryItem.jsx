import "./CategoryItem.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, LightningAddress, twitter, nostr, telegram } = category;
  return (
    <div className="container">
      <div className="offers__container">
        <div className="offers__card-container offers__card-container--flip">
          <div className="offers__card">
            <div className="offers__card-primary">
              <div className="offers__image-container">
                <img class="offers__image" src={imageUrl} alt="" />
              </div>
            </div>
            <div className="offers__card-hover">
              <div className="lightning-container">
                <lightning-widget
                  className="lightning-box"
                  name="Value4Value"
                  accent="black"
                  to={LightningAddress}
                  amounts="1000,10000,100000"
                  labels="🍻1000, 🍕 5000, 🛸10000"
                />
                <div className="socialContainer">
                  <div className="social-media">
                    <a href={twitter}>
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href={nostr}>
                      <i className="fab fa-creative-commons-nc-eu"></i>
                    </a>
                    <a href={telegram}>
                      <i className="fab fa-telegram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
