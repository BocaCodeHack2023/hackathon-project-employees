import { Col, Container, Form, Row } from "react-bootstrap";

export default function Login() {
  return (
    <>
      <Container>
        <Row>
          <Col sm="12" md="6">
            <img src="https://careerkarma.com/blog/wp-content/uploads/2022/08/sidebar-bootcamp-img.png" alt="Login" />
          </Col>
          <Col sm="12" md="6">
          <Form>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}