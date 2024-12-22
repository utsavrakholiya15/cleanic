import React from "react";
import Header from "../../shared/common/header";
import Herobanner from "./herobanner";
import Clients from "./clients";
import Anything from "./anything";
import Featured from "./featured";
import Before from "./before";
import Works from "./works";
import Plans from "./plans";
import Why from "./why";
import Footer from "../../shared/common/footer";
export default function Home() {
    return (
        <div>
            <Header />
            <Herobanner />
            <Clients />
            <Anything />
            <Featured />
            <Before />
            <Works />
            <Plans />
            <Why />
            <Footer />
        </div>
    )
}