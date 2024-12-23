


export default async function Clientfetching(){
    
    const data = await fetch ("https://fakestoreapi.com/products")
    const parsedata = await data.json()
    console.log(parsedata)

    
  
    return(
        <>
        <div>
            

        </div>
        </>
    )
}