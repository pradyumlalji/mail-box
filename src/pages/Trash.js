import React from "react";
import MailCard from "../components/mailCard/MailCard";
import { useSelector } from "react-redux";

const Trash = () => {
    const mailsArr = useSelector((state) => state.users.trash);
    return (
        <div>
            <p className="text-start text-[1.5vw] font-semibold text-secondary pb-[1vw]">
                Trash <span className="text-[1vw] font-light">({mailsArr.length} mails found)</span>
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

export default Trash;
