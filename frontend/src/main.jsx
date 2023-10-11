import { render } from 'preact'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

render(
    (<BrowserRouter>
        <App />
    </BrowserRouter>)
    , document.getElementById('app'))