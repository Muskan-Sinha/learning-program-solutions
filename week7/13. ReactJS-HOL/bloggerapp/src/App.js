import React from 'react';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';

function App() {
  const courses = [
    { id: 1, name: "Angular", date: "4/5/2021" },
    { id: 2, name: "React", date: "6/3/2020" }
  ];

  const books = [
    { id: 1, title: "Master React", price: 670 },
    { id: 2, title: "Deep Dive into Angular 11", price: 800 },
    { id: 3, title: "Mongo Essentials", price: 450 }
  ];

  const blogs = [
    {
      id: 1,
      title: "React Learning",
      author: "Stephen Biz",
      content: "Welcome to learning React!"
    },
    {
      id: 2,
      title: "Installation",
      author: "Schwezdenier",
      content: "You can install React from npm."
    }
  ];

  return (
    <div className="container">
      <CourseDetails courses={courses} />
      <div className="divider" />
      <BookDetails books={books} />
      <div className="divider" />
      <BlogDetails blogs={blogs} />
    </div>
  );
}

export default App;
