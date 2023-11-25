import stylesheet from "~/tailwind.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Header from "./components/header";
import Footer from "./components/footer";

export const links = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400&Roboto:wght@400;700&family=Oswald:wght@400;700&family=Montserrat:wght@100;200;300;400;500;600;700&family=Merriweather:wght@400;700&family=Lato:wght@400;700&display=swap"}
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-blue-950">
        <header>
          <Header/>
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
