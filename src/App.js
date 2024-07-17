import React, { useState, useEffect } from "react";
import "./App.css";
import { Loader, Layout, Header, WeatherList } from "./component";
import axios from "axios";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getWeatherData = async () => {
            const key = process.env.REACT_APP_API_KEY;
            return await axios({
                method: "GET",
                url: `https://api.weatherbit.io/v2.0/forecast/daily?city=Jakarta&key=${key}`,
            });
        };
        getWeatherData().then((res) => {
            setTimeout(() => {
                setData(res.data);
                setIsLoading(false);
            }, 2000);
        });
    }, []);
    return (
        <Layout>
            {isLoading === false && data != null ? (
                <>
                    <Header />
                    <WeatherList
                        data={data.data}
                        country={`${data.city_name}`}
                        timezone={`${data.timezone}`}
                    />
                </>
            ) : (
                <Loader />
            )}
        </Layout>
    );
}

export default App;
