import React, { useState } from 'react';

import '../styles/components/Accordion.scss';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

function AccordionInfo(props) {
  const [selected, setsSelected] = useState(null);

  const toggle = (item) => {
    if (selected === item) {
      return setsSelected(null);
    }

    setsSelected(item);
  };
  return (
    <section className="accordion__wrapper">
      <div className="accordion__accordion">
        {data.map((item, index) => (
          <div className="accordion__item">
            <div
              className="accordion__titleAndContent"
              onClick={() => toggle(index)}
            >
              <h2 className="accordion__title">{item.question}</h2>
              <span>
                {selected === index ? (
                  <AiOutlineMinus className="accordion__icon" />
                ) : (
                  <AiOutlinePlus className="accordion__icon" />
                )}
              </span>
            </div>
            <div
              className={
                selected === index
                  ? 'accordion__content show'
                  : 'accordion__content'
              }
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const data = [
  {
    question: 'About ',
    answer:
      'Rick and Morty is an animated series that follows the exploits of a super scientist and his not-so-bright grandson.',
  },
  {
    question: 'Authors',
    answer: 'Created by Dan Harmon and Justin Roiland  ',
  },
  {
    question: 'Question 3',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, ipsam cum ',
  },
];
export default AccordionInfo;
