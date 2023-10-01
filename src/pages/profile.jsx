
import { Col, Container, Row } from "react-bootstrap";
import UserCard from "../components/userCard";
import UserInfo from "../components/userInfo";

export default function EmployeeProfile() {
  return (
    <>
      <Container fluid className="w-100 h-100 m-auto p-0">
        <div className="d-flex align-items-center" style={{ minHeight: '100vh' }}>
          <div className="w-100">
            <Row>
              <Col sm="12" className="p-0 d-flex justify-content-center">
                <UserCard />
              </Col>
              <Col sm="12" className="p-0 d-flex justify-content-center">
                <UserInfo />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
}
