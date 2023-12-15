import { useEffect, useState } from "react";

const useCountry = () => {
    const [countries, setCountry] = useState(null)

    useEffect(() => {
        fetch("/country.json")
          .then((res) => res.json())
          .then((data) => setCountry(data));
      }, []);
    return countries
};

export default useCountry;