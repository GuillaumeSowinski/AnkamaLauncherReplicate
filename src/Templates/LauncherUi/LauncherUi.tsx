import { useState } from 'react';
import { Header } from '../../Organisms/Header/business/HeaderLogic';
import { SideBar } from '../../Organisms/SideBar/business/SideBarLogic';

export const LauncherUi = () => {
    const [tooltip, setTooltip] = useState({
        visible: false,
        text: '',
        x: 0,
        y: 0,
    });
    const buttonUi = [
        {
            name: 'Multi-compte',
            className:
                ' w-[39px] h-[37px] rounded-full hover:bg-[url("/logo/multicomptehover.png")] hover:bg-cover hover:bg-no-repeat',
        },
        {
            name: 'Forum',
            className:
                'w-[39px] h-[37px] rounded-full hover:bg-[#00586b] hover:',
        },
        {
            name: 'Boutique',
            className: 'w-[39px] h-[37px] rounded-full hover:bg-[#00586b]',
        },
        {
            name: 'Changelog',
            className: ' w-[39px] h-[37px] rounded-full hover:bg-[#00586b]',
        },
        {
            name: 'Options du jeu',
            className: ' w-[39px] h-[37px] rounded-full hover:bg-[#00586b]',
        },
    ];

    const handleMouseEnter = (
        event: React.MouseEvent<HTMLButtonElement>,
        name: string
    ) => {
        setTooltip({
            visible: true,
            text: name,
            x: event.clientX,
            y: event.clientY,
        });
    };

    const handleMouseLeave = () => {
        setTooltip({ ...tooltip, visible: false });
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (tooltip.visible) {
            setTooltip((prev) => ({
                ...prev,
                x: event.clientX,
                y: event.clientY,
            }));
        }
    };

    return (
        <div
            className='h-[100vh] w-[100vw] flex flex-col'
            onMouseMove={handleMouseMove}
        >
            <Header />
            <div className='flex flex-1'>
                <SideBar />
                <div
                    className={
                        'bg-[url("/Pages/DofusPage.jpg")] bg-cover bg-center flex-1'
                    }
                >
                    <div className='flex flex-col items-end justify-end w-[319px] h-[381px] bg-[url("/Pages/BackgroundPlay.jpg")] ml-[40px] mt-[40px]'>
                        <button
                            className=' bg-white min-h-[66px] min-w-[248px] h-[66px] w-[248px] 
                            rounded-2xl mr-[33px] mb-[17px] hover:bg-[#00586b] hover:text-white '
                        >
                            Jouer
                        </button>
                        <div className='flex flex-row space-x-6 pr-[12px] mb-[22px]'>
                            {buttonUi.map((design) => {
                                return (
                                    <button
                                        className={design.className}
                                        onMouseEnter={(e) =>
                                            handleMouseEnter(e, design.name)
                                        }
                                        onMouseLeave={handleMouseLeave}
                                    ></button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {tooltip.visible && (
                <div
                    className='absolute text-white bg-black rounded px-2 text-xs'
                    style={{
                        top: tooltip.y + 10,
                        left: tooltip.x + 10,
                    }}
                >
                    {tooltip.text}
                </div>
            )}
        </div>
    );
};
