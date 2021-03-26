import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/custom/style.css';
import '../src/custom/custom_about.css';
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
