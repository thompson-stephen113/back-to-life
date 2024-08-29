import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

import { HomeView } from "../home-view/home-view";
import { StaffView } from "../staff-view/staff-view";
import { FormsView } from "../forms-view/forms-view";
import { EduView } from "../edu-view/edu-view";
import { MassageView } from "../massage-view/massage-view";
import { ContactView } from "../contact-view/contact-view";
import { NavigationBar} from "../navigation-bar/navigation-bar";
import "./main-view.scss";

// MainView Component
export const MainView = () => {
    return (
        <BrowserRouter>
            <NavigationBar />

            <Container>
                <Row>
                    <Routes>
                        {/* Route to Home */}
                        <Route
                            path="/"
                            element={
                                <Col>
                                    <HomeView />
                                </Col>
                            }
                        />

                        {/* Route to Staff */}
                        <Route
                            path="/meet-our-staff"
                            element={
                                <Col>
                                    <StaffView />
                                </Col>
                            }
                        />

                        {/* Route to Patient Forms */}
                        <Route
                            path="/new-patient-forms"
                            element={
                                <Col>
                                    <FormsView />
                                </Col>
                            }
                        />

                        {/* Route to Patient Education */}
                        <Route
                            path="/patient-education"
                            element={
                                <Col>
                                    <EduView />
                                </Col>
                            }
                        />

                        {/* Route to Massage Therapy */}
                        <Route
                            path="massage-therapy"
                            element={
                                <Col>
                                    <MassageView />
                                </Col>
                            }
                        />

                        {/* Route to Contact */}
                        <Route
                            path="contact-us"
                            element={
                                <Col>
                                    <ContactView />
                                </Col>
                            }
                        />
                    </Routes>
                </Row>
            </Container>
        </BrowserRouter>
    )
};
