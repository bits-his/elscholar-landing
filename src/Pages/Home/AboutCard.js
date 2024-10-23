import React from "react";

export default function AboutCard(props) {
  return (
    <div
      className="col-12 col-md-6 col-lg-4 service-card"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay={props.time}
    >
      <div className="about-card bg-light p-3 rounded">
        <div className="about-info">
          <h4>{props.heading}</h4>
          <p className="card-description">{props.describtion}</p>
        </div>
      </div>
    </div>
  );
}