import axios from "axios";
import emailjs from "emailjs-com";

const getExchangeRates = () => {
  const options = {
    method: "GET",
    url: process.env.REACT_APP_FOREX_API_URL,
    params: {
      format: "json",
      from: process.env.REACT_APP_CONVERT_FROM,
      to: process.env.REACT_APP_CONVERT_TO,
      amount: "1",
    },
    headers: {
      "X-RapidAPI-Host": process.env.REACT_APP_FOREX_RAPID_API_HOST,
      "X-RapidAPI-Key": process.env.REACT_APP_FOREX_RAPID_API_KEY,
    },
  };

  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentDay = currentTime.getDay();
  console.log("Day = " + currentDay);
  console.log("Hour = " + currentHour);
  console.log("Env from hour = " + process.env.REACT_APP_FROM_HOUR);
  console.log("Env to Hour = " + process.env.REACT_APP_TO_HOUR);

  // Running it only between 0800-1700 and only weekdays (0 is Sunday, 6 is Saturday)
  if (
    currentHour >= process.env.REACT_APP_FROM_HOUR &&
    currentHour < process.env.REACT_APP_TO_HOUR &&
    currentDay !== 0 &&
    currentDay !== 6
  ) {
    axios
      .request(options)
      .then(function (response) {
        let currentRate = response.data.rates.INR.rate;
        console.log("called forex api");
        console.log("current rate is =" + currentRate);
        console.log(
          "Threshold value is " + process.env.REACT_APP_THRESHOLD_VALUE_INR
        );
        if (currentRate >= process.env.REACT_APP_THRESHOLD_VALUE_INR) {
          sendEmail(currentRate);
          console.log("Email sent!");
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }
};

export default getExchangeRates;

const sendEmail = (currentRate) => {
  var content = {
    to_name: "Rajesh",
    from_name: "myabstract",
    inr_value: currentRate,
    to_email: process.env.REACT_APP_TO_EMAIL,
  };

  emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    content,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  );
};
