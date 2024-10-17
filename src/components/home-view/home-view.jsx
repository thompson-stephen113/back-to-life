// HomeView
export const HomeView = () => {
    return (
        <div className="home-view">
            {/* Welcome Landing */}
            <div className="welcome-landing">
                <h1>WELCOME</h1>

                <p>
                    <span>We're committed to your health!</span>
                </p>

                <p>Visit our clinic for effectual spinal adjustments!</p>
            </div>

            {/* Our Services */}
            <div className="services-info">
                <h1>OUR SERVICES</h1>

                <div className="services-item">
                    <h2>Chiropractic Care</h2>

                    <p className="services-desc">
                        Our experienced chiropractors are knowledgeable in spinal and chiropractic adjustments. The purpose of spinal adjustments is to return the spine to a natural state of health and to reduce pain, muscle spasms, and nerve irritation, so you can enjoy your life pain free.
                    </p>
                </div>

                <div className="services-item">
                    <h2>Auto Accident Injuries</h2>

                    <p className="services-desc">
                        Our team understand the stress and pain patients are in following personal injury accidents. We analyze, diagnose, and create an individualized treatment plan for whiplash and soft tissue injuries. We will thoroughly explain your treatment and update your insurance agency or attorney on your behalf.
                    </p>
                </div>

                <div className="services-item">
                    <h2>Massage Therapy</h2>

                    <p className="services-desc">
                        Our licensed massage therapist treats clients by using touch to manipulate the muscles and other soft tissues of the body. With her touch, she relieves pain, helps heal injuries, improves circulation, relieves stress, increases relaxation, and aids in the general wellness of clients.
                    </p>
                </div>
            </div>
        </div>
    )
}
