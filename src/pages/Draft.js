import React from "react";
import { useSelector } from "react-redux";
import MailCard from "../components/mailCard/MailCard";
const Draft = () => {
    const mailsArr = useSelector((state) => state.users.draft);
    return (
        <div>
            <p className="text-start text-[1.5vw] font-semibold text-secondary pb-[1vw]">
                Draft <span className="text-[1vw] font-light">({mailsArr.length} mails found)</span>
            </p>
            {mailsArr.length > 0 ? (
                mailsArr.map((data) => (
                    <div key={data.id} className="py-[.25vw] ">
                        <MailCard apiData={data} />
                    </div>
                ))
            ) : (
                <>Loading..</>
            )}
        </div>
    );
};

export default Draft;
