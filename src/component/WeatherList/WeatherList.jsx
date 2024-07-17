import React from "react";
import styles from "./WeatherList.module.css";

const WeatherList = ({ data, country, timezone }) => {
    const tableHeaderCol = [
        { id: "datetime", title: "Date" },
        { id: "max_temp", title: "Max Temperature (°C)" },
        { id: "min_temp", title: "Min Temperature (°C)" },
        { id: "temp", title: "Temperature (°C)" },
        { id: "weather.description", title: "Description" },
    ];

    return (
        <div className={styles.layout}>
            <h2 className={styles.title}>
                {country} | {timezone} | 7 Days
            </h2>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tableHead}>
                        {tableHeaderCol.map((item, i) => {
                            return <th key={i}>{item.title}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => {
                        return (
                            <tr className={styles.tableBody} key={i}>
                                <td>{item.datetime}</td>
                                <td>{item.max_temp}</td>
                                <td>{item.min_temp}</td>
                                <td>{item.temp}</td>
                                <td>{item.weather.description}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default WeatherList;
