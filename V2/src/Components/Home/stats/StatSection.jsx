import React from "react";
import "./StatSection.css";
import Delivery from "./Deliveryicon.png";
import CO2 from "./C02Reductionicon.png";
import Business from "./Businessicon.png";
import Time from "./timeicon.png";

const StatSection = () => {
  const stats = [
    {
      id: 1,
      number: "10M+",
      label: "Deliveries Completed",
      icon: <img src={Delivery} alt="deliverycompleted" />,
    },
    {
      id: 2,
      number: "500+",
      label: "Business Clients",
      icon: <img src={Business} alt="businessclients" />,
    },
    {
      id: 3,
      number: "30%",
      label: "Carbon Reduction",
      icon: <img src={CO2} alt="carbonreduction" />,
    },
    {
      id: 4,
      number: "25%",
      label: "Time Saved",
      icon: <img src={Time} alt="timesaved" />,
    },
  ];

  return (
    <section className="stat-section">
      <div className="stat-container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatSection;
