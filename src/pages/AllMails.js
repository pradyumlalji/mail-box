import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MailCard from "../components/mailCard/MailCard";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AllMails = () => {
    const mailsArr = useSelector((state) => state.users.allMails);

    const buttonNameArr = ["Inbox", "Draft", "Spam", "Trash"];
    const [activeButton, setActiveButton] = useState();
    const navigate = useNavigate();
    const search = window.location.search;

    const [filteredArr, setFilteredArr] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);

    useEffect(() => {
        if (search) {
            const queryParams = new URLSearchParams(window.location.search);
            const paramKeys = Array.from(queryParams.keys());

            let filteredMails = mailsArr.filter((mail) =>
                paramKeys.includes(mail.tag.toLowerCase())
            );

            setFilteredArr(filteredMails);
        }
    }, [search, mailsArr]);

    useEffect(() => {
        if (search === "") setFilteredArr(mailsArr);
    }, [mailsArr, search]);

    const onselectOfFilterHandler = (btnName) => {
        const queryParams = new URLSearchParams(window.location.search);
        let name = btnName.toLowerCase();
        if (queryParams.get(name)) {
            queryParams.delete(name);
        } else {
            queryParams.append(name, 1);
        }
        navigate(`/all?${queryParams.toString()}`);

        if (selectedFilters.includes(btnName)) {
            const filteredTags = selectedFilters.filter((tag) => tag !== btnName);
            setSelectedFilters(filteredTags);
        } else {
            setSelectedFilters([...selectedFilters, btnName]);
        }
    };

    const removeFiltersHandler = () => {
        setSelectedFilters([]);
        navigate(`/all`);
    };

    return (
        <div>
            <p className="sectionTitle">
                All Mails
                <span className="countTitle">({filteredArr.length} mails found)</span>
            </p>
            <div className="flex py-[1vw]  mob:pb-[4vw] flex-wrap ">
                <p className="text-start text-[.97vw] mob:text-[3.75vw] text-secondary font-bold">
                    Apply Filters:
                </p>
                {buttonNameArr.map((btnName, index) => (
                    <>
                        <button
                            key={index}
                            className={`
                                ${
                                    selectedFilters.includes(btnName)
                                        ? " border-[1px] border-nobel font-semibold "
                                        : ""
                                } rounded-full px-[.75vw] mob:px-[1vw] mob:mx-[.5vw] mx-[.25vw] text-secondary text-[1vw] mob:text-[3.75vw]
                            `}
                            onClick={() => {
                                onselectOfFilterHandler(btnName);
                            }}
                        >
                            {btnName}
                        </button>
                    </>
                ))}
                <button
                    className="text-secondary text-[1vw] mob:text-[3.75vw] pl-[.5vw] "
                    onClick={() => removeFiltersHandler()}
                >
                    Remove All
                </button>
            </div>

            {filteredArr.map((data, index) => (
                <div key={index} className="py-[.25vw] mob:py-[1vw]">
                    <MailCard apiData={data} />
                </div>
            ))}
        </div>
    );
};

export default AllMails;
