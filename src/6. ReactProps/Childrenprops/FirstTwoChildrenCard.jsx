import React from "react";

function FirstTwoChildrenCard({ heading, info, borderColor, backgroundColor }) {
  return (
    <div style={{borderColor:borderColor, backgroundColor:backgroundColor}} className="children-card">
      <h2 className="card-heading part-heading">{heading}</h2>
      <ul className="card-ul">
        {info.map((item, i) => (
          <li
            className="card-li"
            style={{
              justifyContent:
                heading === "Statistics" ? "space-between" : "flex-start",
            }}
            key={i}
          >
            <span
              style={{ fontWeight: heading === "User Profile" ? "500" : "400" }}
            >
              {item.role}
            </span>
            &nbsp;:&nbsp;
            <span
              style={{ fontWeight: heading === "Statistics" ? "500" : "400" }}
            >
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FirstTwoChildrenCard;
