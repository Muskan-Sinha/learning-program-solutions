import React from 'react';

const CourseDetails = ({ courses }) => {
  return (
    <div className="section">
      <h2>Course Details</h2>
      {courses.map(course => (
        <div key={course.id}>
          <strong>{course.name}</strong>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
