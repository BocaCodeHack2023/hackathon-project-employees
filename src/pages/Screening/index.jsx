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

import HTTP from "../../utils/http";
import cancerTypes from "../../utils/CancerTypes.json";
import "../../styles/screenings.css";
import Upcoming from "./Upcoming";

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
  const [locations, setLocations] = useState([]);
  const [locationId, setLocationId] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [screeningType, setScreeningType] = useState("");
  const [screenings, setScreenings] = useState([]);

  
  const updateLocation = (e) => {
    console.log(e.target.value);
    setLocationId(e.target.value);
  };

  const getScreenings = async (e) => {
    try {
      const response = await HTTP({
        url: `/screenings`,
      });
      const pending = response.data.filter((data) => data.status === "pending")
      setScreenings(pending);
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

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

  const getLocations = async (e) => {
    try {
      const response = await HTTP({
        url: `/locations`,
      });

      setLocations(response.data);
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  const createScreening = async (e) => {
    e.preventDefault();

    const data = {
      user_id: user["_id"],
      location_id: locationId,
      screening_type: screeningType,
      status: "pending",
      date,
      notes
    };

    try {
      const response = await HTTP({
        url: `/screenings`,
        method: "POST",
        data,
      });

      console.log(response.data);
      if (response?.data?.["_id"]) {
        setUser(response.data);
      }
    } catch (error) {
      console.log("ERROR: " + error);
    } finally{
      getScreenings();
    }
  };

  useEffect(() => {
    console.log("Use Effect");
    getUser();
    getLocations();
    getScreenings()
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <Card className="app-card">
              <Card.Body className="d-flex align-items-center justify-content-between app-card-body-header">
                <h3 className="text-white">Make A Pre-Screening Appointment</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md="4">
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body className="app-card-body-real">
                <Form onSubmit={createScreening}>
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

                    <Col md="12" className="mt-3">
                      <Form.Label>Screening Type</Form.Label>

                      <Form.Select onChange={(e) => setScreeningType(e.target.value)}>
                        {cancerTypes.map((cancer, index) => (
                          <option key={index}>{cancer}</option>
                        ))}
                      </Form.Select>
                    </Col>
                    <Col md="12" className="mt-3">
                      <Form.Label>Date and Time</Form.Label>
                      
                      <input onChange={(e) => setDate(e.target.value)} className="form-control" type="datetime-local" />
                    </Col>

                    <Col md="12" className="mt-3">
                      <Form.Label>Screening Location</Form.Label>

                      <Form.Select onChange={updateLocation}>
                        <option>-</option>
                        {locations.map((element, index) => (
                          <option key={index} value={element["_id"]}>
                            {element.name} {element.address_street}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Row>

                  <Form.Group className="mt-3" controlId="formBasicEmail">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control as="textarea" style={{ height: "100px" }} />
                    <Form.Text onChange={(e) => setNotes(e.target.value)} className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <div className="d-grid gap-2 mt-3">
                    <Button
                      variant="danger"
                      type="submit"
                      className="btn-block"
                    >
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

          <Col md="8">
            <Upcoming screenings={screenings}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}
