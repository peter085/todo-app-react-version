import  ReactDOM  from "react-dom/client";
import { createRoot } from 'react-dom';
import Card from './components/card'
import './components/index.css'




const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    
    <Card />
  </div>
);
