import React, { useEffect, useState } from "react";
import avatorIcon from "../../../src/resources/images/avatorIcon.png";
import arrowLeft from "../../../src/resources/images/arrowLeft.svg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchUserMails } from "../../redux/slices/usersSlice";
const MailBody = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const users = useSelector((state) => state.users.allMails);
    const [mailDetails, setMailDetails] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (users.length > 0) {
            const mail = users.find((item) => item.id == id);
            setMailDetails(mail);
            setIsLoading(false);
        }
    }, [users]);

    useEffect(() => {
        fetchUserMails();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {!isLoading ? (
                <div className="text-start text-secondary flex flex-col items-start h-full">
                    <button
                        className="hover:bg-white p-[1vw] mob:p-[2vw] rounded-full"
                        onClick={() => navigate(-1)}
                    >
                        {" "}
                        <img className="w-[1vw] mob:w-[4vw]" src={arrowLeft} alt="" />{" "}
                    </button>
                    <p className="text-[1.375vw] mob:text-[5vw] pl-[4%] ">{mailDetails.subject} </p>
                    <div className="flex  gap-[1vw] mob:gap-[2vw] mt-[2vw] mob:mt-[5vw] items-center  ">
                        <div className="mob:pl-[4vw]">
                            <img className="rounded-[50%]" src={avatorIcon} alt="avator-icon" />
                        </div>

                        <div>
                            <p className="text-[1.02vw] mob:text-[3.75vw] font-bold">
                                user id: {mailDetails.id}
                            </p>
                            <p className="text-[.97vw] mob:text-[3.125vw] font-regular">
                                Mail Type: {mailDetails.tag}
                            </p>
                        </div>
                    </div>
                    <div className="pt-[4vw]  mob:pt-[8vw] px-[4vw]">
                        <p className="text-[1vw] mob:text-[3.75vw] ">{mailDetails.body}</p>
                    </div>
                </div>
            ) : (
                <>loading</>
            )}
        </>
    );
};

export default MailBody;
