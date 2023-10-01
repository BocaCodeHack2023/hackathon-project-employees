import {
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Row,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import { mdiRocketLaunchOutline } from "@mdi/js";
import Icon from "@mdi/react";

import cancerTypes from "../utils/CancerTypes.json";
import "../styles/screenings.css";
import Sidebar from "../components/Sidebar";

export default function Screenings() {
  const [showSidebar, setShowSidebar] = useState(false);

  // console.log(cancerTypes)
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
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>

                <Form.Select
                  className="width-responsive-app"
                  aria-label="Type of Screening"
                >
                  {cancerTypes.map((cancer, index) => (
                    <option key={index}>{cancer}</option>
                  ))}
                </Form.Select>

                <div className="d-grid gap-2">
                  <Button variant="success" className="btn-block">
                    <Icon
                      path={mdiRocketLaunchOutline}
                      size={1}
                      color="white"
                    />
                    <span className="ml-5">Submit</span>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
