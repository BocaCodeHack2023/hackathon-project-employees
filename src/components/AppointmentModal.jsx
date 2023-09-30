import { Form, Modal, Row } from "react-bootstrap";

export default function AppointmentModal() {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  }

  return (
    <>
      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Picker</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row}>
              <Col md="6">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" name="Fname" placeholder="First name" />
              </Col>
              <Col md="6">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name" name="Lname" placeholder="Last name" />
              </Col>
            </Form.Group>
            <Form.Group>
              <Form.Label>Insurance</Form.Label>
              <Form.Control type="text" name="insurance" placeholder="Insurance" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control type="phone" name="phone" placeholder="phone" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}