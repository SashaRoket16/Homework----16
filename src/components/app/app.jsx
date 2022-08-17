import React from "react";
import date from "../date/date";
import Table from "../table/table";
function App(){
    return(<>
        <h1>Курс валют</h1>
        <Table date ={date}></Table>
        </>
    );
}

export default App;