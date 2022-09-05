export const subscriptionPaymentMethodOptions = [
    {
      "last_four": "Free",
      "credit_card_id": "0",
    }
  ];
  
  export const transactionStatusColorOptions = {
    "-1": "success",
    "42": "error",
    "40": "warning",
    "41": "success",
    "43": "warning",
    "44": "error",
    "45": "secondary",
    "46": "secondary",
    "47": "default",
    "48": "success",
    "49": "error",
    "50": "error",
  };
  
  export const transactionStatusOptions = {
    "-1": "Charged",
    "48": "Authorized",
    "49": "Failed",
    "50": "Failed",
    "42": "Declined",
  };
  
  export const contactDetailTransactionListOptions = {
    "14": "Authorized",
    "15": "Refund",
    "16": "Charge Back",
    "-1": "Charged",
  };
  
  export const contactDetailTransactionListFailedOptions = {
    "14": "Authorize Failed",
    "15": "Refund Failed",
    "16": "Charge Back Failed",
    "-1": "Charged Failed",
  };
  
  export const refundActions = [{
			"value": "0",
			"label": "No Refund"
		},
		{
			"value": "1",
			"label": "Prorated Refund Current Period"
		},
		{
			"value": "2",
			"label": "Full Refund Current Period"
		}
	];