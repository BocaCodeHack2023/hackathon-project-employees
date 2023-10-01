import { Card, Container, Dropdown, Button, ListGroup, Form, Row, Col } from "react-bootstrap";
import "../styles/userCard.css"
import { useEffect, useState } from "react";
import HTTP from "./../utils/http";
import "../styles/userInfo.css"

export default function UserInfo() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [user, setUser] = useState({});

  console.log(user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await HTTP({
          url: "/users/6518af7c2927278899a7137a",
        });

        console.log(response.data);
        setUser(response.data);
        if (response?.data?.["_id"]) {
          // navigate("/profile");
        }
      } catch (error) {
        console.log("ERROR: " + error);
      }
    };

    fetchUser();
  }, []);

  // const updateUser = async () => {
  //   try {
  //     const response = await HTTP({
  //       url: "/users/6518af7c2927278899a7137a",
  //       method: "PUT",
  //       data: {

  //       }

  return (

    <>
      <Card className="w-50 mt-5 user-info-card">
        <Card.Header as="h2" className="user-info-card-header">
          Contact Info
        </Card.Header>
        <Card.Body className="p-4 user-info-card-body">
          <Form>
            <Row className="mb-3">
              <Col md="6" className="p-0">
                <Form.Control as="p" className='profile-contact-text mb-0'>
                  {user.phone}
                </Form.Control>
              </Col>
              <Col md="6" className="p-0 ps-2">
                <Form.Control as="p" className='profile-contact-text mb-0'>
                  {user.email}
                </Form.Control>
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Control as="p" className='profile-contact-text mb-0'>
                {user.address_street}
              </Form.Control>
            </Row>
            <Row className="mb-2">
              <Col md="4" className="p-0">
                <Form.Control as="p" className='profile-contact-text mb-0'>
                  {user.address_state}
                </Form.Control>
              </Col>
              <Col md="4" className="p-0 ps-2">
                <Form.Control as="p" className='profile-contact-text mb-0'>
                  {user.address_city}
                </Form.Control>
              </Col>
              <Col md="4" className="p-0 ps-2">
                <Form.Control as="p" className='profile-contact-text mb-0'>
                  {user.address_zip}
                </Form.Control>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card >
    </>

  )
}
