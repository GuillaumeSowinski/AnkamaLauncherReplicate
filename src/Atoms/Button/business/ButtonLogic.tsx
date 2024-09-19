import { ButtonUi } from '../presentation/ButtonUi';

interface PropsType {
    className?: string;
    type: 'submit' | 'button' | 'reset';
    onClick: () => void;
    children?: React.ReactNode;
}

const ButtonLogic = ({ className, type, onClick, children }: PropsType) => {
    return (
        <ButtonUi
            className={className}
            type={type}
            onClick={onClick}
            children={children}
        />
    );
};

export { ButtonLogic as Button };
