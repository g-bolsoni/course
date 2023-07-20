// components/FaqItem.js
import { useState } from 'react';

interface FaqItemProps {
    question: string;
    answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="border-b border-gray-300 py-4">
      <div className="flex justify-between cursor-pointer" onClick={toggleOpen}>
        <span className="text-lg font-semibold">{question}</span>
        <span className="text-xl">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p className="mt-4 text-gray-700">{answer}</p>}
    </li>
  );
};

export default FaqItem;