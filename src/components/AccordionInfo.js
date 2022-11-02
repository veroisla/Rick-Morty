import Accordion from 'react-bootstrap/Accordion';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/components/Accordion.scss';

function AccordionInfo(props) {
  return (
    <section className="accordion">
      {' '}
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>About</Accordion.Header>
          <Accordion.Body>fafs</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Characters</Accordion.Header>
          <Accordion.Body>fdasf</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

export default AccordionInfo;

// --> https://react-bootstrap.github.io/components/accordion/
