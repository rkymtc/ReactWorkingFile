import React from "react";
import Header from "./component/Header";
import Review from "./component/Review";

function App() {
  return (
    <main>
      <section className="container">
       <Header/>
        <Review />
      </section>
    </main>
  );
}

export default App;
