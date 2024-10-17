import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

import { HomeView } from "../home-view/home-view";
import { AboutView } from "../about-view/about-view";
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

            <Container className="page-content">
                <Row>
                    <Col>
                        <Routes>
                            {/* Route to Home */}
                            <Route path="/" element={<HomeView />} />

                            {/* Route to Staff */}
                            <Route path="/about" element={<AboutView />} />

                            {/* Route to Patient Forms */}
                            <Route path="/new-patient-forms" element={<FormsView />} />

                            {/* Route to Patient Education */}
                            <Route path="/patient-education" element={<EduView />} />

                            {/* Route to Massage Therapy */}
                            <Route path="/massage-therapy" element={<MassageView />} />

                            {/* Route to Contact */}
                            <Route path="/contact-us" element={<ContactView />} />
                        
                            {/* Redirect invalid paths to Home */}
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    )
};
