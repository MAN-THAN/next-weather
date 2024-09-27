"use client";
import Image from "next/image";
import Search from "./ui/searchCompo";
import Items from "./ui/items";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [search, setSearch] = useState("muzaffarnagar");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState();
  useEffect(() => {
    getWeatherDetails();
  }, []);
  const getWeatherDetails = async () => {
    if (!search) return;
    try {
      setLoading(true);
      const res =
        await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}/${new Date().toISOString()}?key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&include=current
    `);
      setLoading(false);
      console.log(res);
      setWeather(res?.data?.currentConditions);
    } catch (err) {
      setLoading(false);
      setWeather({});
      console.error(err);
      alert(err);
    }
  };
  console.log(weather);
  if (loading) {
    return <>Loading.....</>;
  }

  return (
    <div className="bg-weatherImage bg-cover bg-center">
      <Search
        search={search}
        setSearch={setSearch}
        getWeatherDetails={getWeatherDetails}
      />
      <Items data={weather} />
    </div>
  );
}
