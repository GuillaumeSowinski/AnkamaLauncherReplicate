import { ReactNode } from 'react';
import { Header } from '../../Organisms/Header/business/HeaderLogic';

interface PropsType {
    children: ReactNode;
}

export const DofusPageUi = ({ children }: PropsType) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
};
