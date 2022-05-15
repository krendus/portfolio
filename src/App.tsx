import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/not-found';
import Resume from './pages/resume';
import ResumePdf from './pages/resume-pdf';

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
      <Routes>
        <Route path='/' element={<Resume />} />
        <Route path='/pdf' element={<ResumePdf />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
