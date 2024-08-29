import { createRoot } from "react-dom/client";
import { Container } from "react-bootstrap";

import { MainView } from "./components/main-view/main-view";
import "./index.scss";


// Main component
const BacktoLifeApplication = () => {
    return (
        <Container fluid>
            <MainView />
        </Container>
    );
};

// Finds root of the app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render app in the root DOM element
root.render(<BacktoLifeApplication />);