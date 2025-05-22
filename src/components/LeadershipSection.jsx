import React from "react";
import LeadershipCard from "../LeadershipCard";

const leaders = [
  {
    photo: "/Eric.png",
    name: "Eric Auiyong",
    title: "Managing Director",
    bio1: "With over three decades of experience in HVAC, M&E, and cleanroom project management, Mr. Eric Auiyong has led high-compliance projects for semiconductor, pharmaceutical, research, and data center facilities.",
    bio2: "Formerly Project Director at Takasago Singapore Pte Ltd, he brings technical expertise, hands-on leadership, and a commitment to delivering exceptional value to clients.",
  },
  {
    photo: "/weiren.png",
    name: "Walter Wu Weiren",
    title: "Operations Director",
    bio1: "Walter Wu Weiren leads the operational execution of all M&E projects, ensuring strict adherence to schedules, safety standards, and regulatory compliance across project lifecycles.",
    bio2: "He is recognized for his meticulous project planning, strategic resource coordination, and ability to drive cross-functional collaboration with exceptional attention to detail.",
  },
];


const LeadershipSection = () => (
  <section
    id="leadership"
    className="my-10 bg-gradient-to-r from-sky-50 to-white p-6 rounded-xl shadow-md"
  >
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Leadership</h2>
    {leaders.map((leader, index) => (
      <LeadershipCard key={index} {...leader} index={index} />
    ))}
  </section>
);

export default LeadershipSection;