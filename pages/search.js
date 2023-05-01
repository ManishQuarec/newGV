import React, { useState, useEffect } from "react";
import styles from "../styles/search.module.css"
import Nav from "@/components/Nav/Nav";
import axios from "axios";
function Search() {
    const [searchText, setSearchText] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [resdata, setResData] = useState([]);
    const [datas, setDatas] = useState([]);

    const handleInputChange = (event) => {
        setSearchText(event.target.value);

        const filterData = () => {
            const filteredData = datas.filter((item) =>
                item.engCate.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredResults(filteredData);
        };

        filterData();




    };

    //   if (searchText == ""){
    //     filterData();

    // }


    useEffect(() => {
        axios
            .get(process.env.NEXT_PUBLIC_API_BASE_URL + "/GetSubCategory")
            .then(async (response) => {
                console.log("new", response.data.data[0].SubCategory[0]);

                const refre = await response.data.data.map((item, index) => {
                    return { engCate: item.Category.EngCategory, gujCategory: item.Category.GujCategory }

                })

                setDatas(refre)
                console.log(datas);
                setFilteredResults(refre)


                const refres = await response.data.data.map((item, index) => {
                    console.log(item)

                    item.SubCategory.map((ite, index) => {

                        return { engCate: item.EngCategory, gujCategory: item.GujCategory }

                    })
                


                })

                console.log(refres);

                setDatas([...datas, refres ])
                // console.log(datas);
                setFilteredResults([...filteredResults, refres])

            })

            // console.log("datas",datas);


        //     console.log(resdata);

        //    resdata.map(async (item, index)=> {
        //             return await item.Category.EngCategory

        //           })


        //   setDatas(refre)

        // setFilteredResults(refre)

        // filterData();
    }, [searchText == ""]);


    console.log(filteredResults);




    return (
        <>
            <Nav />
            <div className={styles.MHSf9671}>
                <div className={styles.JAS81}>

                    <input
                        className={styles.vbgae12}
                        type="text"
                        placeholder="Search by subject, city or state"
                        value={searchText}
                        onChange={handleInputChange}
                    />
                    <div className={styles.Serchitems091}>
                        {filteredResults.map((item) => (
                            <p className={styles.Ngah61} key={item.id}>
                                {item.gujCategory}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Search;