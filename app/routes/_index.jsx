import Hero from "../components/hero";
export const meta = () => {
  return [
    { title: "CMM v2" },
    { name: "description", content: "Welcome to Collegium Musicum Moscow" },
  ];
};


export default function Index() {
  return (
    <Hero/>
  );
}
