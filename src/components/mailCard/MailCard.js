import React from "react";
import { useNavigate } from "react-router-dom";
const MailCard = (props) => {
    const navigate = useNavigate();
    const handleClick = (tag, id) => {
        navigate(`/${tag}/${id}`);
    };
    const onClickOfCard = () => {};

    return (
        // <a href={`/${props.apiData.tag}/${props.apiData.id}`}>
        <div
            onClick={() => handleClick(props.apiData.tag, props.apiData.id)}
            className="border-[1px] border-[#C4DFDF] gap-[3vw] mob:gap-[1vw] flex p-[.5vw] rounded-[.3vw] mob:rounded-[2vw] hover:shadow-md cursor-pointer whitespace-nowrap mob:whitespace-normal mob:flex-col mob:p-[3vw]"
        >
            <p className=" w-[20%] mob:w-full text-secondary font-medium text-[1.04vw] mob:text-[3.125vw] text-start ">
                {props.apiData.userId}
            </p>
            <p className=" w-[20%] mob:w-full text-secondary font-medium text-[1.04vw] mob:text-[4.35vw] text-start">
                {props.apiData.subject.slice(0, 25)}...
            </p>
            <p className=" w-[60%] mob:w-full text-secondary font-medium text-[1.04vw] mob:text-[3.75vw] text-start ">
                {props.apiData.body.slice(0, 85)}...
            </p>
        </div>
        // </a>
    );
};

export default MailCard;
