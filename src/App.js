import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Inbox from "./pages/Inbox";
import HeaderAndSideNavLayout from "./components/headerAndSIdeNavLayout/HeaderAndSIdeNavLayout";
import AllMails from "./pages/AllMails";
import Draft from "./pages/Draft";
import Spam from "./pages/Spam";
import Trash from "./pages/Trash";
import MailBody from "./components/mailBody/MailBody";
import { useDispatch } from "react-redux";
import { fetchUserMails } from "./redux/slices/usersSlice";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserMails());
    }, [dispatch]);

    return (
        <div className="App bg-[#fff] ">
            <Router>
                <HeaderAndSideNavLayout>
                    <Routes>
                        <Route exact path="/inbox" element={<Inbox />} />
                        <Route exact path="/all" element={<AllMails />} />
                        <Route exact path="/draft" element={<Draft />} />
                        <Route exact path="/spam" element={<Spam />} />
                        <Route exact path="/trash" element={<Trash />} />
                        <Route exact path="/:mailtype/:id" element={<MailBody />} />
                        <Route path="*" element={<Navigate to="/inbox" replace />} />
                    </Routes>
                </HeaderAndSideNavLayout>
            </Router>
        </div>
    );
}

export default App;
