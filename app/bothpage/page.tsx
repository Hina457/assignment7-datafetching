



import Link from "next/link"
export default function Bothpage(){
    return(
        <div>
           
          <div className="w-full h-auto bg-black">
            <h1 className="text-center text-orange-500 text-3xl font-serif pt-6">Data Fetching...</h1>
            {/* main div */}
            <div className="w-[1000px] h-[450px]  gap-[10px] flex  ml-[100px] ">
  
            <div className="w-[500px] h-[400px] bg-orange-500 mt-[50px] rounded-[15px] hover:scale-95 shadow-[0px_4px_10px_rgba(255,255,0,0.6)]">

                <h1 className="text-center text-2xl font-bold font-sans mt-20">Server-Side Data Fetching..</h1>
                <p className="text-center w-[400px] ml-10 mt-4">Server-side data fetching is a technique where data is fetched on the server before rendering the webpage. This approach ensures that the content is pre-rendered and sent to the client, resulting in better performance, improved SEO, and enhanced user experience. It is particularly useful for dynamic applications that require up-to-date data on every request.</p>
            </div>
            <div className="w-[500px] h-[400px] bg-orange-500 mt-[50px] rounded-[15px] hover:scale-95 shadow-[0px_4px_10px_rgba(255,255,0,0.6)]">
            <h1 className="text-center text-2xl font-bold font-sans mt-20">Client-Side Data Fetching..</h1>
            <p className="text-center w-[400px] ml-10 mt-4">Client-side data fetching is a method where data is retrieved directly in the browser after the initial HTML has been loaded. This approach allows for faster initial page loads, as only the essential structure of the page is sent from the server, and the dynamic data is fetched asynchronously. It is commonly used in Single Page Applications (SPAs) where interactivity and frequent updates are required.</p>
            </div>
    

            </div>
            <div className="flex justify-center gap-5">
            <button className=" mt-[30px] text-white font-bold hover:bg-orange-500 font-serif w-[250px] rounded-[5px] h-[50px] bg-yellow-500">
       <Link href="/Server">Server-Side Data Fetching</Link> 
       </button>
       {/* second button */}
       <button className=" mt-[30px] text-white font-bold hover:bg-orange-500 font-serif w-[250px] rounded-[5px] h-[50px] bg-yellow-500">
       <Link href="/Client">Client-Side Data Fetching</Link> 
       </button>
       </div>
       {/* back */}
       <button className=" mt-[30px] ml-[47%] text-white font-bold hover:bg-orange-500 font-serif w-[100px] rounded-[5px] h-[50px] bg-yellow-500">
       <Link href="/Mainpage">Back</Link> 
       </button>
       
          </div>

        </div>
    )
}