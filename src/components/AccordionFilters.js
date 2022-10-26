import Accordion from 'react-bootstrap/Accordion';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function AccordionFilters(props) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Species</Accordion.Header>
        <Accordion.Body>fafs</Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Status</Accordion.Header>
        <Accordion.Body>fdasf</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionFilters;

// --> https://react-bootstrap.github.io/components/accordion/
