import { Avatar } from '../../../Atoms/Avatar/business/AvatarLogic';
import { Button } from '../../../Atoms/Button/business/ButtonLogic';

interface PropsType {
    src: string;
    type: 'submit' | 'button' | 'reset';
    className?: string;
    onClick: () => void;
}

export const ButtonAvatarUi = ({
    src,
    type,
    className,
    onClick,
}: PropsType) => {
    return (
        <Button type={type} onClick={onClick} className={className}>
            <Avatar src={src} className={className} />
        </Button>
    );
};

export { ButtonAvatarUi as ButtonAvatar };
