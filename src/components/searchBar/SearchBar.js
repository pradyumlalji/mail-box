import React, { useState } from "react";
import searchIcon from "../../resources/images/searchIcon.svg";
import mail from "../../resources/images/mail.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SearchBar = () => {
    const mailsArr = useSelector((state) => state.users.allMails);

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const [filterText, setFilterText] = useState("");
    const [filteredArr, setFilteredArr] = useState();

    const handleFilterChange = (event) => {
        setIsDropDownOpen(true);
        let query = event.target.value;
        setFilterText(query);

        const filtered = mailsArr.filter(
            (email) =>
                email.subject.toLowerCase().includes(query) ||
                email.body.toLowerCase().includes(query)
        );
        setFilteredArr(filtered);
    };

    const highlightText = (text, query) => {
        const regex = new RegExp(`(${query})`, "gi");
        return text.replace(regex, "<span class='text-[#ED2B2A] font-extrabold '>$1</span>");
    };

    return (
        <div className="relative w-[70%] py-[1vw]">
            <label className="flex border-[1px] gap-[1vw] border-zircon bg-[#fafafa] p-[.5vw] w-[100%] rounded-[4vw] px-[1vw]">
                <input
                    type="text"
                    placeholder="Search mail"
                    className="bg-[#fafafa] w-full h-full focus:outline-0"
                    value={filterText}
                    onChange={(e) => handleFilterChange(e)}
                />
                <img className="w-[1vw]" src={searchIcon} alt="" />
            </label>
            {isDropDownOpen && filterText.length > 0 && (
                <div className="absolute scrollbar-thin roundex-[.5vw] scrollbar-thumb-[#8BACAA] hover:scrollbar-thumb-[#5e7f7d] scrollbar-track-[#EEEEEE] bg-[#fafafa] w-full top-[100%] max-h-[30vw] overflow-y-scroll rounded-b-[1vw] shadow-sm  text-start  ">
                    {filteredArr &&
                        filteredArr.map((email, index) => (
                            <Link
                                onClick={() => setIsDropDownOpen(false)}
                                to={`/${email.tag}/${email.id}`}
                                key={index}
                            >
                                <ul
                                    className="hover:bg-whisper px-[1vw] py-[.8vw] cursor-pointer "
                                    key={email.id}
                                >
                                    <li className="flex items-center gap-[1vw]">
                                        <div>
                                            {" "}
                                            <img className="w-[1vw]" src={mail} alt="" />
                                        </div>
                                        <div>
                                            <div className="flex  items-end">
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: highlightText(
                                                            email.subject.slice(0, 85),
                                                            filterText
                                                        ),
                                                    }}
                                                    className="text-[.97vw] font-semibold"
                                                ></p>
                                                <span>...</span>
                                            </div>
                                            <div className="flex items-end">
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: highlightText(
                                                            email.body.slice(0, 85),
                                                            filterText
                                                        ),
                                                    }}
                                                    className="text-[.78vw] text-charcoal font-normal"
                                                ></p>{" "}
                                                <span>...</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </Link>
                        ))}
                    {filteredArr.length === 0 && (
                        <div className=" py-[1vw]  overflow-hidden">No Results Found</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
