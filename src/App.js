import { React, lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About.js";
import Contact from "./src/components/ContactUs.js";
import Error from "./src/components/Error.js";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./utils/UserContext.js";

// const heading = React.createElement("div", { id: "parent", xyz: "abc" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "This is Namaste React"),
//     React.createElement("h2", {}, "I am h2 Tag from child1"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am h1 Tag from child2"),
//     React.createElement("h2", {}, "I am h2 Tag from child2"),
//   ]),
// ]);
// //console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const head = ReactDOM.createRoot(document.getElementById("head"));
// //root.render(heading);

// //JSX- HTML like syntax but jsx is not html in javascript also react object

// //JSX =>Babel transpiles it to React.createElement => ReactElement Object
// const JSXHeading =() => (<h1 className="heading">
//   Namaste React using JSX
//   </h1>) // write in paranthesis if you need to write in multiple lines
// // root.render(jsxHeading);
// // console.log(jsxHeading);

// // React Component (Functional Component)
// const HeadingComponent = () =>{
//   return (
//     <div id="heading">
// <h1>Namaste React!!!!!
//   </h1>
//     </div>
//   )
// }

// //Functional Component using Normal Javascript function
// const Title1 =function(){
//   return (<h1 className="heading">
//   Namaste React using JSX using normal Functional Component
//   </h1>)
// }

// const number =1000;
// const HeadingComponent2 = () => (
//     <div id="heading">
//       <JSXHeading/>
//       {Title1}
// <h1>Namaste React!!!!!
//   </h1>
//     </div>
//   )

// root.render(<HeadingComponent2/>)

// // We can render Component into JSX or JSX into Component

// const ele= (<span>Hello React</span>);
// const TitleComponent = () => (
//   <div id="heading">
//     {ele}
//     <JSXHeading></JSXHeading>
//     {number}

// <h1>Namaste React!!!!!
// </h1>
//   </div>
// )

// head.render(<TitleComponent/>)

// Food App  //

const root = ReactDOM.createRoot(document.getElementById("root"));

// you can pass argument in component in this way as well <RestrauntCard name="KFC" cuisines="Chicken Bucket" rating="4 stars" time="48 mins"></RestrauntCard>

const Grocerys = lazy(() => import("./src/components/Grocery.js"));
const About = lazy(() => import("./src/components/About.js"));
const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const data = {
      name: "Kalyani",
    };
    setUserInfo(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: "Elon" }}>
          <Header></Header>
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1> Loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contactus", element: <Contact /> },
      { path: "/", element: <Body /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1> Loading</h1>}>
            <Grocerys />
          </Suspense>
        ),
      },
    ],
  },
]);
root.render(<RouterProvider router={appRoute} />);
