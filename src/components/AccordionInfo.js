import React, { useState } from 'react';

import '../styles/components/Accordion.scss';

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
              <span>{selected === index ? '-' : '+'}</span>
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
    question: 'Question 1',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, ipsam cum ',
  },
  {
    question: 'Question 2',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, ipsam cum ',
  },
  {
    question: 'Question 3',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, ipsam cum ',
  },
];
export default AccordionInfo;
