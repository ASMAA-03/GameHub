import Footer from "@/components/Footer";
export default function SignInPage() {
  return (
    <>
      <div className="h-screen flex justify-center items-center text-amber-50 bg-[url('/images/signinbg.jpg')] bg-cover bg-center bg-no-repeat">
        <form className="h-[700px] w-[500px] border border-gray-400/90 rounded-4xl px-15  py-10">
          <div>
            <h1 className="text-5xl text-center py-8 text-purple-400/60 font-bold tracking-wider">Sign In</h1>
          </div>
          <div className="flex flex-col justify-around h-[450px] py-9">
            <div className="px-2">
            <label className="block text-purple-400/80 font-bold tracking-widest mb-1">Name :</label>
            <input type="text" name="human being" className="border border-gray-400/45 w-96 rounded-2xl h-12 p-5"></input>
          </div>

            <div className="px-2">
            <label className="block text-purple-400/80 font-bold tracking-widest mb-1">Email :</label>
            <input type="text" name="human being" className="border border-gray-400/45 w-96 rounded-2xl h-12 p-5"></input>
          </div>

            <div className="px-2">
            <label className="block text-purple-400/80 font-bold tracking-widest mb-1">Password :</label>
            <input type="text" name="human being" className="border border-gray-400/45 w-96 rounded-2xl h-12 p-5"></input>
            </div>
            <button className="bg-purple-500/50 rounded-3xl p-3 text-3xl text-gray-300 mt-8 hover:opacity-95 cursor-pointer ">Sign in</button>
          </div>
        </form>
    </div>
    </>
    

  );
}