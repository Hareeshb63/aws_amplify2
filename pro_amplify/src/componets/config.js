let config = {
    "root": "",
    "flow": "DEFAULT",
    "data": {
      "orderId": "", /* update order id */
      "token": "", /* update token value */
      "tokenType": "TXN_TOKEN",
      "amount": "" /* update amount */
    },
  "handler": {
      "notifyMerchant": function(eventName,data){
        console.log("notifyMerchant handler function called");
        console.log("eventName => ",eventName);
        console.log("data => ",data);
      } 
  }
}