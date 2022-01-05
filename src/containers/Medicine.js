import React, { useState } from "react";
import List from "../components/common/List/List";
import InputBox from "../components/common/InputBox/InputBox";

const orgData = [
  {
    id: 101,
    name: "Abacavir",
    quantity: 25,
    price: 150,
    expiry: 2022,
  },
  {
    id: 102,
    name: "Eltrombopag",
    quantity: 90,
    price: 550,
    expiry: 2021,
  },
  {
    id: 103,
    name: "Meloxicam",
    quantity: 85,
    price: 450,
    expiry: 2025,
  },
  {
    id: 104,
    name: "Allopurinol",
    quantity: 50,
    price: 600,
    expiry: 2023,
  },
  {
    id: 105,
    name: "Phenytoin",
    quantity: 63,
    price: 250,
    expiry: 2021,
  },
  {
    id: 106,
    name: "Amifostine",
    quantity: 12,
    price: 50,
    expiry: 2024,
  },
];

function Medicine(props) {
    const [filter , setFilter] = useState()
    const [sortData , setSortData] = useState()
    const [sort , setSort] = useState()
    const handleSearch = (s) => {
        if (s !== "") {
            let filterData = orgData.filter((m) => (
                m.name.toString().toLowerCase().includes(s.toLowerCase(s)) ||
                m.price.toString().includes(s) ||
                m.expiry.toString().includes(s) ||
                m.quantity.toString().includes(s)
            ))
            setFilter(filterData);
        } else {
            setFilter()
            handleSort(sort, true)
        }
    }
    const handleSort = (s, empty=false) => {

        let sort = !empty && filter ? filter : orgData
        setSort(s)

        if (s !== "0") {
            let sData = sort.sort((a,b) => {
                if (s === "hl") {
                    return b.price - a.price;
                } else if (s === "lh") {
                    return a.price - b.price;
                } else if (s === "e") {
                    return a.expiry - b.expiry;
                } else if (s === "q") {
                    return a.quantity - b.quantity;
                }
            })
            setSortData([...sData])
        }
    }

    let fData = filter ? filter : sortData ? sortData : orgData

    return (
        <div className="container mt-5 pt-5">
            <div className="row mt-5">
                <div className="section-title pt-3">
                    <h2>Medicine</h2>
                </div>
                <div className="row mb-4">
                    <div className="col-6">
                        <InputBox 
                            onChange={(e) => handleSearch(e.target.value)} 
                            placeholder="Search Here...." />
                    </div>
                    <div className="col-6">
                        <InputBox 
                            type="select"
                            onChange={(e) => handleSort(e.target.value)}>
                                <option value="0">--Select--</option>
                                <option value="hl">Price: High to low</option>
                                <option value="lh">Price: low to High</option>
                                <option value="e">Expiry</option>
                                <option value="q">Quantity</option>
                        </InputBox>
                    </div>
                </div>
                {
                    fData !== undefined ?
                    fData.map((m) => {
                        return (
                            <List key={m.id.toString()} data={m} />
                        );
                    }) : null
                }
            </div>
        </div>
    );
}

export default Medicine;
