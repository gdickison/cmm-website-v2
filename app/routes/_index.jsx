import Hero from "../components/hero";
import Events from "../components/Events";
import { useLoaderData } from "@remix-run/react"
import { getComingEvents } from "../utils"

export const meta = () => {
  return [
    { title: "CMM v2" },
    { name: "description", content: "Welcome to Collegium Musicum Moscow" },
  ];
};


export default function Index() {
  const events = useLoaderData()

  return (
    <>
      <Hero/>
      <Events
        events={events}
      />
    </>
  );
}

export async function loader () {
  const events = await getComingEvents()
  console.log('events', events)
  return events
}