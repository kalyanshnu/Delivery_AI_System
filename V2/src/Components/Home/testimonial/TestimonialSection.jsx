import React from "react";
import "./TestimonialSection.css";
import Sarah from "./Sarah.png";
import Priya from "./PriyaPatel.png";
import Michael from "./MichaelChen.png";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Operations Manager, GreenMart",
      image: Sarah, // Remove the curly braces
      quote:
        "The AI route optimization has cut our delivery times by 30% and significantly reduced our fuel costs. Our customers are happier with the predictable delivery windows.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "CEO, QuickShip Logistics",
      image: Michael, // Remove the curly braces
      quote:
        "Managing our fleet of electric vehicles through this platform has been a game-changer. The dashboard gives us complete visibility into our operations.",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Priya Patel",
      title: "Logistics Director, Urban Eats",
      image: Priya, // Remove the curly braces
      quote:
        "The bulk delivery management feature has simplified our operations. We can now handle twice the number of deliveries with the same team size.",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          className="star star-filled"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="star star-half"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <defs>
            <linearGradient id="half-fill">
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="url(#half-fill)"
          />
        </svg>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="star star-empty"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2 className="testimonial-title">What Our Clients Say</h2>
          <p className="testimonial-subtitle">
            Hear from businesses that have transformed their delivery operations
            with our platform.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-quote">"{testimonial.quote}"</p>

                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              <div className="testimonial-author">
                <div className="author-image">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="author-photo"
                  />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-title">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
