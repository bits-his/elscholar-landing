import React from "react";
import HomeCourseCard from "./HomeCourseCard";
import welcome1 from "../../../Assets/group.png";
import welcome2 from "../../../Assets/nursery.png";
import welcome3 from "../../../Assets/welcome3.jpg";
// import welcome4 from "../../../Assets/photoslider2.jpg"

export default function HomeCourse({ sectionRef }) {
  return (
    <>
      <div className="Home-course-Card p-5" id="program" ref={sectionRef}>
        <h2 className="container-heading">Our Programs</h2>
        <div className="row">
          <HomeCourseCard
            attechment={welcome1}
            title="NURSERY SECTION"
            location={"up"}
            time={200}
            content="Our Nursery Section nurtures creativity and hands-on learning, with dedicated educators using play-based methods to support skill development and foster a love for exploration and growth."
          />
          <HomeCourseCard
            attechment={welcome1}
            title="PRIMARY SECTION"
            location={"down"}
            time={300}
            content="Our PRIMARY Section encourages exploration and growth, with experienced educators supporting social, emotional, and cognitive development through engaging activities and structured play."
          />
          <HomeCourseCard
            attechment={welcome1}
            title="SECONDARY SECTION"
            location={"up"}
            time={400}
            content="Our SECONDARY Section emphasizes academic excellence and personal growth, with dedicated educators fostering critical thinking and social skills in a stimulating learning environment."
          />
          <HomeCourseCard
            attechment={welcome1}
            title="ISLAMIYYA SECTION"
            location={"down"}
            time={500}
            content="The Islamiyya Section offers education in Islamic studies and Arabic, fostering a deep understanding of faith and culture while promoting personal growth, ethical values, and community involvement."
          />
          {/* <HomeCourseCard
            attechment={welcome1}
            title="Livestock Farm Enterprises"
            content="To be a leading platform for experiential learning, where students gain the necessary competencies to excel in their chosen fields and contribute meaningfully to the global workforce."
          />
          <HomeCourseCard
            attechment={welcome2}
            title="Farm Products Costing"
            content="To be a leading platform for experiential learning, where students gain the necessary competencies to excel in their chosen fields and contribute meaningfully to the global workforce."
          />
          <HomeCourseCard
            attechment={welcome3}
            title="Farm Stock Management"
            content="To be a leading platform for experiential learning, where students gain the necessary competencies to excel in their chosen fields and contribute meaningfully to the global workforce."
          /> */}
        </div>
      </div>
    </>
  );
}
