import { AvatarUi } from '../presentation/AvatarUi';

interface PropsType {
    className?: string;
    src: string;
    alt?: string;
}

const AvatarLogic = ({ src, alt, className }: PropsType) => {
    return <AvatarUi src={src} alt={alt} className={className} />;
};

export { AvatarLogic as Avatar };
