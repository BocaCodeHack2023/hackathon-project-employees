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
import "../../styles/screenings.css";
import {formattedDatetime} from "../Results"

export default function Upcoming() {

  const [screenings, setScreenings] = useState([]);

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

useEffect(() => {
  getScreenings()
},[])
  return (
    <>
      <Container id="upcomingAppt">
        <Row>
          <h1 className="mx-auto w-auto pb-4">Upcoming Appointments </h1>
        </Row>
        {screenings.map((data) => (
          <section id="screeningHistory" className="mx-auto">
        <Row>
          <Col>{data.screening_type}</Col>
          <Col className="text-end">{formattedDatetime(data.date)}</Col>
        </Row>

        <Row>
          <Col>***add Address endpoint***</Col>
        </Row>
          </section>

        ))}
      </Container>
    </>

  )
}
