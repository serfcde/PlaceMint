import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import BlogCard from "../../components/BlogCard/BlogCard";
import LoginModal from "../../components/LoginModal/LoginModal";
import image1 from '../../assets/image1.png';

const Home = (props) => {
  const [isLoginOpen, setLoginOpen] = useState(false);

  const toggleLoginModal = () => {
    setLoginOpen(!isLoginOpen);
  };

  const blogPosts = [
    { id: 1, title: "Blog Post 1" },
    { id: 2, title: "Blog Post 2" },
    { id: 3, title: "Blog Post 3" },
    { id: 4, title: "Blog Post 4" },
  ];

  const handleSignupClick = () => {
    if (props.toggleLoginModal) {
      props.toggleLoginModal();
    } else {
      console.error("toggleLoginModal is not passed as a prop.");
    }
  };

  return (
    <>
      <Header toggleLoginModal={toggleLoginModal} />
      <main className={`main-content ${isLoginOpen ? "blur" : ""}`}>
        <section className="hero">
          <div className="hero-text">
            <h1>Learn from those who have been there!</h1>
            <p>
              Get insights from alumni on interviews, coding contests, and career journeys. Watch their experiences, explore stratergies, and connect through discussions to navigate your placement journey with confidence.</p>
          </div>
          <div className="hero-image">
            <img src={image1} alt ="Placement Preparation" className="hero-img"></img>
          </div>
        </section>

        <Carousel />

        <section className="trending-blogs">
          <h2>Trending Blogs</h2>
          <div className="blog-grid">
            {blogPosts.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>
      </main>

      <LoginModal
        isOpen={isLoginOpen}
        toggleLoginModal={toggleLoginModal} // Use the local toggleLoginModal to close
        toggleSignupModal={props.toggleLoginModal} // Pass the prop to open signup (assuming it's the same)
      />
    </>
  );
};

export default Home;