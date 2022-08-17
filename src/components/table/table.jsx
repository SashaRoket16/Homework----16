import React from "react"


function Table(props){
    let b = 1;
    return(
        <table>
            <tbody>
                {props.date.map((ele) =>{

                    return (
                        <tr>
                            <td>{b++}</td>
                            <td>{ele.txt}</td>
                            <td>{ele.rate}</td>
                            <td>{ele.cc}</td>
                        </tr>)
                })}
            </tbody>
        </table>
    );
}

export default Table;