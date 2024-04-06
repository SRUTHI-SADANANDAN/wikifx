import React, { useEffect, useState } from "react";
import { Currency_APIKEY } from "../../Constants/constantUrl";
import { Currency_instance } from "../../Constants/axios";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

const TickerText = styled.div`
  display: inline-block;
  margin-right: 1.4rem;
  span {
    color: #089981;
  }
  font-size: 18px;
  font-weight: 650;
`;

export default function Currency() {
  const [currencyPairs, setCurrencyPairs] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = (
          await Currency_instance.get(`/v1/latest?apikey=${Currency_APIKEY}`)
        ).data.data;

        setCurrencyPairs(
          Object.entries(response).map(([currency, price]) => ({
            currency,
            price,
          }))
        );
      } catch (error) {
        console.error("Error fetching currency Data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-2">
      <Marquee
        style={{ backgroundColor: "black" }}
        className="overlay"
        gradientColor="rgba(248, 251, 253, 1), rgba(248, 251, 253, 0);"
        pauseOnClick
      >
        {currencyPairs.map((pair, index) => (
          <TickerText>
            <span>
              <span style={{ color: "red" }}>USD / </span>
              {pair.currency}:
            </span>
        <span style={{color:"white"}}>    {pair.price}</span>
          </TickerText>
        ))}
      </Marquee>
    </div>
  );
}
