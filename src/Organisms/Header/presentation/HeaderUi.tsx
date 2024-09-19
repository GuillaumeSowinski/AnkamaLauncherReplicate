import { useEffect, useState } from 'react';
import { Avatar } from '../../../Atoms/Avatar/business/AvatarLogic';
import { ButtonAvatar } from '../../../Molecules/ButtonAvatar/presentation/ButtonAvatarUi';
import { AvatarButtonType } from '../../types';

interface PropsType {
    featuresButton: AvatarButtonType[];
    featuresButton2: AvatarButtonType[];
    featuresButton3: AvatarButtonType[];
    gamesButton: AvatarButtonType[];
}

export const HeaderUi = ({
    featuresButton,
    featuresButton2,
    featuresButton3,
    gamesButton,
}: PropsType) => {
    const useAvatarImage = () => {
        const [avatarImage, setAvatarImage] = useState<string>('');

        useEffect(() => {
            const path = window.location.pathname;

            switch (path) {
                case '/dofus':
                    setAvatarImage('Pages/DofusPage.jpg');
                    break;
                case '/dofusbeta':
                    setAvatarImage('Pages/DofusBetaPage.jpg');
                    break;
                case '/dofusretro':
                    setAvatarImage('Pages/DofusRetroPage.jpg');
                    break;
                case '/wakfu':
                    setAvatarImage('Pages/WakfuPage.jpg');
                    break;

                default:
                    setAvatarImage('');
                    break;
            }
        }, []);

        return avatarImage;
    };

    const avatarImage = useAvatarImage();

    return (
        <div className='flex flex-col min-h-[600px] min-w-[800px] pt-4'>
            <div className='flex flex-row justify-between bg-[#011519]'>
                <div>
                    {featuresButton.map((feature) => {
                        return (
                            <ButtonAvatar
                                key={feature.index}
                                className={'w-16 h-16 object-contain '}
                                type={feature.type}
                                onClick={feature.onClick}
                                src={feature.image}
                            />
                        );
                    })}
                </div>
                <div className='flex min-w-40 bg-black'>
                    {featuresButton2.map((feature) => {
                        return (
                            <ButtonAvatar
                                key={feature.index}
                                className={'w-40 h-16 object-contain'}
                                type={feature.type}
                                onClick={feature.onClick}
                                src={feature.image}
                            />
                        );
                    })}
                </div>
                <div className='flex flex-row'>
                    {featuresButton3.map((feature) => {
                        return (
                            <ButtonAvatar
                                key={feature.index}
                                className={'w-16 h-16 object-contain'}
                                type={feature.type}
                                onClick={feature.onClick}
                                src={feature.image}
                            />
                        );
                    })}
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col bg-[#083642]'>
                    {gamesButton.map((game) => {
                        return (
                            <ButtonAvatar
                                key={game.index}
                                className={'w-16 h-16 object-contain '}
                                type={game.type}
                                onClick={game.onClick}
                                src={game.image}
                            />
                        );
                    })}
                </div>
                <Avatar src={avatarImage} className='w-[100vw] h-[91vh]' />
            </div>
        </div>
    );
};
