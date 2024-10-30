import { Card, Figure } from "react-bootstrap";

import placeholder from "../../../files/img/person-placeholder.png"

// AboutView
export const AboutView = () => {
    return (
        <div className="about-view">
            {/* About Us */}
            <div className="about-info">
                <h1>ABOUT US</h1>
                
                <div className="about-grid">
                    <Card className="about-item shadow">
                        <Card.Body>
                            <h2>The Importance of Your Health</h2>

                            <p className="about-desc">
                                Our chiropractor puts your specific needs first. We are proud to provide a high quality level of customer service, chiropractic experience, and commitment to health and wellness to all our patients. Our goal is to improve your lifestyle by caring for your health.
                            </p>    
                        </Card.Body>
                    </Card>

                    <Card className="about-item shadow">
                        <Card.Body>
                            <h2>Experienced Knowledge</h2>

                            <p className="about-desc">
                                With years of experience, our chiropractors are capable of analyzing your body and creating a custom pain relief and rehabilitation plan to benefit your health. We understand the importance of educating you on chiropractic care so that you can heal quickly.
                            </p>
                        </Card.Body>
                    </Card>

                    <Card className="about-item shadow">
                        <Card.Body>
                            <h2>Chiropractors Who Care</h2>

                            <p className="about-desc">
                                Not only will our team treat your existing conditions, we strive to prevent pain and illness from reoccurring. We strive to help you improve your quality of life, achieve your wellness goals, and heal your body to live your best life possible.
                            </p>
                        </Card.Body>
                    </Card>

                    <Card className="about-item shadow">
                        <Card.Body>
                            <h2>Walk-In Clinic</h2>

                            <p className="about-desc">
                                We want to be here for the convenience of the patient. After the initial new patient appointment, patients will no longer need to schedule appointments.
                            </p>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            {/* Meet our Staff */}
            <div className="staff-info">
                <h1>MEET OUR STAFF</h1>

                <div className="staff-grid">
                    <div className="staff-item">
                        <h2>Dr. Tammi Kaminsky</h2>
                        <h3>President/Owner</h3>

                        <Figure className="figure-wrapper">
                            <Figure.Image
                                src={placeholder}
                                className="staff-img"
                                alt="staff member"
                            />
                        </Figure>

                        <div className="staff-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className="staff-item">
                        <h2>Dr. Rob Stevens</h2>
                        <h3>Chiropractor</h3>

                        <Figure className="figure-wrapper">
                            <Figure.Image
                                src={placeholder}
                                className="staff-img"
                                alt="staff member"
                            />
                        </Figure>

                        <div className="staff-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className="staff-item">
                        <h2>Lorem Ipsum</h2>
                        <h3>Lorem Ipsum</h3>

                        <Figure className="figure-wrapper">
                            <Figure.Image
                                src={placeholder}
                                className="staff-img"
                                alt="staff member"
                            />
                        </Figure>

                        <div className="staff-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className="staff-item">
                        <h2>Lorem Ipsum</h2>
                        <h3>Lorem Ipsum</h3>

                        <Figure className="figure-wrapper">
                            <Figure.Image
                                src={placeholder}
                                className="staff-img"
                                alt="staff member"
                            />
                        </Figure>

                        <div className="staff-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className="staff-item">
                        <h2>Lorem Ipsum</h2>
                        <h3>Lorem Ipsum</h3>

                        <Figure className="figure-wrapper">
                            <Figure.Image
                                src={placeholder}
                                className="staff-img"
                                alt="staff member"
                            />
                        </Figure>

                        <div className="staff-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className="staff-item">
                        <h2>Lorem Ipsum</h2>
                        <h3>Lorem Ipsum</h3>

                        <Figure className="figure-wrapper">
                            <Figure.Image
                                src={placeholder}
                                className="staff-img"
                                alt="staff member"
                            />
                        </Figure>

                        <div className="staff-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className="staff-item">
                        <h2>Lorem Ipsum</h2>
                        <h3>Lorem Ipsum</h3>

                        <Figure className="figure-wrapper">
                            <Figure.Image
                                src={placeholder}
                                className="staff-img"
                                alt="staff member"
                            />
                        </Figure>

                        <div className="staff-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
