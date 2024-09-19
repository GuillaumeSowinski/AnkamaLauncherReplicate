interface PropsType {
    className?: string;
    src: string;
    alt?: string;
}

export const AvatarUi = ({ src, alt, className }: PropsType) => {
    return <img className={className} src={src} alt={alt}></img>;
};
