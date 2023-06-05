import React, { useState } from "react";
import mailbox from "../../resources/animations/mailbox.json";
import menuIcon from "../../resources/images/menu.svg";
import Lottie from "lottie-react";
import Navlinks from "../navLinks/Navlinks";
import SearchBar from "../searchBar/SearchBar";

const HeaderAndSideNavLayout = (props) => {
    const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
    return (
        <div className="h-screen w-full grow flex flex-col pr-[1vw]  ">
            <div className="flex grow gap-[1%] ">
                <div className="bg-[#E3F4F4] mob:hidden w-[14%] flex flex-col items-center justify-between items-start rounded-r-[2vw] max-h-screen sticky top-0">
                    <Navlinks isMobMenuOpen={isMobMenuOpen} setIsMobMenuOpen={setIsMobMenuOpen} />
                    <div className="h-auto">
                        <Lottie animationData={mailbox} className="w-full" />
                    </div>
                </div>

                <div className="w-[86%] mob:w-full min-h-[100vh]  flex flex-col">
                    <div className=" w-full bg-white sticky top-[-8vw] mob:top-0 mob:flex  mob:items-center mob:gap-[3vw] mob:p-[1vw] ">
                        <div className="relative hidden mob:block">
                            <button
                                onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}
                                className="hidden mob:block "
                            >
                                <img src={menuIcon} alt="" />
                            </button>
                            {isMobMenuOpen && (
                                <div className="absolute bg-white top-[-4vw] mob:z-30  mob:w-[50vw] mob:rounded-[4vw] ">
                                    <Navlinks
                                        isMobMenuOpen={isMobMenuOpen}
                                        setIsMobMenuOpen={setIsMobMenuOpen}
                                    />
                                </div>
                            )}
                        </div>

                        <SearchBar />
                    </div>
                    <div className=" bg-[#E3F4F4] grow  rounded-[1vw] p-[1vw] mob:p-[4vw] ">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderAndSideNavLayout;
