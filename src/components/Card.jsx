
const Card = ({data}) => {
    
    let badgeText = null    

  return (
    <div className="mt-6  flex justify-between pl-6 w-full gap-x-4 relative md:w-[600px] md:mx-auto">
        {data.map((item) => (
            <div key={item.id}>

                <img src={`/img/${item.coverImg}`} alt="" className="h-[150px] md:h-[250px] md:w-[230px]"/>
                <div className="absolute p-1 w-12 bg-white top-1 ml-1 rounded-sm text-[.5rem] flex align-center justify-center">{badgeText = item.openSpots === 0 ? 'SOLD OUT' : 'ONLINE'}</div>

                <p>
                    <img src="/img/Star.png" alt="" className="w-2.5 mt-1 inline"/> <span className="text-[.5rem]">{item.stats.rating}.0</span> <span className="text-[.5rem] text-[#918e9b]">(6)&bull;USA</span>
                </p>
                <p className="text-[.6rem]">{item.title}</p>
                <p className="text-[.6rem]"><span className="font-bold">From ${item.price}</span> / person</p>
            </div>
       ))}
    </div>
  )
}

export default Card