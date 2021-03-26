import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/custom/style.css';
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
