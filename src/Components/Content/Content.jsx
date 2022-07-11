import React from "react";
import './Content.scss'
import Product from "../Product/Product";

const Content = () => {

    return (
        <div className="container">
            <div id="content">
                <p><a href="#">Home / Calendars</a></p>
                <h1>Calendars</h1>

                <div className="filter-container">
                    <div className="filter-btn-container">
                        <button id="filter-btn">
                            <i className="fa-solid fa-bars"></i>
                            <span>Filter</span>
                        </button>
                        <p>Showing all 3 results</p>
                    </div>
                    <div>
                        <select name="sorting" id="sorting">
                            <option value="default-sorting">Default sorting</option>
                            <option value="by-popularity">Sort by popularity</option>
                            <option value="by-avarage-rating">Sort by average rating</option>
                            <option value="by-latest">Sort by latest</option>
                            <option value="by-low-to-high">Sort by price: low to high</option>
                            <option value="by-high-to-low">Sort by price: high to low</option>
                        </select>
                    </div>
                </div>

                <div className="product-container">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Content;