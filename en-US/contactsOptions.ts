const ContactsConditionOptions ={
		"date": {
			"on": "On",
			"after": "After",
			"before": "Before",
			"between": "Between "
		},
		"tag": {
			"has": "Has Tag",
			"has_no": "Does't Have Tag"
		},
		"flow": {
			"subscribe": "Subscribe To Flow",
			"not_subscribe": "No Subscribe To Flow"
		},
		"input": {
			"is": "Is",
			"is_not": "Is Not",
			"is_in": "Is In",
			"is_not_in": "Is Not In",
			"defined": "Is Defined",
			"not_defined": "Is Not Defined"
		},
		"owner": {
			"is": "Is",
			"is_not": "Is Not",
			"is_in": "Is In",
			"is_not_in": "Is Not In",
			"defined": "Is Defined",
			"not_defined": "Is Not Defined"
		},
		"email": {
			"equal": "Equal To",
			"less": "Less Than",
			"greater": "Greater Than",
			"between": "Between"
		},
		"score": {
			"equal": "Equal To",
			"not_equal": "Not Equal To",
			"greater": "Higher Than",
			"greater_or_equal": "Higher Than or Equal",
			"less": "Lower Than",
			"less_or_equal": "Lower Than or Equal",
			"set": "Is Set",
			"not_set": "Is Not Set"
		}
	
};

export default ContactsConditionOptions;


export const roleOtherOptions = [{
		"label": "Use Package Role",
		"value": "0"
	}];

export const fileFormatOptions = [{
		"label": "CSV",
		"value": "csv"
	}];

export const exportDataType = [
		{
			"label": "Contact Info",
			"value": "contact_info",
		},
		{
			"label": "Form Submission",
			"value": "form_submission",
		},
	];