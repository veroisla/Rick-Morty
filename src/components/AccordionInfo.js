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
              <img src={item.imgUrl} alt="" />
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
    question: 'Rick Sanchez',
    answer:
      'A genius scientist and alcoholic whose inventions and experiments serve as the basis for the episodes. The grandfather of Morty Smith and Summer Smith, and the father of Beth. ',
  },
  {
    question: 'Morty Smith',
    answer:
      'Ricks impressionable and socially awkward teenage grandson who is often dragged along on his grandfathers escapades.',
  },
  {
    question: 'Jerry Smith ',
    answer:
      'Mortys insecure father, whose disapproval of Ricks influence on Morty only deepens his marital troubles with Beth.',
  },
  {
    question: 'Beth Smith',
    answer:
      ' Mortys holier-than-thou mother who is a cardiac surgeon for horses. Beth seems to have problems in her marriage with Jerry and usually considers leaving him for another guy.',
  },
  {
    question: 'Summer Smith',
    answer:
      'Mortys angst-ridden older sister who occasionally joins Rick on his adventures. ',
  },
];
export default AccordionInfo;
