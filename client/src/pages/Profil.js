import React from "react";
import Log from "../components/Log/index";

const Profil = () => {
  return (
    <div className="profil-page">
      <div className="log-container">
        <Log signin={false } signup={true}/>
        <div className="img-container">
          <img src="../../public.img/log.svg" alt="log-img" />
        </div>
      </div>
    </div>
  );
};

export default Profil;
