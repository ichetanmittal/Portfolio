import ReactDOM from  'react-dom/client'
import App from './App'
import './index.css'

// ReactDOM.render(<App/>, document.querySelector("#root"))  -- not using it since it is representing React 17
ReactDOM.createRoot(document.getElementById('root')).render(<App />);  // .render method is no longer supported with React 18 , it is switched to createRoot
