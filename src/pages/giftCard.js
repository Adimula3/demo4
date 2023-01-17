import React from "react";
import Nav from "../component/nav";
import '../styles/giftCard.css';

const GiftCard = () => {
  return (
      <>
          <Nav />
          <div className="Gift-card">
              <h1>Gift-Card</h1>
              <p className="g-msg">Veximo gift cards provide a convenient, flexible and secure way to make purchases without the
                  need for a bank account or credit card.The process is simple, you just need to redeem the gift card on
                  Veximo's website, and you're good to go
              </p>
              <p className="g-msg2">Veximo is a revolutionary crypto exchange that allows you to fund your crypto wallet using a gift card.
                  With Veximo, you can easily purchase your favorite cryptocurrencies using a gift card,
                  without the need for a bank account or credit card. The process is simple and secure,
                  and you can purchase a wide range of cryptocurrencies, including Bitcoin, Ethereum, Litecoin and more.
                  Once you have funded your wallet using a Veximo gift card, you can use your cryptocurrencies to make purchases,
                  trade on the open market, or hold them as an investment. Veximo's gift card option makes it easy
                  for anyone to enter the world of cryptocurrency and take advantage of its many benefits</p>

              <div className="Gift-card-benefits">
                  <h2>Gift cards can offer various benefits for it's users</h2>
                  <div>
                      <p>Veximo Gift-cards can be used to purchase cryptocurrencies without the need for a bank
                          transfer or credit card.</p>
                      <hr/>
                  </div>
                  <div>
                      <p>Gift cards can be a secure way to purchase cryptocurrencies on an veximo as
                          it eliminates the need to share personal information or banking details</p>
                      <hr/>
                  </div>
                  <div>
                      <p>Gift cards can be personalized with a special message,
                          making them a great option for corporate gifting, employee rewards, and more.</p>
                      <hr/>
                  </div>
                  <div>
                      <p>By using Veximo gift cards, you can easily purchase your favorite products or services</p>
                      <hr/>
                  </div>
              </div>
          </div>
      </>
  );
}
export default GiftCard;
