import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MailCard from "../components/mailCard/MailCard";

const AllMails = () => {
    const mailsArr = useSelector((state) => state.users.allMails);
    const buttonNameArr = ["Inbox", "Draft", "Spam", "Trash", "Remove All"];
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [activeButton, setActiveButton] = useState();

    const [filteredArr, setFilteredArr] = useState();

    const handleFilterClick = (tagName) => {
        if (tagName === "remove all") setSelectedFilters([]);
        if (selectedFilters.includes(tagName)) {
            // Remove the tag from selectedFilters if it's already present
            const filteredTags = selectedFilters.filter((tag) => tag !== tagName);
            setSelectedFilters(filteredTags);
            localStorage.setItem("selectedFilters", JSON.stringify(filteredTags));
        } else {
            // Add the tag to selectedFilters if it's not already present
            setSelectedFilters([...selectedFilters, tagName]);
        }
    };

    const filterMails = () => {
        if (selectedFilters.length > 0) {
            return mailsArr.filter((mail) => selectedFilters.includes(mail.tag));
        } else {
            return mailsArr;
        }
    };

    useEffect(() => {
        // Store selectedFilters in local storage
        localStorage.setItem("selectedFilters", JSON.stringify(selectedFilters));
    }, [selectedFilters]);

    useEffect(() => {
        // Retrieve selectedFilters from local storage on initial load
        const storedFilters = localStorage.getItem("selectedFilters");
        if (storedFilters) {
            setSelectedFilters(JSON.parse(storedFilters));
        }
    }, []);

    return (
        <div>
            <p className="text-start text-[1.5vw] font-semibold text-secondary pb-[1vw]">
                All Mails{" "}
                <span className="text-[1vw] font-light">({mailsArr.length} mails found)</span>
            </p>
            <p className="text-start">Apply Filters:</p>
            <div className="flex gap-[1.25vw]">
                {buttonNameArr.map((btnName, index) => (
                    <>
                        <button
                            key={index}
                            className={`
                                ${
                                    selectedFilters.includes(btnName.toLowerCase())
                                        ? "selected border-[1px] border-nobel "
                                        : ""
                                }px-[1vw] py-[.1vw] rounded-full
                            `}
                            onClick={() => {
                                setActiveButton(index);
                                handleFilterClick(btnName.toLowerCase());
                            }}
                        >
                            {btnName}
                        </button>
                    </>
                ))}
            </div>

            {filterMails() ? (
                filterMails().map((data, index) => (
                    <div key={index} className="py-[.25vw]">
                        <MailCard apiData={data} />
                    </div>
                ))
            ) : (
                <>Loading</>
            )}
        </div>
    );
};

export default AllMails;
