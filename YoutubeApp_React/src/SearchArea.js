import React, { useEffect, useState } from "react";
import Results from "./results";
import axios from "axios";
import classes from "./youtube.module.css";
import useDropdown from './useDropdown';


const SearchArea = () => {
  const [keyword, setKeyword] = useState("");
  const [videos, setVideos] = useState([]);
  // const [order, setOrder] = useState("");
  const orderList = ["date", "relevance", "rating","title","viewCount"];
  const [order , OrderDropdown]= useDropdown("order By","relevance",orderList);

  const [safeSearch,SafeDropdown]=useDropdown("safe search","none",["moderate","none","strict"]);
  const [checked,setChecked]=useState(false);

  const [advancedParams,setAdvancedParams]=useState(``);

  useEffect(()=>{
    if(checked){
      setAdvancedParams(`&order=${order}&safesearch=${safeSearch}`)
    }
    else{
      setAdvancedParams(``);
    }
  },[checked,order,safeSearch]);

  async function requestSearch() {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=25&q=${keyword}${advancedParams}&key=AIzaSyAdjbvl4RnRHThIJ4KZoW3wCyFWnSt-pUs`
      )
      .then((res) => {
        const { items } = res.data;
        console.log(items);
        setVideos(items || []);
      })
      .catch((err) => console.log(err));

    console.log("Video request submitted");
  }

  return (
    <div className={classes.search_area}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestSearch();
        }}
      >
        <label htmlFor="keyword">
          Search
          <input
            id="keyword"
            value={keyword}
            placeholder="Search Keyword"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>

        <label htmlFor="advanced">
          Advance Search
          <input type="checkbox" id="advanced" checked={checked} onChange={(e)=>setChecked(!checked)}/>
         
        </label>
        {
            checked? <div>
              <OrderDropdown/>
              <SafeDropdown/>
            </div>:null
          }
        {/* <label htmlFor="order">
          Order
          <select
            id="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            onBlur={(e) => setOrder(e.target.value)}
          >
            {orderList.map((orderName) => (
              <option value={orderName} key={orderName}>
                {orderName}
              </option>
            ))}
          </select>
        </label> */}

        <button>Submit</button>
      </form>
      <Results videos={videos} />
    </div>
  );
};

export default SearchArea;
