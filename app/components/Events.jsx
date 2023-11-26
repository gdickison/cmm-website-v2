import { NavLink } from "@remix-run/react"

export default function Events ({events}) {
  
  console.log('events', events)
  return (
    <div id='events' className="my-6 py-6 bg-red-900">
      <h1 className="text-blue-50 text-center font-mont text-[4vw] font-medium">{events ? "2023-2024 Season Schedule" : "Check back for the upcoming season schedule"}</h1>
      <p className='text-blue-50 text-[2vw] text-center'>{events ? "(Subject to Change)" : ""}</p>
      {events ?
        events.map(event => {
          return (
            <div key={event.id} className="my-4 mx-8 p-4 bg-[#FFEBCD] flex items-center gap-8 font-mont">
              <div className="w-44 aspect-square flex flex-col items-center justify-center">
                <div className="text-[2vw]">{event.month}</div>
                <div className="text-[2vw] font-semibold">{event.date}</div>
              </div>
              <div className="">
                <div className="text-[2vw] font-semibold">{event.title} {event.theme ? `-` : null} <span className="italic">{event.theme}</span></div>
                <div className="text-[1vw]">{event.location} / {event.time}</div>
                <div className="c">{event.description}</div>
              </div>
              {/* <Link href="/purchase_tickets">
                <a className='text-2xl'>Purchase Tickets</a>
              </Link> */}
            </div>
          )
        })
        :
        <div id="events" className="my-6 bg-red-900 min-h-screen">
          <div className="flex justify-center">
            <NavLink to="/">
              <div className="flex justify-center text-[3vw] text-blue-900 font-barlow uppercase bg-[#FFEBCD] py-2 px-20 rounded-2xl shadow-lg">Home</div>
            </NavLink>
          </div>
        </div>
      }
    </div>
  )
}
