import React from "react";
import { Link, useLocation } from "react-router-dom";
const Navlinks = () => {
    const location = useLocation();
    const navlinksData = [
        {
            link: "/all",
            name: " All Mails",
        },
        {
            link: "/inbox",
            name: "Inbox",
        },
        {
            link: "/draft",
            name: "Draft",
        },
        {
            link: "/spam",
            name: "Spam",
        },
        {
            link: "/Trash",
            name: "Trash",
        },
    ];

    return (
        <div className="flex flex-col gap-[1vw] text-start w-full  ">
            <div className="pb-[2vw] p-[2vw] pt-[3vw]">Mails logo</div>

            {navlinksData.map((data, index) => (
                <Link
                    className={`px-[2vw] p-[.25vw] rounded-r-[1vw] transition-all duration-250 transition-colors ${
                        location.pathname === data.link
                            ? "bg-[#8BACAA] text-white font-semibold "
                            : "bg-transparent text-[#41644A] hover:bg-white hover:text-black"
                    }`}
                    key={index}
                    to={data.link}
                >
                    {data.name}
                </Link>
            ))}
        </div>
    );
};

export default Navlinks;
