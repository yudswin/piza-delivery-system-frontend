import React from "react";
import AdminHeader from "./AdminHeader";

const AdminComponent = ({ children }) => {
    return (
        <div >
            console.log('user', user)
            <AdminHeader />
            {children}
        </div>
    );
}

export default AdminComponent;