import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

//Our goal was to keep the header and the footer same but switch the sections (home, contact-us, about-us) between them. That can be acheived using Outlet. Now let's go to our coustum router.
export default function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}