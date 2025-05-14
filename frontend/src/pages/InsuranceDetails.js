import React from 'react';
import { useParams } from 'react-router-dom';

const InsuranceDetails = () => {
  const { type } = useParams(); // Get the insurance type from the URL

  return (
    <div className="container mt-5">
      <h1 className="text-center">Details for {type.replace('-', ' ')} Insurance</h1>
      <p className="text-center">
        Here you can find all the details about {type.replace('-', ' ')} insurance, including coverage, premium, and benefits.
      </p>
    <div className="container py-5">
      <nav className="mb-3 text-muted">Home &gt;Insurance</nav>
      <h2> Insurance</h2>
      <h4 className="text-muted">insurance starting from <strong>₹ 3/day*</strong></h4>
      <p className="text-muted"> No. → Select Plan → Policy Issued</p>

      <div className="mb-4">
        <input type="text" className="form-control mb-2" placeholder="Your number" />
        <button className="btn btn-danger w-100">Check Prices</button>
        <small className="text-muted d-block mt-2">
          By clicking, I agree to <a href="terms & conditions">terms & conditions</a> and <a href="privacy policy">privacy policy</a>.
        </small>
        <div className="mt-3">
          <a href="Brand new" className="text-primary">Brand new?</a>
        </div>
      </div>

      {/* Bike Image
      <div className="text-center mb-5">
        <img src="/images/bike-illustration.png" alt="Bike" className="img-fluid" style={{ maxHeight: '150px' }} />
      </div> */}

      <div className="card p-4">
        <h5>Calculate Your  Insurance Price Online</h5>

        {/* Brand Icons
        <div className="d-flex flex-wrap gap-3 my-3">
          {["hero", "bajaj", "tvs", "royal_enfield", "yamaha", "suzuki"].map(brand => (
            <img
              key={brand}
              src={`/images/bike-brands/${brand}.png`}
              alt={brand}
              style={{ height: '50px', cursor: 'pointer' }}
            />
          ))}
        </div> */}

        {/* City Selection */}
        <div className="mb-3">
          <label>Which city is your in?</label>
          {/* { <div className="d-flex flex-wrap gap-2">
            {["Delhi", "Mumbai", "Pune", "Bangalore"].map(city => (
              <button key={city} className="btn btn-outline-secondary">{city}</button>
            ))}
          </div> */}
        </div>

        {/* Dropdowns */}
        <div className="row g-3">
          <div className="col-md-6">
            <select className="form-select">
              <option>Delhi</option>
              <option>Hyderabad</option>
              <option>Chennai</option>
              <option>Kolkata</option>
            </select>
          </div>
          <div className="col-md-6">
            <select className="form-select">
              <option>Year</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <button className="btn btn-danger w-100">Calculate Price</button>
        </div>

        <small className="text-muted mt-2 d-block">
          Disclaimer: Actual Premium might vary based on location, age, and number of members.
        </small>
      </div>
    </div>   
    </div>
  );
};

export default InsuranceDetails;