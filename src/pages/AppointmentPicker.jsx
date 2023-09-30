import { Card, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import cancerTypes from "../utils/CancerTypes.json"
import "../styles/appointmentPicker.css"

export default function AppointmentPicker() {

  // console.log(cancerTypes)
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <Card.Body className="d-flex align-items-center justify-content-between">
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