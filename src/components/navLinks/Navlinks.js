import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import closIcon from "../../resources/images/x.svg";

const Navlinks = (props) => {
    const { isMobMenuOpen, setIsMobMenuOpen } = props;
    const [activeLink, setActiveLink] = useState(2);

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
            link: "/trash",
            name: "Trash",
        },
    ];

    return (
        <div className="flex flex-col gap-[1vw] mob:gap-[3vw] text-start w-full mob:p-[4vw] ">
            <div className="pb-[2vw] p-[2vw] pt-[3vw] mob:p-0 flex items-center justify-between ">
                <p className="text-[2vw] mob:text-[5.75vw] text-[#41644A]">Menu</p>
                <img
                    className="w-[4vw] hidden mob:block "
                    onClick={() => {
                        setIsMobMenuOpen(!isMobMenuOpen);
                    }}
                    src={closIcon}
                    alt=""
                />
            </div>

            {navlinksData.map((data, index) => (
                <Link
                    onClick={() => {
                        setActiveLink(index);
                        setIsMobMenuOpen(!isMobMenuOpen);
                    }}
                    className={`px-[2vw] p-[.25vw] rounded-r-[1vw] transition-all duration-250 transition-colors text-[1vw] mob:text-[3.75vw]  ${
                        activeLink === index
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
