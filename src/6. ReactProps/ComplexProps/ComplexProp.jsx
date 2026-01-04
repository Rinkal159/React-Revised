import React from "react";
import HeadingSubheadings from "../HeadingSubheadings.jsx";
import ComplexPropBoxes from "./ComplexPropBoxes.jsx";

function ComplexProp() {
  const complexPropInfo = [
    {
      icon: "👩🏻‍🦰",
      name: "Alice Johnson",
      email: "alice@example.com",
      firstButton: "Admin",
      secondButton: "Active",
      firstNum: 145,
      secondNum: 2834,
      thirdNum: 421,
      firstDesc: "Posts",
      secondDesc: "Followers",
      thirdDesc: "Following",
      btnContent: "Message",
      bgColor: "#3f37c9",
    },
    {
      icon: "👨🏻",
      name: "Bob Smith",
      email: "bob@example.com",
      firstButton: "Developer",
      secondButton: "Online",
      firstNum: 28,
      secondNum: 1523,
      thirdNum: 89,
      firstDesc: "Projects",
      secondDesc: "Comments",
      thirdDesc: "Reviews",
      btnContent: "Collaborate",
      bgColor: "#09bc00ff",
    },
  ];

  const handleClick = (name) => {
    alert(`Viewing ${name}'s Profile`);
  };

  return (
    <div id="complex" className="basic-props">
      <HeadingSubheadings
        heading="Complex/Nested Props"
        subheading="Complex props allow you to pass neested objects and functions, enabling sophisticated component configurations and interactions."
      />

      <div className="outer-complex">
        {complexPropInfo.map((prop, i) => (
          <div key={i}>
            <ComplexPropBoxes
              icon={prop.icon}
              name={prop.name}
              email={prop.email}
              firstButton={prop.firstButton}
              secondButton={prop.secondButton}
              firstNum={prop.firstNum}
              secondNum={prop.secondNum}
              thirdNum={prop.thirdNum}
              firstDesc={prop.firstDesc}
              secondDesc={prop.secondDesc}
              thirdDesc={prop.thirdDesc}
              btnContent={prop.btnContent}
              bgColor={prop.bgColor}
              handleClick={handleClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComplexProp;
