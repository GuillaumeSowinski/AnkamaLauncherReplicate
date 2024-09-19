import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './Organisms/Header/business/HeaderLogic';
import { DofusPageUi } from './Pages/DofusPage/DofusPageUi';
import { ChatPageUi } from './Pages/ChatPage/ChatPageUi';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Header />} />
                <Route path='/dofus' element={<DofusPageUi />} />
                <Route path='/chat' element={<ChatPageUi />} />
                <Route path='*' element={<Header />} />
            </Routes>
        </Router>
    );
};
