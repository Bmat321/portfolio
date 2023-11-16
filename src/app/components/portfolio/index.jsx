import { useEffect, useState } from "react";
import { lists, mobiles, webs } from "../../../../datas";
import Photo from "../image";
import ListPortfolio from "../listPorfolio";

const Portfolio = () => {
  const [selected, setSelected] = useState("web");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "web":
        setDatas(webs);
        break;
      case "mobile":
        setDatas(mobiles);
        break;
      default:
        setDatas(webs);
    }
  }, [selected]);
  return (
    <div className="bg-blue-200 flex-col flex items-center" id="portfolio">
      <h1 className="text-3xl md:text-xl ">Portfolio</h1>
      <ul className=" m-2 p-0 list-none flex cursor-pointer md:flex-wrap md:justify-center">
        {lists.map((list) => (
          <ListPortfolio
            title={list.title}
            key={list.id}
            active={selected === list.id}
            id={list.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="w-[70%] md:w-[100%] flex justify-center items-center flex-wrap cursor-pointer">
        {datas.map((web) => (
          <Photo title={web.title} key={web.id} img={web.img} url={web.url}  />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
