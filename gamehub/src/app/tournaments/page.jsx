import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Tournaments() {
return(
  <>
  <Navbar/>
  <section className="relative h-screen flex ">
       <div
           className="absolute inset-0 z-0"
           style={{
            backgroundImage: "url('/images/.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
<div>
<div className="text-5xl">Create your tournament here</div>
<button>Create Account</button>
<button>Join Tournaments</button>
</div>


<div>All tournaments</div>
<div>All Games</div>
<div>Price</div>
<div>All Type</div>

<div>

</div>



  </section>
  <Footer/>
  </>
);


}