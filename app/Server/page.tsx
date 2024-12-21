

export default async function ServerFetching()
{
    const data = await fetch (" https://simple-books-api.glitch.me/books/")
    const parsedata = await data.json()
    console.log(parsedata)

    
    return(
        <>
        <div>
            <h1>Welcome to the Simple Books App</h1>
            <ul>
                {parsedata.map((datas:any ,item:any)=>{
                return(
                    <ul key={item} className="my-5">
                        <li>{datas.id}</li>
                        <li>{datas.name}</li>
                        <li>{datas.type}</li>
                        <li>{datas.availible}</li>

                    </ul>
                )
            })}
            </ul>
        </div>
        </>
    )
}


