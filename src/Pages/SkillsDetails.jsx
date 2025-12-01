import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookSession from '../Components/BookSession';
import Loading from '../Components/Loading';

const SkillDetails = () => {
  const { skillId } = useParams();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    fetch('/fakeData.json')
      .then((res) => res.json())
      .then((data) => {
        const foundSkill = data.find((s) => s.skillId === parseInt(skillId));
        setSkill(foundSkill);
      })
      .catch((err) => console.error(err));
  }, [skillId]);

  if (!skill) {
    return (
      <div className="text-center mt-20">
        <Loading />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-10 mb-20">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={skill.image}
            alt={skill.skillName}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="flex-1 text-center md:text-left space-y-2">
          <h2 className="text-3xl font-bold">{skill.skillName}</h2>
          <p className="text-gray-700">{skill.description}</p>
          <p className="text-gray-600">Provider: {skill.providerName}</p>
          <p className="text-gray-600">Email: {skill.providerEmail}</p>
          <p className="text-gray-800 font-semibold">Price: ${skill.price}</p>
          <p className="text-yellow-500 font-semibold">
            Rating: {skill.rating} ⭐
          </p>
          <p className="text-gray-500">
            Slots Available: {skill.slotsAvailable}
          </p>
          <p className="text-gray-500">Category: {skill.category}</p>
        </div>
      </div>

      <div className="mt-10">
        <BookSession skill={skill} />
      </div>
    </div>
  );
};

export default SkillDetails;
