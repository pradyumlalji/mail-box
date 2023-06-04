import React, { useEffect, useState } from "react";
import avatorIcon from "../../../src/resources/images/avatorIcon.png";
import arrowLeft from "../../../src/resources/images/arrowLeft.svg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const MailBody = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const users = useSelector((state) => state.users.allMails);
    const [mailDetails, setMailDetails] = useState({});

    console.log(users);

    // useEffect(() => {
    //     if (mailDetails) {
    //         localStorage.setItem("selectedMailId", mailDetails.id);
    //     }
    // }, [mailDetails]);

    useEffect(() => {
        // const storedId = localStorage.getItem("selectedMailId");
        // const selectedId = id || storedId;
        console.log(id);
        if (id) {
            console.log(typeof id);

            const selectedMail = users.find((mail) => Number(mail.id) === Number(id));
            console.log(selectedMail);
            setMailDetails(selectedMail);
        }
    }, [id]);

    // console.log(mailDetails);

    return (
        <>
            {mailDetails ? (
                <div className="text-start flex flex-col items-start h-full">
                    <button
                        className="hover:bg-white p-[1vw] rounded-full"
                        onClick={() => navigate(-1)}
                    >
                        {" "}
                        <img className="w-[1vw]" src={arrowLeft} alt="" />{" "}
                    </button>
                    <p className="text-[1.375vw] pl-[4%] ">{mailDetails.subject} </p>
                    <div className="flex  gap-[1vw] mt-[2vw] items-center  ">
                        <div className="">
                            <img className="rounded-[50%]" src={avatorIcon} alt="avator-icon" />
                        </div>

                        <div>
                            <p className="text-[1.02vw] font-bold">user id: {mailDetails.id}</p>
                            <p className="text-[.97vw] font-regular">
                                mail Type: {mailDetails.tag}
                            </p>
                        </div>
                    </div>
                    <div className="pt-[4vw] px-[4vw]">
                        <p className="text-[1vw]">{mailDetails.body}</p>
                    </div>
                </div>
            ) : (
                <>loading</>
            )}
        </>
    );
};

export default MailBody;
