import {
  Card,
  Col,
  Badge,
  Container,
  Dropdown,
  Form,
  Row,
  Button,
  Table,
} from "react-bootstrap";
import moment from "moment";
import { mdiInformationVariant } from "@mdi/js";
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

// attatchments
// createdAt
// date
// location_id
// notes
// screening_type
// status
// updatedAt
// user_id
// _id
const formattedDatetime = (date) => {
  return moment(date).format("MMM DD, YYYY hh:mm A");
};

export default function Results() {
  const [user, setUser] = useState({});
  const [screenings, setScreenings] = useState([]);
  const [locationId, setLocationId] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [screeningType, setScreeningType] = useState("");

  const updateLocation = (e) => {
    console.log(e.target.value);
    setLocationId(e.target.value);
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

  const getScreenings = async (e) => {
    try {
      const response = await HTTP({
        url: `/screenings`,
      });

      setScreenings(response.data);
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
      date,
      notes,
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
    }
  };

  useEffect(() => {
    getUser();
    getScreenings();
  }, []);

  const getBadgeColor = (color) => {
    let result = "primary";

    switch (color) {
      case "incomplete":
        result = "danger";
        break;
      case "pending":
        result = "warning";
        break;
      case "completed":
        result = "success";
        break;
    }

    return result;
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <Card className="app-card">
              <Card.Body className="d-flex align-items-center justify-content-between app-card-body">
                <h3 className="text-white">Screening Results</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md="12">
            <Card>
              <Card.Body>
                <Card.Title>Check Last Cancer Screening Results</Card.Title>
                <Card.Subtitle className="text-muted">
                  In this section, you will find essential health-related
                  information and data presented in a clear and organized
                  manner. The displayed data is designed to empower you with
                  insights into your health status, screening history, and
                  overall well-being. Below are key components of the displayed
                  data:
                </Card.Subtitle>
              </Card.Body>

              <Card.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Date</th>
                      <th className="text-end">Screening_type</th>
                      <th className="text-end">Requested At</th>
                      <th className="text-end"> </th>
                    </tr>
                  </thead>

                  <tbody>
                    {screenings.map((screening, index) => (
                      <tr key={index}>
                        <td>{screening["_id"]}</td>
                        <td className="text-center">
                          <Badge bg={getBadgeColor(screening["status"])}>
                            {screening["status"]}
                          </Badge>
                        </td>
                        <td className="text-center">
                          {formattedDatetime(screening["date"])}
                        </td>
                        <td className="text-end">
                          {screening["screening_type"]}
                        </td>
                        <td className="text-end">
                          {formattedDatetime(screening["createdAt"])}
                        </td>
                        <td className="text-center">
                          <Button
                            variant="outline-dark"
                            type="submit"
                            className="btn-block"
                            size="sm"
                          >
                            <span>Details</span>
                            <Icon path={mdiInformationVariant} size={1} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
