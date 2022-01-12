import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import Tag from "../tag";
import {Row, Col, Form, Button} from "react-bootstrap";

function Sidebar() {


    return (
        <div className={'sidebar'}>
            <div className={'sidebar_head'}>
                {/* Menu Btn */}
                <div className={'menu_btn'}>
                    <span/>
                    <span/>
                    <span/>
                </div>

                {/*   Logo */}
                <div className={'logo'}>
                    <Link to={"#"}>
                        Audience
                    </Link>
                </div>

                {/* Contacts Count */}
                <span className={'contacts_count'}>100 Contacts</span>
            </div>
            {/*  Sidebar Header End  */}

            <div className={'sidebar_body'}>
                <div className={'body_cols'}>
                    <h6>Include Tags</h6>
                    <div className={'tags_col'}>
                        <Tag
                            title={'Greetings'}
                        />
                        <Tag
                            title={'Greetings'}
                            selected={true}
                        />
                        <Tag
                            title={'Greetings'}
                        />
                        <Tag
                            title={'Greetings'}
                            trash={true}
                            selected={true}
                        />
                        <Tag
                            title={'Greetings'}
                        />
                    </div>
                </div>
                <div className={'body_cols'}>
                    <h6>Exclude Tags</h6>
                    <div className={'tags_col'}>
                        <Tag
                            title={'Greetings'}
                        />
                        <Tag
                            title={'Greetings'}
                            selected={true}
                        />
                        <Tag
                            title={'Greetings'}
                        />
                        <Tag
                            title={'Greetings'}
                            selected={true}
                        />
                        <Tag
                            title={'Greetings'}
                        />
                    </div>
                </div>
                <div className="body_cols">
                    <h6>Message Sent:</h6>
                    <Row className="g-2">
                        <Col>
                            <Form.Control type="number" placeholder="Min"/>
                        </Col>
                        <Col>
                            <Form.Control type="number" placeholder="Max"/>
                        </Col>
                    </Row>
                </div>
                <div className="body_cols">
                    <h6>Message Received:</h6>
                    <Row className="g-2">
                        <Col>
                            <Form.Control type="number" placeholder="Min"/>
                        </Col>
                        <Col>
                            <Form.Control type="number" placeholder="Max"/>
                        </Col>
                    </Row>
                </div>
            </div>
            {/*    Sidebar Body End*/}

            <div className={'sidebar_footer'}>
                <Button variant={'success'}>Save filters</Button>
            </div>
        </div>
    );
}

export default Sidebar;
