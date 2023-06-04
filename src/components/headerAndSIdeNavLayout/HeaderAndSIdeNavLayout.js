import React from "react";
import mailbox from "../../resources/animations/mailbox.json";
import Lottie from "lottie-react";
import Navlinks from "../navLinks/Navlinks";
import SearchBar from "../searchBar/SearchBar";
const HeaderAndSideNavLayout = (props) => {
    return (
        <div className="h-screen w-full grow flex flex-col pr-[1vw]  ">
            <div className="flex grow gap-[1%] ">
                <div className="bg-primary w-[14%] flex flex-col items-center justify-between items-start rounded-r-[2vw] max-h-screen sticky top-0">
                    <Navlinks />
                    <div className="h-auto">
                        <Lottie animationData={mailbox} className="w-full" />
                    </div>
                </div>
                <div className="w-[86%] min-h-[100vh]  flex flex-col">
                    <div className=" w-full bg-white sticky top-0 ">
                        <SearchBar />
                    </div>
                    <div className=" bg-[#E3F4F4] grow  rounded-[1vw] p-[1vw] ">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderAndSideNavLayout;
