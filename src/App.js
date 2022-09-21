import {Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainPage from './pages/Main';
import PostingPage from './pages/Posting';
import PostsPage from './pages/Posts';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/posts" element={<PostsPage/>}/>
        <Route path="/posting" element={<PostingPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
