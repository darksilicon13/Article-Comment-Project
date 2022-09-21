import {Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainPage from './pages/Main';
import PostingPage from './pages/Posting';
import PostPage from './pages/Post';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/post/:id" element={<PostPage/>}/>
        <Route path="/posting" element={<PostingPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
