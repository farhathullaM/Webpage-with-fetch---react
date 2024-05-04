import React, { useEffect } from "react";
import "./Products.css";
import { useState } from "react";
import Filter from "../Filter/Filter";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [filteredtList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://farhathullam.github.io/json-api/details.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setFilteredList(data);
      })
      .catch((error) => console.error(error));
    setLoading(false);
  }, []);

  // Function to handle search query changes
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the monument list based on the search query
    const filteredList = blogs.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredList(query === "" ? blogs : filteredList);
  };

  return (
    <div className="products-main">
      <Filter />
      <div className="products">
        <div className="product-head">
          <div className="top-part-head">
            <div className="heading">
              <h3>Men's Sports Accessories</h3>
              <p>(3065 Items)</p>
              <p>|</p>
              {/* <p><i className="fa-solid fa-magnifying-glass"></i>Search within category</p> */}
              <div className="search-box">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder="Search within category"
                  name=""
                  id=""
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="sort">
              <label>Sort by:</label>
              <select name="sort" id="sort">
                <option value="popularity">Popularity</option>
                <option value="pricelh">Price Low to High</option>
                <option value="pricehl">Price Hight to Low</option>
                <option value="disc">Discount</option>
                <option value="fresh">Fresh Arrivals</option>
              </select>
            </div>
          </div>

          <div className="bottom-part-head">
            <input type="text" placeholder="Enter your pincode" />
            <a href="">Check</a>
          </div>
        </div>

        <div className="items s2">
          {loading ? (
            "Loading..."
          ) : (
            <div className="single-products">
              {filteredtList &&
               filteredtList.map((item) => (
                  <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="product-details">
                      <p className="title">{item.name}</p>
                      <div className="price">
                        <p className="old-price">Rs.{item.old_price}</p>
                        <p className="new-price">Rs.{item.new_price}</p>
                        <p className="discount">{item.off}%Off</p>
                      </div>
                      <div className="others">
                        <div className="other-set">
                          <p className="star">{item.star} star rating</p>
                          <p className="review">({item.review})</p>
                        </div>
                        <p className="order">
                          {item.order} people just ordered
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
