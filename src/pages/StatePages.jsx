import React, { useState } from "react";
import Layouts from "../components/Layout";
import Header from "../components/Header";
const StatePages = () => {
  //memasukan state di satu variabel
  const [state, setState] = useState({
    counter: 0,
    foods: ["Mie Ayam", "Mie Goreng"],
  });

  //const [foods, SetFoods] = useState(["Mie Goreng", "Nasi Goreng"]);
  console.log({ state });
  const AddConter = () => {
    //jika ditamba ...state, maka nilai dari food akan ikut terpanggil
    setState({ counter: state.counter + 1 });
  };

  // const AddFoods = () => {
  //   SetFoods([...foods, "Mie Ayam"]);
  // };
  return (
    <Layouts title="Variabel">
      <Header author="State" />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">{state.counter}</div>
        <button onClick={AddConter}>Add Counter</button>
        <br />
        {/* <div>
          {foods.map((food) => (
            <p>{food}</p>
          ))}
        </div>
        <button onClick={AddFoods}>Add Food</button> */}
      </div>
    </Layouts>
  );
};

export default StatePages;
