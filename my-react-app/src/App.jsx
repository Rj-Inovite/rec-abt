import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentAboutImageIndex, setCurrentAboutImageIndex] = useState(0);
  const bestSellersRef = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  const bestSellers = [
    { name: 'Round glasses', image: 'https://sunglassescraft.com/cdn/shop/products/brovo-2020-alloy-round-glasses-frame-wo_main-0_840b6581-9871-4dec-9b0d-8f470bc29668_800x.jpg?v=1607533773' },
    { name: 'Square glasses', image: 'https://ae01.alicdn.com/kf/Hc6e054c9211e4099bac6d099ddb17ed4S.jpg' },
    { name: 'Cat eye glasses', image: 'https://s.alicdn.com/@sc04/kf/H7dad7d23f9e144e2bc54264b6144a505J/Anti-Blue-Ray-Stainless-Steel-Prescription-Safety-Fancy-Optical-Frames-Computer-Glasses-Women-Men-Vintage-Eyewear.jpg' },
    { name: 'Blue Light Filters', image: 'https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/1082/2024/03/Blue-light-eyeglasses_Blog.jpg' },
    { name: 'Bigging glasses', image: 'https://highxtar.com/wp-content/uploads/2024/12/highxtar-sabrina-carpenter-versace-1-1200x675.jpg' }
  ];

  const timelineEvents = [
    { year: '2022', description: 'Nazario is founded by a small, passionate team with a vision to revolutionize the eyewear industry. The initial focus is on blending artisanal craftsmanship with modern design.' },
    { year: '2023', description: 'The first collection of frames is launched. The commitment to quality and style resonates with customers, leading to rapid growth and brand recognition.' },
    { year: '2024', description: 'Embracing sustainability, Nazario begins using recycled materials in the production of its frames, committing to a greener future.' },
    { year: '2025', description: 'The new chapter of innovation begins with the introduction of the AI Try-On feature, making perfect vision and style accessible to all.' },
  ];

  const teamMembers = [
    { name: 'Riddhish Joshi', role: 'Founder', photo: 'https://img.freepik.com/premium-photo/handsome-businessman-is-working-with-laptop-office_85574-4685.jpg', thought: '"Our vision is to redefine style, one frame at a time."' },
    { name: 'Raj Patil', role: 'CEO', photo: 'https://i0.wp.com/www.wonderslist.com/wp-content/uploads/2021/05/Cha-Eun-woo-Most-Handsome-Korean-Actors-2021.jpg', thought: '"Leading with innovation and a passion for perfect vision."' },
    { name: 'Ruchi', role: 'Manager', photo: 'https://t4.ftcdn.net/jpg/05/84/65/25/360_F_584652599_s89lyUhPSMfX5YsRlKsa1AglJT7vNioO.jpg', thought: '"Dedicated to building a community of confident and stylish individuals."' },
    { name: 'Dev Sharma', role: 'Tech Lead', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZd1b1ZEKjJxJMA8TGDyHzY-VA_oO74EVxyA&s', thought: '"Creating seamless and magical experiences with technology."' },
  ];

  const clients = [
    { logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Walmart_logo_%282008%29.svg/2560px-Walmart_logo_%282008%29.svg.png', name: 'Walmart' },
    { logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/HSBC_Logo_2018.png', name: 'HSBC' },
    { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48c7V_3JkPvvf6sgQv0lcBMF5jEW7aLMByw&s', name: 'Alitalia' },
  ];

  const aboutImages = [
    { src: 'https://media.istockphoto.com/id/2160439645/photo/happy-hispanic-father-piggyback-his-son-at-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=XXJlGYCGQ4IVYejsLwIgZ9HWfvC_74kBJPZRaspku9A=', alt: 'A happy father giving his son a piggyback ride in a park.' },
    { src: 'https://www.shutterstock.com/image-photo/smiling-mother-little-daughter-taking-260nw-2391948177.jpg', alt: 'Two people in an optical shop.' },
    { src: 'https://media.istockphoto.com/id/850767742/photo/family-in-optical-store.jpg?s=612x612&w=0&k=20&c=kJWKRwWpIvv7H2ENxLx0Gbti9h8HH8scUd3CYMKqp2g=', alt: 'A mother and son buying glasses from an optician.' },
    { src: 'https://media.istockphoto.com/id/1313344219/photo/middle-age-women-seller-and-customer-choosing-new-eyeglasses-in-modern-optical-store-shopping.jpg?s=612x612&w=0&k=20&c=JAVYg81r0D8hk8JINFXncxYuuzd8W71q6OtCQrrRAz8=', alt: 'An optician and a client looking in a mirror with new glasses.' },
  ];

  useEffect(() => {
    const video = videoRef.current;
    const container = videoContainerRef.current;
    const handleMouseEnter = () => video?.play();
    const handleMouseLeave = () => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    };
    container?.addEventListener('mouseenter', handleMouseEnter);
    container?.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      container?.removeEventListener('mouseenter', handleMouseEnter);
      container?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAboutImageIndex(prevIndex => (prevIndex + 1) % aboutImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [aboutImages.length]);

  const handleAITryOn = () => setShowModal(true);
  const handleScrollToBestSellers = (e) => {
    e.preventDefault();
    bestSellersRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container-fluid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header Section */}
      <header className="d-flex flex-column flex-md-row justify-content-between align-items-center p-4 p-md-4 mb-4 bg-inkwell text-light rounded-pill shadow-lg">
        <div className="d-flex flex-column flex-md-row align-items-center gap-4">
          <a href="#" className="text-3xl font-bold transition-transform duration-300 hover:scale-110 text-decoration-none text-light">Nazario</a>
          <nav className="d-flex flex-wrap justify-content-center gap-4 mt-4 mt-md-0">
            <a href="#" className="hover:underline transition-all duration-300 hover:scale-110 text-decoration-none text-light">New Arrivals</a>
            <a href="#" className="hover:underline transition-all duration-300 hover:scale-110 text-decoration-none text-light">Men</a>
            <a href="#" className="hover:underline transition-all duration-300 hover:scale-110 text-decoration-none text-light">Women</a>
            <a href="#" className="hover:underline transition-all duration-300 hover:scale-110 text-decoration-none text-light">Accessories</a>
            <a href="#" className="font-bold hover:underline transition-all duration-300 hover:scale-110 text-decoration-none text-light">Sale</a>
          </nav>
        </div>
        <div className="d-flex align-items-center gap-4 mt-4 mt-md-0">
          <div className="position-relative d-flex align-items-center bg-light rounded-pill p-2 search-panel">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-dark me-2">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.603 4.603a.75.75 0 11-1.06 1.06l-4.604-4.603A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
            </svg>
            <input type="text" placeholder="Search" className="bg-transparent text-dark border-0 w-100 outline-none" />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer transition-all duration-300 hover:scale-125 text-light">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer transition-all duration-300 hover:scale-125 text-light">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.75 3.75 0 003.694 2.46l.75.025a3.75 3.75 0 003.694-2.46l2.559-9.592a.75.75 0 00-.361-.278h1.387a.75.75 0 000-1.5H2.25zm6.83 15.34a.75.75 0 100 1.5.75.75 0 000-1.5zm5.55 0a.75.75 0 100 1.5.75.75 0 000-1.5z" />
          </svg>
        </div>
      </header>

      <main className="d-flex flex-column gap-5">
        {/* Hero Section */}
        <section className="hero-section text-center p-5 rounded-3xl shadow-lg">
          <div className="p-5 rounded-2xl text-light">
            <h1 className="display-4 font-extrabold mb-4 lh-sm">See the World in a New Light</h1>
            <p className="lead max-w-2xl mx-auto mb-4">Discover our exclusive collection of stylish and innovative eyewear, designed to elevate your vision and your style.</p>
            <a href="#best-sellers" onClick={handleScrollToBestSellers} className="btn bg-light text-dark py-3 px-5 rounded-pill fw-bold text-decoration-none transition-all duration-300 hover:scale-105 hover:opacity-90 shadow-lg">Explore Collection</a>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section id="best-sellers" ref={bestSellersRef} className="bg-white rounded-3xl shadow-lg p-5 border-2 border-[#203639]">
          <h2 className="text-3xl font-bold text-center mb-5">Our Best Sellers</h2>
          <div id="bestSellersCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" >
            <div className="carousel-indicators">
              {bestSellers.map((_, index) => (
                <button key={index} type="button" data-bs-target="#bestSellersCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : "false"} aria-label={`Slide ${index + 1}`}></button>
              ))}
            </div>
            <div className="carousel-inner">
              {bestSellers.map((product, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <img src={product.image} className="d-block w-100" alt={product.name} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="text-white fw-bold">{product.name}</h5>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#bestSellersCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#bestSellersCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-inkwell text-light rounded-3xl shadow-lg p-5">
          <h2 className="text-3xl font-bold text-center mb-5">Our Luminous Journey</h2>
          <div className="timeline-container d-flex justify-content-between align-items-start gap-4 mx-auto">
            {timelineEvents.map((event, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{event.year}</div>
                <div className="timeline-description">{event.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white rounded-3xl shadow-lg p-5 border-2 border-[#203639]">
          <h2 className="text-3xl font-bold text-center mb-5">About Nazario</h2>
          <div className="text-center mb-5 about-carousel-container">
            {aboutImages.map((image, index) => (
              <img key={index} src={image.src} className={`about-carousel-img ${currentAboutImageIndex === index ? 'active' : ''}`} alt={image.alt} />
            ))}
          </div>
          <p className="lead text-center max-w-4xl mx-auto">
            Nazario is more than just an eyewear brand; it's a statement. We believe that glasses are a powerful form of self-expression. Our curated collections are designed for the modern individual who values elegance, quality, and technology. We are dedicated to providing an unparalleled shopping experience, from our meticulously crafted frames to our personalized, high-tech fitting solutions.
          </p>
        </section>

        {/* AI Try On Section */}
        <section className="bg-inkwell text-light rounded-3xl shadow-lg p-5">
          <div className="d-flex flex-column flex-md-row align-items-center gap-4">
            <div className="w-100 w-md-50">
              <div className="video-container" ref={videoContainerRef}>
                <video ref={videoRef} src="https://assets.mixkit.co/videos/preview/mixkit-young-man-wearing-glasses-8302-large.mp4" loop muted playsInline preload="none">
                  Your browser does not support the video tag.
                </video>
                <div className="image-overlay"></div>
              </div>
            </div>
            <div className="w-100 w-md-50 text-center text-md-left">
              <h2 className="display-5 font-extrabold mb-4 lh-sm">Discover Your Perfect Fit</h2>
              <p className="lead mb-4">
                Experience the future of online shopping with our latest AI Try-On feature. See how our glasses look on your face from the comfort of your home. It’s the closest thing to a real-life fitting, designed for your convenience.
              </p>
              <button onClick={handleAITryOn} className="btn bg-light text-dark py-3 px-5 rounded-pill fw-bold border-0 cursor-pointer transition-all duration-300 hover:scale-105 hover:opacity-90 shadow-lg">Try on Now!</button>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="bg-white rounded-3xl shadow-lg p-5 border-2 border-[#203639]">
          <h2 className="text-3xl font-bold text-center mb-5">Our Vision & Mission</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-6 d-flex align-items-stretch">
              <div className="mv-card">
                <svg className="mv-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.646 7.354a.5.5 0 01.708.708L7.5 10.5l4.146-4.146a.5.5 0 01.708.708L8.207 11.207a.5.5 0 01-.708 0L4.646 8.061a.5.5 0 010-.707z" clipRule="evenodd"></path>
                </svg>
                <h3 className="h4 fw-bold mb-2">Our Vision</h3>
                <p className="lead">To become the world's leading destination for premium eyewear, celebrated for our commitment to style, sustainability, and unparalleled customer experience.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-stretch">
              <div className="mv-card">
                <svg className="mv-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                </svg>
                <h3 className="h4 fw-bold mb-2">Our Mission</h3>
                <p className="lead">To provide exceptional eyewear that combines innovative design with superior quality, helping our customers express their individuality and see the world in a new light.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="bg-inkwell text-light rounded-3xl shadow-lg p-5">
          <h2 className="text-3xl fw-bold text-center mb-5">Meet the Team</h2>
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="bg-light text-dark rounded-3xl p-4 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <img src={member.photo} alt={member.name} className="w-100 h-100 rounded-circle mx-auto mb-4 object-cover border-4 border-dark" loading="lazy" style={{ width: '128px', height: '128px' }} />
                  <h3 className="h5 fw-bold">{member.name}</h3>
                  <p className="small fw-semibold mb-4">{member.role}</p>
                  <p className="small fst-italic">{member.thought}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Valued Clients */}
        <section className="bg-white rounded-3xl shadow-lg p-5 border-2 border-[#203639]">
          <h2 className="text-3xl fw-bold text-center mb-5">Our Valued Clients</h2>
          <div className="row g-4">
            {clients.map((client, index) => (
              <div key={index} className="col-6 col-sm-6 col-lg-3 d-flex justify-content-center align-items-center p-4">
                <img src={client.logo} alt={client.name} className="w-100 h-20 max-h-20 object-contain grayscale transition-all duration-300 hover:grayscale-0" loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* AI Try On Modal */}
      {
        showModal && (
          <div className="modal d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content rounded-3xl p-4">
                <div className="modal-header border-0 pb-0">
                  <h5 className="modal-title fw-bold">AI Try On Feature</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                </div>
                <div className="modal-body text-center">
                  <p>This is a placeholder for the AI Try On functionality. You can integrate a webcam feed here to allow users to virtually try on glasses.</p>
                  <div className="w-100 h-64 bg-secondary-subtle rounded-3xl d-flex justify-content-center align-items-center">
                    <span className="text-secondary">Webcam Feed Placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }

      {/* Footer */}
      <footer className="bg-inkwell text-light text-center p-5 mt-5 rounded-top-3xl">
        <div className="container-fluid">
          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4 mb-4">
            <a href="#" className="text-light text-decoration-none transition-all duration-300 hover:underline hover:scale-110">Contact</a>
            <a href="#" className="text-light text-decoration-none transition-all duration-300 hover:underline hover:scale-110">About</a>
            <a href="#" className="text-light text-decoration-none transition-all duration-300 hover:underline hover:scale-110">Help</a>
          </div>
          <p className="mt-4">&copy; 2025 Nazario. All rights reserved.</p>
        </div>
      </footer>
    </div >
  );
};

export default App;