import React from "react";
import { clusterone, clustertwo, priorityfour } from "../../assets";

const Cluster = () => {
  return (
    <div className="universal_padding">
      <div className="pt-5 sm:pt-8 lg:pt-10 xl:pt-20 pb-16 lg:pr-32">
        <h1 className="text-logoColor text-contriMobile lg:text-contriDesktop font-bold mb-8 sm:w-[60%] lg:w-[50%]">
          Thrift And Cluster Contributions Built On A Modern Platform.
        </h1>

        <div className="flex">
          <div className="w-[70%] sm:w-[40%]">
            <ul className="cluster_list">
              <li className="cluster_li">Thrift Contributions</li>
              <li className="cluster_li">Cluster Contributions</li>
              <li className="cluster_li">Automated Contributions</li>
            </ul>
          </div>

          <div className="w-[30%] mt-4 sm:-mt-[7rem] lg:-mt-[9rem] xl:-mt-[10rem] sm:ml-auto sm:w-fit sm:relative mb-8">
            <img
              src={priorityfour}
              alt="priority"
              className="w-[80px] lg:w-[110px] h-[160px] hidden sm:flex sm:ml-auto sm:-mb-[6rem]"
            />
            <img
              src={clusterone}
              alt="cluster"
              className="sm:w-[250px] lg:w-[370px] xl:w-[411px]
              xl:h-[375px] sm:h-[225px] lg:h-[320px] z-50 sm:mr-7 relative"
            />
            <img
              src={priorityfour}
              alt="priority"
              className="w-[80px] lg:w-[110px] h-[160px] hidden sm:flex -z-20 sm:-mt-[6rem] sm:-ml-[3.5rem]"
            />
          </div>
        </div>

        <div className="sm:flex flex-row-reverse">
          <div className="w-[80%] sm:w-[50%] lg:w-[45%] xl:w-[40%] ml-auto">
            <h2 className="text-contriMobile lg:text-contriDesktop text-gold font-bold mb-6">
              Refer And Earn Massive Rewards.
            </h2>
            <p className="text-introPMobile lg:text-googleDesktop text-gold font-medium mb-12">
              Refer your friends and family members and earn massive rewards on
              our special referral program.
            </p>

            <button className="bg-gold text-colorWhite text-googleDesktop lg:text-introPDesktop font-semibold rounded-[20px] px-8 py-2 flex ml-auto sm:ml-0">
              Get Started
            </button>
          </div>

          <div className="relative w-[30%] sm:w-fit sm:-mt-[6rem]">
            <img
              src={priorityfour}
              alt="priority"
              className="w-[80px] lg:w-[110px] h-[160px] hidden sm:flex"
            />
            <img
              src={clustertwo}
              alt="cluster"
              className="-mt-[5.8rem] sm:-mt-[5.1rem] sm:ml-[2rem] sm:w-[250px] lg:w-[370px] xl:w-[411px] sm:h-[225px] lg:h-[320px] xl:h-[375px] z-50 sm:mr-7 relative"
            />
            <img
              src={priorityfour}
              alt="priority"
              className="w-[80px] lg:w-[110px] h-[160px] hidden sm:flex ml-auto sm:-mt-[4.7rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cluster;
