import { useNavigate } from 'react-router-dom';
import { SideBarUi } from '../presentation/SideBarUi';
import { PropsType } from '../../types';

const SideBarLogic = () => {
    const navigate = useNavigate();

    const gamesButton: PropsType[] = [
        {
            index: 'dofus',
            type: 'button',
            onClick: () => {
                navigate('/dofus');
            },
            image: 'public/Dofus.jpg',
        },
        {
            index: 'dofusbeta',
            type: 'button',
            onClick: () => {
                navigate('/dofusbeta');
            },
            image: 'public/dofusbeta.jpg',
        },
        {
            index: 'retro',
            type: 'button',
            onClick: () => {
                navigate('/dofusretro');
            },
            image: 'public/dofusretro.jpg',
        },
        {
            index: 'wakfu',
            type: 'button',
            onClick: () => {
                navigate('/wakfu');
            },
            image: 'public/wakfu.jpg',
        },
        {
            index: 'addnewgame',
            type: 'button',
            onClick: () => {
                navigate('/addnewgame');
            },
            image: 'https://www.trialp.com/wp-content/uploads/2019/03/Logo-plus.png',
        },
    ];
    return <SideBarUi gamesButton={gamesButton} />;
};

export { SideBarLogic as SideBar };
