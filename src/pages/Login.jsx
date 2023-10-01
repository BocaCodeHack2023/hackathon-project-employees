import { useState, createContext, useContext, useReducer } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HTTP from "./../utils/http";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  function handleToggleShowPassword() {
    setShowPassword(!showPassword);
  }

  const handleChange = (e) => {
    setUsername(e.target.value); // Update the username state with the new value
  };

  const createSession = async (e) => {
    e.preventDefault(); // Prevents the page from reloading

    try {
      const response = await HTTP({
        url: "/users/6518af7c2927278899a7137a",
      });

      console.log(response.data);
      if (response?.data?.["_id"]) {
        navigate("/profile");
      }
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col sm="12" md="8" className="p-0 d-flex">
          <img
            className="w-100"
            src="https://www.chcfl.org/wp-content/uploads/2015/12/American-Cancer-Society.jpg"
          />
        </Col>

        <Col sm="12" md="4" className="p-0 d-flex">
          <div className="d-flex justify-content-center align-items-center w-100">
            <div className="w-75">
              <Form onSubmit={createSession}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    style={{ width: "100%" }}
                    type="text"
                    name="username"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <div>
                    <Form.Control
                      style={{ width: "100%" }}
                      className="w-100"
                      type={showPassword ? "text" : "password"}
                      name="password"
                    />
                    <Form.Check
                      type="checkbox"
                      id="show-password-checkbox"
                      onChange={handleToggleShowPassword}
                      label="Show password"
                      className="mb-0 align-self-center"
                    />
                  </div>
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100">
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
