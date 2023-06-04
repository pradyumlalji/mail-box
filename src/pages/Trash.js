import React from "react";
import MailCard from "../components/mailCard/MailCard";
import { useSelector } from "react-redux";

const Trash = () => {
    const mailsArr = useSelector((state) => state.users.trash);
    return (
        <div>
            <p className="sectionTitle">
                Trash <span className="countTitle">({mailsArr.length} mails found)</span>
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

export default Trash;
