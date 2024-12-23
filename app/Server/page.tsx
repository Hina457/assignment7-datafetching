



interface Idata{
id:number
name:string
type:string
available:boolean

}

export default async function ServerFetching()
{
    const data = await fetch ("https://simple-books-api.glitch.me/books/")
    const parsedata:Idata[] = await data.json()
    console.log(parsedata)

    
    return(
        <>
        <div className="bg-black">
            <h1 className="text-center text-white pt-7 font-serif text-2xl">Welcome to the Simple Books App</h1>
            <div className="grid gap-5 grid-cols-3 grid-rows-2 "> 
            
            
              
                {parsedata.map((datas,index)=>{
                    
                return(
                   
                // All div 
                    <div key={index} className="my-5 h-[200px] bg-orange-500 hover:scale-95 shadow-[0px_4px_10px_rgba(255,255,0,0.6)] text-white rounded-lg flex flex-col">
      
                        <p className="text-black font-serif font-bold ml-[30%] mt-[10%]">{datas.name}</p>
                        <p className="text-white ml-[30%]">Type:{datas.type}</p>
                        <p className="text-green-500 ml-[30%]">{datas.available?"available":<span className="text-red-600">unavailable</span>}</p>
                        <button className="w-[80px] h-[40px] ml-[30%] bg-orange-600 hover:bg-yellow-300 rounded-[5px]">{datas.available?"view":"unavailble"}</button>
               
        
                        
                    </div>    
                    
                   

                
                )
            })};
            
            </div>
        </div>
        
        
        
        </>
    )
}
