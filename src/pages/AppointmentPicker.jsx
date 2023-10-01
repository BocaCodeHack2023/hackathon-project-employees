import { Card, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import cancerTypes from "../utils/CancerTypes.json"
import "../styles/appointmentPicker.css"
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function AppointmentPicker() {
  const [showSidebar, setShowSidebar] = useState(false);

  // console.log(cancerTypes)
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm="2">
            <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          </Col>
          <Col sm="10">
            <Card className="app-card">
              <Card.Body className="d-flex align-items-center justify-content-between app-card-body">
                <h1 className="font-size-app">
                  Make A Pre-Screening Appointment
                </h1>
                <Form.Select className="width-responsive-app" aria-label="Type of Screening">
                  {cancerTypes.map((cancer, index) => (
                    <option key={index}>{cancer}</option>
                  ))}
                </Form.Select>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}