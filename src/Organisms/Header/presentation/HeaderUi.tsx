import { ButtonAvatar } from '../../../Molecules/ButtonAvatar/presentation/ButtonAvatarUi';
import { AvatarButtonType } from '../../types';

interface PropsType {
    featuresButton: AvatarButtonType[];
    featuresButton2: AvatarButtonType[];
    featuresButton3: AvatarButtonType[];
}

export const HeaderUi = ({
    featuresButton,
    featuresButton2,
    featuresButton3,
}: PropsType) => {
    return (
        <div className='flex flex-col min-w-[800px] pt-0'>
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
        </div>
    );
};
