import React, { useEffect, useState } from "react";
import Tour from "./Detail";


const Tours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    {
      fetch('https://course-api.com/react-tours-project')
        .then((res) => res.json())
        .then((data) => {
          setTours(data);
        })

      setTours(tours);
    }
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };


  return (
    <section>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
