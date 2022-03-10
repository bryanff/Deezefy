import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '@/Layout/Sidebar/Sidebar';
import Toolbar from '@mui/material/Toolbar';
import Header from '@/Layout/Header/Header';
import Main from '@/Layout/Main/Main';
import Box from '@mui/material/Box';
import React from 'react';
import './App.scss';
import SearchResultsPage from '@/Pages/search/results';

const primaryTextColor = '#fff';

function App() {
	return (
		<Router>
			<Box sx={{ display: 'flex' }}>
				<Header />
				<Sidebar />
				<Box
					component='main'
					sx={{
						flexGrow: 1,
						bgcolor: '#21252d',
						p: 3,
						color: primaryTextColor,
					}}
				>
					<Toolbar />
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/search/results' element={<SearchResultsPage />} />
						{/*<Route path='/artists' element={<Main />} />*/}
						{/*<Route path='/artists' element={<Main />} />*/}
						{/*<Route path='/products' element={<ProductPage />} />*/}
						{/*<Route path='/products/create' element={<CreateProductPage />} />*/}
						{/*<Route path='/reports' element={<ReportPage />} />*/}
						{/*<Route path='/about' element={<AboutPage />} />*/}
					</Routes>
				</Box>
			</Box>
		</Router>
	);
}

export default App;
