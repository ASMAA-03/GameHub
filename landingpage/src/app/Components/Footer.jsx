function Footer(){

  const items=[
    {name:"Games",id:1},
    {name:"Tournaments",id:2},
    {name:"Community",id:3}
    ];
    const companyLinks=[
      {name:"About",id:1},
      {name:"Blog" ,id:2},
      {name:"Contact",id:3}
    ];
    const  socialLinks=[
      {name:"X",id:1},
      {name:"Discord",id:2},
      {name:"Twitch",id:3}
    ];
  return(
    <>
    <footer className="h-45 border-t border-t-gray-700 border-b border-b-gray-700 flex justify-around leading-9 text-left">

        <div className="mt-4">
          <h2 className="text-white text-2xl">🎮GAME HUB</h2>
          <p className="text-gray-300 text-sm">The ultimate gaming platform for everyone</p>
        </div>

        <div className="mt-4">
        <h2 className="text-white text-lg">Platfrom</h2>
        <ul>
          {items.map((item) =>(
            <li key={item.id} className="text-gray-400 mr-2.5  text-sm hover:cursor-pointer hover:text-white mt-1">{item.name}</li>
          ))}
          
        </ul>
        </div>

        <div className="mt-4">
          <h2 className="text-white text-lg">Company</h2>
          <ul>
            {companyLinks.map((item)=>(
              <li key={item.id} className="text-gray-400 mr-2.5  text-sm hover:cursor-pointer hover:text-white mt-1">{item.name}</li>
            ))}
          </ul>
        </div>

        <div className=" mt-4">
          <h2 className="text-white text-lg">Follow Us</h2>
          {socialLinks.map((item)=>
          <a key={item.id} className="text-gray-400 mr-2.5  text-sm hover:cursor-pointer hover:text-white">{item.name}</a>
          )}
        </div>

        </footer>

        <div className="text-gray-400 m-2 text-center">
              ©{new Date().getFullYear()} GAME HUB. All rights reserved.
        </div>
  </>
  )
}
export default Footer


