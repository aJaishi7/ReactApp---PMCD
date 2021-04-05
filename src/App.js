import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Style/style.css';
import './Style/custom_about.css';
import 'reactstrap/dist/reactstrap';
import RouteHandler from "./RouteHandler/RouteHandler";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <RouteHandler></RouteHandler>
            </BrowserRouter>

        </div>
    );
}

export default App;
