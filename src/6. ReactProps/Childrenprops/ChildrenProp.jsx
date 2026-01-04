import React from "react";
import HeadingSubheadings from "../HeadingSubheadings.jsx";
import FirstTwoChildrenCard from "./FirstTwoChildrenCard.jsx";
import WrapperForChildrenProp from "./WrapperForChildrenProp.jsx";
import ThirdChildrenCard from "./ThirdChildrenCard.jsx";
import BasciPropsSubPartsHeading from "../BasicProps/BasciPropsSubPartsHeading.jsx";
import RefPropButtons from "../RefProps/RefPropButtons.jsx";

function ChildrenProp() {
  const userProfileInfo = [
    { role: "Name", value: "John Doe" },
    { role: "Email", value: "john@example.com" },
    { role: "Role", value: "Developers" },
  ];

  const statisticsInfo = [
    { role: "Total Users", value: "1,234" },
    { role: "Active Sessions", value: "567" },
    { role: "Revenue", value: "$89,000" },
  ];

  return (
    <div id="children" className="basic-props">
      <HeadingSubheadings
        headingSize={"2.1rem"}
        subheadingSize={"1.1rem"}
        heading={"Children Props"}
        subheading={
          "The children prop allow you to pass JSX elements or components as children to other components, enabling component composition."
        }
      />

      <h2>Card component with children: </h2>

      <WrapperForChildrenProp>
        <FirstTwoChildrenCard
          borderColor="#507edaff"
          backgroundColor="#edf7ffff"
          heading={"User Profile"}
          info={userProfileInfo}
        />

        <FirstTwoChildrenCard
          borderColor="#2fc315ff"
          backgroundColor="#edfff1ff"
          heading={"Statistics"}
          info={statisticsInfo}
        />

        <ThirdChildrenCard borderColor="#c11bcaff" backgroundColor="#feefffff">
          <BasciPropsSubPartsHeading partHeading={"Quick Actions"} />
          <RefPropButtons childrenBtn="childrenBtn" content={"Create New"} bgColor={"#ba1ed9ff"} />
          <RefPropButtons childrenBtn="childrenBtn" content={"view all"} bgColor={"gray"} />
        </ThirdChildrenCard>

        <HeadingSubheadings
        childrenCard="children-card"
        borderColor="#ee3d3dff"
          backgroundColor="#ffefefff"
          headingSize={"1.5rem"}
          headingFontWeight={"500"}
          subheadingSize={"1rem"}
          heading={"Warning"}
          subheading={
            "Your total trial ends in 5 days. Please upgrade your account to continue using all features."
          }
        />
      </WrapperForChildrenProp>
    </div>
  );
}

export default ChildrenProp;
