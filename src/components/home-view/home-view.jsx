import { Card } from "react-bootstrap";

import "./home-view.scss";

// HomeView
export const HomeView = () => {
    return (
        <div className="home-view">
            {/* Welcome Landing */}
            <div className="welcome-landing">
                <h1>WELCOME!</h1>

                <p><span>We're committed to your health!</span></p>

                <p>Visit our clinic for effectual spinal adjustments!</p>
            </div>

            {/* Our Services */}
            <div className="services-info">
                <h1>OUR SERVICES</h1>
                
                <div className="services-card-grid">
                    <Card className="services-item shadow">
                        <Card.Body>
                            <Card.Title className="services-title">Chiropractic Care</Card.Title>

                            <p className="services-desc">
                                Our experienced chiropractors are knowledgeable in spinal and chiropractic adjustments. The purpose of spinal adjustments is to return the spine to a natural state of health and to reduce pain, muscle spasms, and nerve irritation, so you can enjoy your life pain free.
                            </p>
                        </Card.Body>
                    </Card>

                    <Card className="services-item shadow">
                        <Card.Body>
                            <Card.Title className="services-title">Auto Accident Injuries</Card.Title>

                            <p className="services-desc">
                                Our team understand the stress and pain patients are in following personal injury accidents. We analyze, diagnose, and create an individualized treatment plan for whiplash and soft tissue injuries. We will thoroughly explain your treatment and update your insurance agency or attorney on your behalf.
                            </p>
                        </Card.Body>
                    </Card>

                    <Card className="services-item shadow">
                        <Card.Body>
                            <Card.Title className="services-title">Massage Therapy</Card.Title>

                            <p className="services-desc">
                                Our licensed massage therapist treats clients by using touch to manipulate the muscles and other soft tissues of the body. With her touch, she relieves pain, helps heal injuries, improves circulation, relieves stress, increases relaxation, and aids in the general wellness of clients.
                            </p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
