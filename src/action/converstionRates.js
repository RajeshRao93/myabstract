import axios from "axios";

const getExchangeRates = () => {
  const options = {
    method: "GET",
    url: "https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest",
    params: { from: "EUR", to: "INR" },
    headers: {
      "X-RapidAPI-Host":
        "currency-conversion-and-exchange-rates.p.rapidapi.com",
      "X-RapidAPI-Key": "5b6bac07f2mshbacedf94d8d5a12p10e35ajsn0d32354f31a4",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default getExchangeRates;
