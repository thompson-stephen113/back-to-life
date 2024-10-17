// ContactView
export const ContactView = () => {
    return (
        <div className="contact-view">
            <div className="contact-info">
                <h1>CONTACT US</h1>

                {/* Office Contact Info */}
                <div className="contact-item">
                    <h2>Back to Life Chiropractic Center</h2>

                    <span>Address: </span>
                    <a
                        className="contact-link"
                        href="https://www.google.com/maps/place/Back+To+Life+Chiropractic+Center/@33.042487,-84.9855287,17z/data=!4m15!1m8!3m7!1s0x888b545f731bce73:0xbffcdeffeb728db5!2s1505+Lafayette+Pkwy,+LaGrange,+GA+30241!3b1!8m2!3d33.042487!4d-84.9829538!16s%2Fg%2F11c27tbqz_!3m5!1s0x888b5458d04e73f9:0x496d0c97146f805f!8m2!3d33.042489!4d-84.983016!16s%2Fg%2F1tdygdd9?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                    >    
                        1505 Lafayette Parkway, LaGrange, Georgia 30241, United States
                    </a>
                    
                    <br />

                    <span>Phone: </span>
                    <a
                        className="contact-link"
                        href="tel:7068825737"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        (706) 882-5737
                    </a>

                    <br />

                    <span>Email: </span>
                    <a
                        className="contact-link"
                        href="mailto:contactus@btlcc.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        contactus@btlcc.com
                    </a>
                </div>

                {/* Office Hours */}
                <div className="contact-item">
                    <h2>Hours</h2>

                    <table className="hours-table">
                        <tr className="hours-row">
                            <td className="day-cell">Monday</td>
                            <td className="hours-cell">9 AM - 1 PM, 3 PM - 6PM</td>
                        </tr>

                        <tr className="hours-row">
                            <td className="day-cell">Tuesday</td>
                            <td className="hours-cell">7 AM - 1 PM</td>
                        </tr>

                        <tr className="hours-row">
                            <td className="day-cell">Wednesday</td>
                            <td className="hours-cell">9 AM - 1 PM, 3 PM - 6PM</td>
                        </tr>

                        <tr className="hours-row">
                            <td className="day-cell">Thursday</td>
                            <td className="hours-cell">9 AM - 1 PM</td>
                        </tr>

                        <tr className="hours-row">
                            <td className="day-cell">Friday</td>
                            <td className="hours-cell">9 AM - 1 PM, 3 PM - 6PM</td>
                        </tr>

                        <tr className="hours-row">
                            <td className="day-cell">Saturday</td>
                            <td className="hours-cell">Closed</td>
                        </tr>

                        <tr className="hours-row">
                            <td className="day-cell">Sunday</td>
                            <td className="hours-cell">Closed</td>
                        </tr>                                                                                                                                                
                    </table>
                </div>

                {/* Call to Action */}
                <div className="contact-item">
                    <h2>Visit or Call to Schedule an Appointment</h2>

                    <p>Please contact us directly with any questions, comments, or scheduling inquiries you may have.</p>

                    <p>Email any documents for your appointment <a className="contact-link" href="mailto:contactus@btlcc.com">here</a>.</p>
                </div>
            </div>
        </div>
    )
}
