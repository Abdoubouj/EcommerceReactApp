import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProduct = async () => {
      await axios
        .get(`https://dummyjson.com/products/${parseInt(id)}`)
        .then((res) => {
          setProduct(res?.data);
        });
    };
    getProduct();
  }, [id]);
  console.log(product);

  return (
    <div className="container py-5">
      <div className="row">
        {/* Product Images */}
        <div className="col-md-6">
          <img
            // src={mainImage}
            src={product?.images[0]}
            alt="Main product image"
            className="img-fluid rounded"
          />
          <div className="d-flex mt-3">
            {product?.images.map((img, index) => (
              <button
                key={index}
                // onClick={() => setMainImage(img)}
                className="btn p-0 border-0"
              >
                <img
                  src={img}
                  alt={`Product thumbnail ${index + 1}`}
                  className="img-thumbnail"
                  style={{ width: "80px", height: "80px" }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <h1 className="display-4">{product?.title}</h1>
          <div className="d-flex align-items-center mb-3">
            <div className="d-flex me-2">
              {/* {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-primary" style={{ width: '20px', height: '20px' }} />
          ))} */}
            </div>
            <span className="text-muted">(128 reviews)</span>
          </div>
          <p className="h3">{product?.price}</p>
          <p className="text-muted">{product?.description}</p>

          {/* Color Selection */}
          <div className="mb-4">
            <h3 className="h5">Color</h3>
            <div className="d-flex">
              <div className="form-check me-3">
                <input
                  type="radio"
                  name="color"
                  id="black"
                  value="black"
                  defaultChecked
                  className="form-check-input"
                />
                <label htmlFor="black" className="form-check-label">
                  <div
                    className="rounded-circle bg-black"
                    style={{ width: "30px", height: "30px" }}
                  ></div>
                </label>
              </div>
              <div className="form-check me-3">
                <input
                  type="radio"
                  name="color"
                  id="gray"
                  value="gray"
                  className="form-check-input"
                />
                <label htmlFor="gray" className="form-check-label">
                  <div
                    className="rounded-circle bg-secondary"
                    style={{ width: "30px", height: "30px" }}
                  ></div>
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="color"
                  id="white"
                  value="white"
                  className="form-check-input"
                />
                <label htmlFor="white" className="form-check-label">
                  <div
                    className="rounded-circle bg-white border"
                    style={{ width: "30px", height: "30px" }}
                  ></div>
                </label>
              </div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="d-flex align-items-center mb-4">
            <button
              className="btn btn-outline-secondary"
            //   onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
                -
              {/* <Minus className="h-4 w-4" /> */}
            </button>
            <span className="mx-3 h4">1</span>
            <button
              className="btn btn-outline-secondary"
            //   onClick={() => setQuantity(quantity + 1)}
            >
                +
              {/* <Plus className="h-4 w-4" /> */}
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="btn btn-primary w-100">
            {/* <ShoppingCart className="me-2" /> Add to Cart */}
          </button>

          {/* Product Information Tabs */}
          <ul className="nav nav-tabs mt-4" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="features-tab"
                data-bs-toggle="tab"
                data-bs-target="#features"
                type="button"
                role="tab"
                aria-controls="features"
                aria-selected="true"
              >
                Features
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="specs-tab"
                data-bs-toggle="tab"
                data-bs-target="#specs"
                type="button"
                role="tab"
                aria-controls="specs"
                aria-selected="false"
              >
                Specifications
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="reviews-tab"
                data-bs-toggle="tab"
                data-bs-target="#reviews"
                type="button"
                role="tab"
                aria-controls="reviews"
                aria-selected="false"
              >
                Reviews
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="features"
              role="tabpanel"
              aria-labelledby="features-tab"
            >
              <ul className="list-unstyled mt-3">
                <li>Adjustable lumbar support</li>
                <li>Breathable mesh back</li>
                <li>360-degree swivel</li>
                <li>Adjustable armrests</li>
                <li>Tilt tension control</li>
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="specs"
              role="tabpanel"
              aria-labelledby="specs-tab"
            >
              <table className="table mt-3">
                <tbody>
                  <tr>
                    <th>Material</th>
                    <td>Mesh, Nylon</td>
                  </tr>
                  <tr>
                    <th>Weight Capacity</th>
                    <td>300 lbs</td>
                  </tr>
                  <tr>
                    <th>Dimensions</th>
                    <td>26"W x 26"D x 38-42"H</td>
                  </tr>
                  <tr>
                    <th>Warranty</th>
                    <td>5 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="tab-pane fade"
              id="reviews"
              role="tabpanel"
              aria-labelledby="reviews-tab"
            >
              <div className="mt-3">
                <div className="d-flex align-items-center">
                  <div className="d-flex me-2">
                    {/* {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-primary"
                        style={{ width: "16px", height: "16px" }}
                      />
                    ))} */}
                  </div>
                  <span className="fw-bold">Excellent Chair</span>
                </div>
                <p className="text-muted mt-1">
                  This chair has greatly improved my posture and reduced back
                  pain during long work hours.
                </p>
              </div>
              <div className="mt-3">
                <div className="d-flex align-items-center">
                  <div className="d-flex me-2">
                    {/* {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-primary"
                        style={{ width: "16px", height: "16px" }}
                      />
                    ))} */}
                    {/* {[...Array(1)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-muted"
                        style={{ width: "16px", height: "16px" }}
                      />
                    ))} */}
                  </div>
                  <span className="fw-bold">Very Comfortable</span>
                </div>
                <p className="text-muted mt-1">
                  The chair is very comfortable, but I wish the armrests were a
                  bit more adjustable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
