import { PropsType } from '../../types';
import { HeaderUi } from '../presentation/HeaderUi';
import { useNavigate } from 'react-router-dom';

const HeaderLogic = () => {
    const navigate = useNavigate();

    const featuresButton: PropsType[] = [
        {
            index: 'krozmoz',
            type: 'button',
            onClick: () => {
                navigate('/krosmoz');
            },
            image: 'public/krosmoz.jpg',
        },
        {
            index: 'games',
            type: 'button',
            onClick: () => {
                navigate('/games');
            },
            image: 'public/jeu.jpg',
        },
        {
            index: 'video',
            type: 'button',
            onClick: () => {
                navigate('/video');
            },
            image: 'public/video.jpg',
        },
        {
            index: 'Stream',
            type: 'button',
            onClick: () => {
                navigate('/stream');
            },
            image: 'public/Stream.jpg',
        },
        {
            index: 'webtoon',
            type: 'button',
            onClick: () => {
                navigate('/webtoon');
            },
            image: 'public/webtoon.jpg',
        },
        {
            index: 'wallpapper',
            type: 'button',
            onClick: () => {
                navigate('/wallpapper');
            },
            image: 'public/wallpapper.jpg',
        },
        {
            index: 'shop',
            type: 'button',
            onClick: () => {
                navigate('/shop');
            },
            image: 'public/shop.jpg',
        },
    ];

    const featuresButton2: PropsType[] = [
        {
            index: 'event',
            type: 'button',
            onClick: () => {
                navigate('/event');
            },
            image: 'public/event.jpg',
        },
    ];

    const featuresButton3: PropsType[] = [
        {
            index: 'chat',
            type: 'button',
            onClick: () => {
                navigate('/chat');
            },
            image: 'public/chat.jpg',
        },
        {
            index: 'settings',
            type: 'button',
            onClick: () => {
                navigate('/settings');
            },
            image: 'public/settings.jpg',
        },
        {
            index: 'friendlist',
            type: 'button',
            onClick: () => {
                navigate('/friendlist');
            },
            image: 'public/friendlist.jpg',
        },
    ];

    return (
        <HeaderUi
            featuresButton={featuresButton}
            featuresButton2={featuresButton2}
            featuresButton3={featuresButton3}
        />
    );
};

export { HeaderLogic as Header };
