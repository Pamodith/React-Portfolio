import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/styles/sass/homepage/_recommendationModal.scss';
import mark from '../assets/images/recommendations/1721653977316.jpg';
import tharushi from '../assets/images/recommendations/1714317304719.jpg';
import danny from '../assets/images/recommendations/1623275886892.jpg';
import rajind from '../assets/images/recommendations/afb5b07a-2878-4d2b-bd96-8d8416c6289d.jpg';

const recommendations = [
  {
    id: 'mark',
    image: mark,
    name: 'Mark Bridgeman',
    recommendation: 'I worked with Pamodith while he was part of my support developer team, and he consistently demonstrated great problem-solving skills. His attention to detail and ability to deliver on time made him a valuable asset to our team. I highly recommend him for any software development projects.',
  },
  {
    id: 'danny',
    image: danny,
    name: 'Danieal Winning',
    recommendation: 'I had the opportunity to work with Pamodith on several projects, and he proved to be a strong developer with a keen understanding of technical challenges. His ability to collaborate and communicate clearly with the team made the development process much smoother.',
  },
  {
    id: 'rajind',
    image: rajind,
    name: 'Rajind Pamoda',
    recommendation: 'I had the pleasure of working with Pamodith when I was leading a development team. His technical expertise, enthusiasm, and collaborative mindset helped the team overcome many complex challenges. He is reliable, hardworking, and highly skilled in his field.',
  },
  {
    id: 'tharushi',
    image: tharushi,
    name: 'Tharushi Wickramaratne',
    recommendation: 'It is my pleasure to recommend Pamodith as an Associate Software Developer. During our collaboration, he consistently showed a strong grasp of coding principles and a genuine interest in improving his skills. His work ethic and approachability make him a great team member.',
  },
];

const RecommendationModal = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Function to handle modal close by clicking outside
  const closeModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedId(null);
    }
  };

  // Function to handle closing modal when 'x' icon is clicked
  const closeModalByX = () => {
    setSelectedId(null);
  };

  return (
    <div className="recommendation-modal" onClick={closeModal}>
      <div className="recommendation-list">
        {recommendations.map((rec) => (
          <motion.div
            key={rec.id}
            layoutId={rec.id}
            className="recommendation-item"
            onClick={() => setSelectedId(rec.id)}
          >
            <img src={rec.image} alt={rec.name} className="recommendation-image" />
            <div className="recommendation-text">
              <h3>{rec.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="modal-box"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              className="close-modal"
              onClick={closeModalByX}
            >
              X
            </motion.button>
            <motion.h3>{recommendations.find((rec) => rec.id === selectedId)?.name}</motion.h3>
            <motion.p>
              {recommendations.find((rec) => rec.id === selectedId)?.recommendation}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RecommendationModal;
