import React from "react";
import Layouts from "../components/Layout";
import Header from "../components/Header";
import { useState } from "react";
import { useEffect } from "react";

const UseEffectPages = () => {
  const [kontak, setKontak] = useState(0);
  const [post, setPost] = useState(null);

  useEffect(() => {
    //useEffeck tanpa array dependency tidak akan merender ulang
    // console.log("This Component useEffect");
    // document.title = `Anda Telah Klik ${kontak} Kali`;
    console.log({ post });
  });

  useEffect(() => {
    //useefect array depenency kosong akan merneder tanpa ada perubahan
    //console.log("UseEffect Array Kosong");
    const GetPost = async () => {
      const fetchpost = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const jsonpost = await fetchpost.json();
      setPost(jsonpost);
    };
    GetPost();
  }, []);

  useEffect(() => {
    //jika ada perubahan maka akan merender useeffect dependency array ada
    console.log("Nilainya adalah :", kontak);
    if (kontak < 10) {
      console.log("level 1");
    } else if (kontak < 20) {
      console.log("level 2");
    } else {
      console.log("level 3");
    }
  }, [kontak]);
  return (
    <Layouts title="useEffect">
      <Header author="Use Effect" />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2>{kontak}</h2>
          <button onClick={() => setKontak(kontak + 1)}>Add Kontak</button>
        </div>
      </div>
    </Layouts>
  );
};

export default UseEffectPages;
