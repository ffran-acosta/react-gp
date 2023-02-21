import { People } from "@/data";
import { addPeople } from "@/redux/states/people";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { PeopleTable } from "../components";

const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addPeople(People));
    }, [])

    return (
        <PeopleTable/>
    )
}
export default Home;