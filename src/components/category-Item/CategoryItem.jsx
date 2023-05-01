import "./CategoryItem.scss";

const CategoryItem = ({ category }) => {
  const { imageFront, imageBack, name, lightningAddress, twitter } = category;
  return (
    <>
      <div className="category-container">
        <div className="category-body-container">
          <div className="offers__container">
            <div className="offers__card-container offers__card-container--flip">
              <div className="offers__card">
                <div className="offers__card-primary">
                  <div className="offers__image-container">
                    <img class="offers__image" src={imageFront} alt="" />
                  </div>
                </div>
                <div className="offers__card-hover">
                  <div className="lightning-container">
                    <lightning-widget
                      className="lightning-box"
                      name={name}
                      accent="#000000"
                      to={lightningAddress}
                      image={imageBack}
                      labels="🍻2100, 🍕21000, 🛸210000"
                    />

                    <div className="socialContainer">
                      <div className="social-media">
                        <a href={twitter}>
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
