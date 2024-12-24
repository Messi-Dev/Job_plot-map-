import React from "react";
import "./JobInputForm.css";

const JobInputForm = () => {
  return (
    <div id="sidebar">
      <h2>Job Input Form</h2>

      <div class="form-group">
        <label for="job-address">Street Address</label>
        <input
          type="text"
          id="job-address"
          placeholder="Enter street, city, state, and zip code."
        />
      </div>

      <div class="form-group">
        <label for="job-description">Short Description</label>
        <textarea
          id="job-description"
          rows="3"
          placeholder="Enter job description"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="job-category">Category</label>
        <select id="job-category">
          <option value="flooring">All</option>
          <option value="flooring">One</option>
          <option value="cabinet">Many</option>
        </select>
      </div>

      <div class="form-group">
        <label for="job-photo">Photo Upload</label>
        <input type="file" id="job-photo" />
      </div>
      <div id="google-review">
        <h3>Leave Us a Review</h3>
        <a
          href="https://www.google.com/maps/place/YOUR_BUSINESS_NAME"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here to Review Us on Google
        </a>
      </div>

      <button class="btn" onclick="addJob()">
        Add Job
      </button>
      <div id="filters">
        <h2>Job Filter</h2>
        <div class="form-group">
          <label for="category-filter">City</label>
          <select id="category-filter">
            <option value="all">All</option>
            <option value="flooring">Houston</option>
            <option value="cabinet">San Antonio</option>
            <option value="flooring">Dallas</option>
            <option value="cabinet">Austin</option>
            <option value="flooring">Arlington</option>
          </select>
        </div>

        <div class="form-group">
          <label for="category-filter">Category</label>
          <select id="category-filter">
            <option value="all">All</option>
            <option value="flooring">One</option>
            <option value="cabinet">Many</option>
          </select>
        </div>
        <button class="btn" onclick="applyFilters()">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default JobInputForm;
