import { ButtonAvatar } from '../../../Molecules/ButtonAvatar/presentation/ButtonAvatarUi';
import { AvatarButtonType } from '../../types';

interface PropsType {
    gamesButton: AvatarButtonType[];
}

export const SideBarUi = ({ gamesButton }: PropsType) => {
    return (
        <div className='flex flex-row p-0'>
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
        </div>
    );
};
