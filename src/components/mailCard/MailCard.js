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
            className="border-[1px] border-[#C4DFDF] gap-[3vw] flex p-[.5vw] rounded-[.3vw] gap-[3vw] hover:shadow-md cursor-pointer whitespace-nowrap "
        >
            <p className=" w-[20%] text-secondary font-medium text-[1.04vw] text-start ">
                {props.apiData.userId}
            </p>
            <p className=" w-[20%]  text-secondary font-medium text-[1.04vw] text-start">
                {props.apiData.subject.slice(0, 25)}...
            </p>
            <p className=" w-[60%] text-secondary font-medium text-[1.04vw] text-start ">
                {props.apiData.body.slice(0, 85)}...
            </p>
        </div>
        // </a>
    );
};

export default MailCard;
