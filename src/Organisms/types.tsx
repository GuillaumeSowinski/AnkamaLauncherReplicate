interface AvatarButtonType {
    className?: string;
    type: 'submit' | 'button' | 'reset';
    onClick: () => void;
    image: string;
    index: string;
}

interface PropsType {
    className?: string;
    type: 'submit' | 'button' | 'reset';
    onClick: () => void;
    image: string;
    src?: string | undefined;
    index: string;
}

export type { PropsType, AvatarButtonType };
