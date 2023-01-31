import React from "react";
import { DataTable } from "../../components/DataTable";
import { Header } from "../../components/Header";

export const HomePage = () => {
    
    const headerText = "Teste ReactJS - SaibWeb"
    return(
        <>
        <Header headerText={headerText}/>
        <DataTable/>
        </>
    )
}