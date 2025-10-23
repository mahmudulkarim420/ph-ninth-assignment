// src/Pages/SkillDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SkillDetails = () => {
  const { skillId } = useParams();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    fetch('/fakeData.json')
      .then((res) => res.json())
      .then((data) => {
        const foundSkill = data.find((s) => s.skillId === parseInt(skillId));
        setSkill(foundSkill);
      });
  }, [skillId]);

  if (!skill) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-5 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4">{skill.skillName}</h2>
      <img src={skill.image} alt={skill.skillName} className="w-full h-full object-cover mb-4" />
      <p className="text-gray-700 mb-2">{skill.description}</p>
      <p className="text-gray-600 mb-1">Provider: {skill.providerName}</p>
      <p className="text-gray-800 font-semibold mb-1">Price: ${skill.price}</p>
      <p className="text-yellow-500 font-semibold mb-1">Rating: {skill.rating} ⭐</p>
      <p className="text-gray-500">Slots Available: {skill.slotsAvailable}</p>
    </div>
  );
};

export default SkillDetails;
