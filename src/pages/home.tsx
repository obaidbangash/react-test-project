/** @format */

import Sidebar from '../components/sidebar';
import { Col, Row } from 'react-bootstrap';
import ContactsPanel from '../components/ContactsPanel';
import { useState } from 'react';

const Home = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className={'panelWrapper'}>
      <Row className={'no-gutters'}>
        <Col className={`${sidebar ? 'sidebar_col show' : 'sidebar_col'}`}>
          <Sidebar />
          <div className="sidebar_btn" onClick={handleSidebar}>
            <img src="./assets/images/angle-right-solid.svg" alt="arrow" />
          </div>
        </Col>
        <Col>
          <div className={'contactsPanel_wrap'}>
            <ContactsPanel />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
