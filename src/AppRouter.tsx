import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { DofusPageUi } from './Pages/DofusPage/DofusPageUi';
import { ChatPageUi } from './Pages/ChatPage/ChatPageUi';
import { LauncherUi } from './Templates/LauncherUi/LauncherUi';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LauncherUi />} />
                <Route path='/dofus' element={<DofusPageUi />} />
                <Route path='/chat' element={<ChatPageUi />} />
                <Route path='*' element={<LauncherUi />} />
            </Routes>
        </Router>
    );
};
