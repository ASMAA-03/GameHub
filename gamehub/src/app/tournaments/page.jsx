import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy } from "lucide-react";

export default function Tournaments() {
return(
  <>
  <Navbar/>
  <section className="relative h-screen flex flex-col text-gray-200">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/images/tournamentsbg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />

  <div className=" z-10 py-52 px-9">
    <h1 className="text-8xl font-bold">
      Tournament
    </h1>
    <p className="px-4"><span className="text-violet-500">HOME *</span> TOURNAMENT</p>
  </div>
</section>
<section className="h-[90vh] flex flex-col items-center text-amber-50 py-9 ">
  <div className="text-fuchsia-400">
    <p className="tracking-[8px] w-80 text-center">⋆ Our Tournament ⋆</p>
  </div>
  <div>
    <h1 className="text-7xl">PLAY TO EARN GAMES</h1>
  </div>
  <div className="flex gap-15 p-7">
    <div className="border border-gray-500 h-[50vh] w-80 rounded-4xl p-5 bg-[rgba(57,0,114,0.126)] ">
     
      <div className="flex flex-col items-center"> 
        <span className="text-gray-300 font-bold tracking-widest">Tournament</span>
        <h2 className="text-purple-500 text-3xl font-bold ">OF WEEKLY</h2>
      </div>

      <div>
        <p className="text-center rounded-4xl mt-3 bg-[rgba(57,0,114,0.126)] py-0.5"><Trophy size={20} className="text-yellow-500 inline mx-2" />3 PRIZE PLACES</p>
      </div>

<div className="flex flex-col gap-3 py-9">

  <div>
<div className="flex justify-between rounded-4xl  bg-[rgba(57,0,114,0.126)] p-2">
      <h4>Black Ninja</h4>
      <span>$ 75000</span>
    </div>
  </div>
  <div>
<div className="flex justify-between rounded-4xl  bg-[rgba(57,0,114,0.126)] p-2">
      <h4>Foxtie Max</h4>
      <span>$ 75000</span>
    </div>
  </div>
  <div>
<div className="flex justify-between rounded-4xl  bg-[rgba(57,0,114,0.126)] p-2">
      <h4>Holam Doxe</h4>
      <span>$ 75000</span>
    </div>
  </div>
      </div>

    </div>

      <div className="border border-gray-500 h-[50vh] w-80 rounded-4xl p-5 bg-[rgba(57,0,114,0.126)]">
     
      <div className="flex flex-col items-center"> 
        <span className="text-gray-200 font-bold tracking-widest">Tournament</span>
        <h2 className="text-purple-500 text-3xl font-bold">OF WEEKLY</h2>
      </div>

      <div>
        <p className="text-center rounded-4xl mt-3 bg-[rgba(57,0,114,0.126)] py-0.5"><Trophy size={20} className="text-gray-400 inline mx-2"/>2 PRIZE PLACES</p>
      </div>
<div className="flex flex-col gap-3 py-9">

  <div>
    <div className="flex justify-between rounded-4xl  bg-purple-950/35 p-2">
      <h4>Black Ninja</h4>
      <span>$ 75000</span>
    </div>
  </div>
  <div>
   <div className="flex justify-between rounded-4xl bg-purple-950/35 p-2">
      <h4>Foxtie Max</h4>
      <span>$ 75000</span>
    </div>
  </div><div>
    <div className="flex justify-between rounded-4xl  bg-purple-950/35 p-2">
      <h4>Holam Doxe</h4>
      <span>$ 75000</span>
    </div>
  </div>
      </div>
    </div>
    

     <div className="border border-gray-500 h-[50vh] w-80 rounded-4xl p-5 bg-[rgba(57,0,114,0.126)]">
      <div className="flex flex-col items-center"> 
        <span className="text-gray-200 font-bold tracking-widest">Tournament</span>
        <h2 className="text-purple-500 text-3xl font-bold">LUCKY CARD</h2>
      </div>
      <div>
        <p className="text-center rounded-4xl mt-3 bg-[rgba(57,0,114,0.126)] py-0.5"><Trophy size={20} className="text-red-400 inline mx-2"/>1 PRIZE PLACES</p>
      </div>
<div className="flex flex-col gap-3 py-9">
  <div>
<div className="flex justify-between rounded-4xl  bg-purple-950/35 p-2">
      <h4>Black Ninja</h4>
      <span>$ 75000</span>
    </div>
  </div>
  <div>
<div className="flex justify-between rounded-4xl  bg-purple-950/35 p-2">
      <h4>Foxtie Max</h4>
      <span>$ 75000</span>
    </div>
  </div><div>
<div className="flex justify-between rounded-4xl  bg-purple-950/35 p-2">
      <h4>Holam Doxe</h4>
      <span>$ 75000</span>
    </div>
  </div>
      </div>
    </div>
  
  </div>
</section>
  <Footer/>
  </>
);


}