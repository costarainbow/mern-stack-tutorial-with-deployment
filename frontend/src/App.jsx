import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import UpdateModal from './components/UpdateModal';
import Toast from './components/Toast';

function App() {
	return (
		<div className='mx-auto bg-slate-900 min-h-screen'>
			<Navbar />
			<UpdateModal />
			<Toast />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/create' element={<CreatePage />} />
			</Routes>
		</div>
	);
}

export default App
