interface PropsType {
    className?: string;
    type: 'submit' | 'button' | 'reset';
    onClick: () => void;
    image?: string;
    children?: React.ReactNode;
}

export const ButtonUi = ({ className, type, onClick, children }: PropsType) => {
    return (
        <button className={className} onClick={onClick} type={type}>
            {children}
        </button>
    );
};
