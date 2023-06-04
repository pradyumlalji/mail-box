import React from "react";
import { useSelector } from "react-redux";
import MailCard from "../components/mailCard/MailCard";
const Draft = () => {
    const mailsArr = useSelector((state) => state.users.draft);
    return (
        <div>
            <p className="sectionTitle">
                Draft <span className="countTitle">({mailsArr.length} mails found)</span>
            </p>
            {mailsArr.length > 0 ? (
                mailsArr.map((data) => (
                    <div key={data.id} className="py-[.25vw] mob:py-[1vw]">
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
