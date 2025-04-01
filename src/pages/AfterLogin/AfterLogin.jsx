import { useState, useRef } from 'react';
import { ChevronRight, Menu, Search } from 'lucide-react';
import './AfterLogin.css';
import logo from '../../assets/logo.jpeg';

export default function PlaceMint() {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const blogScrollRef = useRef(null);
  
  // Sample data for videos and blogs
  const videos = Array(12).fill().map((_, i) => ({ id: `video-${i}`, title: `Video ${i + 1}` }));
  const blogs = Array(8).fill().map((_, i) => ({ id: `blog-${i}`, title: `Blog ${i + 1}` }));
  
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Implement search functionality here
  };
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const scrollBlogs = () => {
    if (blogScrollRef.current) {
      blogScrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        {/* Menu Button */}
        <button onClick={toggleMenu} className="menu-button">
          <Menu size={24} />
        </button>
        
        {/* Logo */}
        <div className="logo">
                <img src={logo} alt="PlaceMint Logo" />
                <span>PlaceMint</span>
              </div>
        
        {/* Search Bar - Shortened */}
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-container">
            <div className="search-icon">
              <Search size={20} />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              placeholder="Search bar"
            />
          </div>
        </form>
        
        {/* Profile Button */}
        <button onClick={toggleProfile} className="profile-button">
          <span className="sr-only">Profile</span>
        </button>
      </header>
      
      {/* Main Content */}
      <main className="main-content">
        {/* Videos Section - No Scroll */}
        <section className="videos-section">
          <h2 className="section-title">Videos</h2>
          <div className="videos-grid">
            {videos.slice(0, 8).map((video) => (
              <div key={video.id} className="video-item">
                <div className="video-thumbnail"></div>
                <div className="video-title-bar"></div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Blogs Section */}
        <section className="blogs-section">
          <h2 className="section-title">Blogs</h2>
          <div className="blogs-container">
            <div className="blogs-scroll" ref={blogScrollRef}>
              {blogs.map((blog) => (
                <div key={blog.id} className="blog-card">
                  <div className="blog-image"></div>
                  <div className="blog-content">
                    <div className="blog-text-line"></div>
                    <div className="blog-text-line"></div>
                    <div className="blog-text-line"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll Button */}
            <button 
              className="scroll-button"
              onClick={scrollBlogs}
              aria-label="Scroll blogs right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </section>
        
        {/* More Videos Grid */}
        <section className="more-videos-section">
          <div className="more-videos-grid">
            {videos.slice(0, 4).map((video) => (
              <div key={`more-${video.id}`} className="video-item">
                <div className="video-thumbnail"></div>
                <div className="video-title-bar"></div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Footer Grid */}
        <section className="footer-section">
          <div className="footer-grid">
            {videos.slice(0, 4).map((video) => (
              <div key={`footer-${video.id}`} className="footer-item"></div>
            ))}
          </div>
        </section>
      </main>
      
      {/* Menu Overlay */}
      {menuOpen && (
        <div className="overlay" onClick={toggleMenu}>
          <div className="menu-panel" onClick={e => e.stopPropagation()}>
            <div className="menu-close">
              <button onClick={toggleMenu}>×</button>
            </div>
            <ul className="menu-list">
              <li className="menu-item">Home</li>
              <li className="menu-item">Videos</li>
              <li className="menu-item">Blogs</li>
              <li className="menu-item">About</li>
              <li className="menu-item">Contact</li>
            </ul>
          </div>
        </div>
      )}
      
      {/* Profile Overlay */}
      {profileOpen && (
        <div className="overlay" onClick={toggleProfile}>
          <div className="profile-panel" onClick={e => e.stopPropagation()}>
            <div className="profile-close">
              <button onClick={toggleProfile}>×</button>
            </div>
            <div className="profile-content">
              <div className="profile-avatar"></div>
              <h3 className="profile-name">User Name</h3>
              <p className="profile-email">user@email.com</p>
              <ul className="profile-menu">
                <li className="profile-menu-item">Profile</li>
                <li className="profile-menu-item">Settings</li>
                <li className="profile-menu-item">My Videos</li>
                <li className="profile-menu-item">My Blogs</li>
                <li className="profile-menu-item">Logout</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}