import { Header } from '../../Organisms/Header/business/HeaderLogic';
import { SideBar } from '../../Organisms/SideBar/business/SideBarLogic';

export const LauncherUi = () => {
    return (
        <div className='h-[100vh] w-[100vw] flex flex-col'>
            <Header />
            <div className='flex flex-1'>
                <SideBar />
                <div
                    className={
                        'bg-[url("/Pages/DofusPage.jpg")] bg-cover bg-center flex-1'
                    }
                ></div>
            </div>
        </div>
    );
};
