import {
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Badge,
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
import { formattedDatetime } from "../Results"

export default function Upcoming({screenings}) {


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
  }

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
              <Col>{data.address}</Col>
              <Col className="d-flex justify-content-end align-items-center">
                <Badge  className=" bg-warning">
                  {data.status}
                </Badge></Col>
            </Row>
          </section>

        ))}
      </Container>
    </>

  )
}
