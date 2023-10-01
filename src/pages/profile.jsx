
import { Col, Container, Row } from "react-bootstrap";
import UserCard from "../components/userCard";
import UserInfo from "../components/userInfo";

export default function EmployeeProfile() {
  return (
    <>
      <Container fluid className="">
        <h1>Profile</h1>
        <Row>
          <Col sm="12" className="p-0 d-flex justify-content-center">
            <UserCard />
          </Col>
          <Col sm="12" className="p-0 d-flex">
            <UserInfo />
          </Col>
        </Row>
      </Container>
    </>
  );
}
