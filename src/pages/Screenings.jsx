import {
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Row,
  Button,
} from "react-bootstrap";
import { mdiRocketLaunchOutline } from "@mdi/js";
import Icon from "@mdi/react";
import {
  useState,
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

import HTTP from "./../utils/http";
import cancerTypes from "../utils/CancerTypes.json";
import "../styles/screenings.css";
import Sidebar from "../components/Sidebar";

// id: string
// user_id: string
// location_id: string
// screening_type: enum
// date: date
// status: enum[completed, pending, incomplete]
// created_at: dob
// updated_at: dob
// notes: text
// attachments
export default function Screenings() {
  const [user, setUser] = useState({});

  const getUser = async (e) => {
    try {
      const response = await HTTP({
        url: `/users/${process.env.REACT_APP_USER_ID}`,
      });

      console.log(response.data);
      if (response?.data?.["_id"]) {
        setUser(response.data);
      }
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  useEffect(() => {
    console.log("Use Effect");
    getUser();
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <Card className="app-card">
              <Card.Body className="d-flex align-items-center justify-content-between app-card-body">
                <h3 className="text-white">Make A Pre-Screening Appointment</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Text></Card.Text>
              </Card.Body>

              <Card.Body>
                <Form>
                  <Row>
                    <Col md="6">
                      <Form.Label>Patient Name</Form.Label>

                      <Form.Control
                        value={`${user.name} ${user.last_name}`}
                        disabled
                      ></Form.Control>
                    </Col>
                    <Col md="6">
                      <Form.Label>Email Address</Form.Label>

                      <Form.Control value={user.email} disabled></Form.Control>
                    </Col>

                    <Col md="6" className="mt-3">
                      <Form.Label>Email address</Form.Label>

                      <Form.Select aria-label="Type of Screening">
                        {cancerTypes.map((cancer, index) => (
                          <option key={index}>{cancer}</option>
                        ))}
                      </Form.Select>
                    </Col>
                    <Col md="6" className="mt-3">
                      <Form.Label>Date</Form.Label>

                      <Form.Select aria-label="Type of Screening">
                        {cancerTypes.map((cancer, index) => (
                          <option key={index}>{cancer}</option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Row>

                  <Form.Group className="mt-3" controlId="formBasicEmail">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control as="textarea" style={{ height: "100px" }} />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <div className="d-grid gap-2 mt-3">
                    <Button variant="success" className="btn-block">
                      <Icon
                        path={mdiRocketLaunchOutline}
                        size={1}
                        color="white"
                      />
                      <span className="ml-5">Submit</span>
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
