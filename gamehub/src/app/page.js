import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Trending from "../components/Trending";
import Stats from "../components/Stats";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
     <Navbar/>
     <HeroSection/>
     <Trending/>
     <Stats/>
     <Categories/>
     <Footer/>
    </>
     
  )
}
