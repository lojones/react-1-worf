import React from "react";
import { useState } from "react";

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Value</th>
                <th>New Value</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    // const [configValues, setConfigValues] = useState(props.configs);  
    const configValues = props.configs;
    const rows = configValues.map((row,index) => {
        
        return (<tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.value}</td>
                    <td>
                        <input type="text" defaultValue={row.value} onChange={e => {configValues[index]["value"] = e.target.value; props.updateConfigs(configValues);console.log(props)}}/>
                    </td>
                </tr>)
    });

    return <tbody>{rows}</tbody>
}

const BasicConfigStatus = (props) => {
    return(
        <div>{props.logmessage}</div>
    );
}

const BasicConfig = (props) => {
    return (
        <div>
            <table>
                <TableHeader />
                <TableBody configs={props.configs} updateConfigs={props.updateConfigs} />
            </table>
            <div id="basic-config-status"></div>
        </div>
    );
}

export default BasicConfig;