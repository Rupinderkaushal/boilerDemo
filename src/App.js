import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './common';
import Section from './components/section';

function App() {
  return (
   
    <Layout>
      <Routes>
        <Route path='/' element={<Section/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
