export const fromOptions = [
  {
    "value": "1",
    "label": "Contact Owner's Email Address"
  },
  {
    "value": "2",
    "label": "An Email Address On My Connected Domain"
  }
]
export const sendToOptions = [
  {
    "value": "contact.email",
    "label": "Contact Email(Default)",
    "group": ""
  },
  {
    "value": "contact.email_shipping",
    "label": "Contact Email(Shipping)",
    "group": ""
  },
  {
    "value": "contact.email_office",
    "label": "Contact Email(Office)",
    "group": ""
  },
  {
    "value": "contact.email_home",
    "label": "Contact Email(Home)",
    "group": ""
  },
  {
    "value": "contact.email_school",
    "label": "Contact Email(School)",
    "group": ""
  },
  {
    "value": "custom",
    "label": "Custom Email",
    "group": ""
  },
  {
    "value": "users.email",
    "label": "User Login Email",
    "group": ""
  }
]

export const sendToOptionsSms = [
  {
    "value": "contact.phone",
    "label": "Contact Phone (Default)",
    "group": ""
  },
  {
    "value": "contact.phone_shipping",
    "label": "Contact Phone(Shipping)",
    "group": ""
  },
  {
    "value": "contact.phone_office",
    "label": "Contact Phone(Office)",
    "group": ""
  },
  {
    "value": "contact.phone_home",
    "label": "Contact Phone(Home)",
    "group": ""
  },
  {
    "value": "contact.phone_school",
    "label": "Contact Phone(School)",
    "group": ""
  },
  {
    "value": "contact_owner.email",
    "label": "Contact Owner",
    "group": ""
  },
  {
    "value": "custom",
    "label": "Custom Phone Number",
    "group": ""
  }
]

export const timeZoneOptions = [
  {
    "value": "0",
    "label": "Use My Systems Set Time Zone"
  },
  {
    "value": "1",
    "label": "Infer Contacts Local Time Zone"
  }
]

export const sendTimeOptions = [
  {
    "value": "0",
    "label": "Immediately"
  }
]

export const sendDayOptions = [
  {
    "value": "0",
    "label": "Everyday"
  },
  {
    "value": "10",
    "label": "Weekdays Only"
  },
  {
    "value": "11",
    "label": "Weekends Only"
  },
  {
    "value": "1",
    "label": "Monday"
  },
  {
    "value": "2",
    "label": "Tuesday"
  },
  {
    "value": "3",
    "label": "Wednesday"
  },
  {
    "value": "4",
    "label": "Thursday"
  },
  {
    "value": "5",
    "label": "Friday"
  },
  {
    "value": "6",
    "label": "Saturday"
  },
  {
    "value": "7",
    "label": "Sunday"
  }
]

export const domainOptions = [
  {
    "value": "1",
    "label": "Do not Convert Links to Short Links"
  },
  {
    "value": "2",
    "label": "Short URL - http://sample.com/r/1234"
  },
  {
    "value": "4",
    "label": "Short URL - http://sample.com/FIRSTNAME/1234"
  }
]

export const CTROptions = [
  {
    "value": "",
    "label": "CRT"
  }
]

export const CTRRangeOptions = [
  {
    "value": "",
    "label": "Range for CTR"
  },
  {
    "value": "7",
    "label": "1 Week"
  },
  {
    "value": "14",
    "label": "2 Weeks"
  },
  {
    "value": "30",
    "label": "1 Month"
  },
  {
    "value": "90",
    "label": "3 Months"
  },
  {
    "value": "180",
    "label": "6 Months"
  },
  {
    "value": "360",
    "label": "1 Year"
  },
  {
    "value": "0",
    "label": "All Time"
  }
]

export const expireTypeOptions = [
  {
    "value": "hours",
    "label": "Hours"
  },
  {
    "value": "days",
    "label": "Days"
  }
]

export const contactSampleSystemTypes = [
  {
    "value": "Use Current Users Sub-Account",
    "label": "Use Current Users Sub-Account"
  },
  {
    "value": "Username",
    "label": "Username"
  }
]

export const addRemoveTagSelectOptions = {
  "action": [
    {
      "value": "0",
      "label": "Add Tag"
    },
    {
      "value": "1",
      "label": "Remove Tag"
    },
    {
      "value": "2",
      "label": "Remove All Tags"
    }
  ]
}

export const dontCallListSelectOptions = {
  "voice_select": [
    {
      "value": "",
      "label": "----"
    },
    {
      "value": "-2",
      "label": "Text To Speech"
    },
    {
      "value": "-3",
      "label": "Play No Recording"
    },
    {
      "value": "-1",
      "label": "Add New Audio File"
    }
  ],
  "numbers": [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0"
  ]
}

export const appendDataToContactStepOptions = {
  "appendType": [
    {
      "value": "",
      "label": "Please select an append service"
    },
    {
      "value": "2",
      "label": "Add Validation Status"
    }
  ],
  "statusType": [
    {
      "value": "custom",
      "label": "Custom Validation Status"
    },
    {
      "value": "0",
      "label": "Valid"
    },
    {
      "value": "10",
      "label": "Duplicate Phone"
    },
    {
      "value": "20",
      "label": "Duplicate Email"
    },
    {
      "value": "40",
      "label": "Invalid First Name"
    },
    {
      "value": "100",
      "label": "Invalid Phone"
    },
    {
      "value": "200",
      "label": "Invalid Email"
    },
    {
      "value": "400",
      "label": "Rejected By State&Phone"
    },
    {
      "value": "1000",
      "label": "Rejected By State&Email"
    },
    {
      "value": "2000",
      "label": "Rejected By SourceCode&Phone"
    },
    {
      "value": "4000",
      "label": "Rejected By SourceCode&Email"
    },
    {
      "value": "-1",
      "label": "Invalid"
    }
  ]
}

export const callCenterSelectOptions = {
  "action": [
    {
      "value": "Add to Call List",
      "label": "Add to Call List"
    },
    {
      "value": "Remove from Call List",
      "label": "Remove from Call List"
    }
  ],
  "addCampaign": [
    {
      "value": "Please select campaign",
      "label": "Please select campaign"
    }
  ],
  "removeCampaign": [
    {
      "value": "Please select campaign",
      "label": "Please select campaign"
    },
    {
      "value": "All Campaigns",
      "label": "All Campaigns"
    }
  ],
  "priority": [
    {
      "value": "1",
      "label": "1"
    },
    {
      "value": "2",
      "label": "2"
    },
    {
      "value": "3",
      "label": "3"
    },
    {
      "value": "4",
      "label": "4"
    },
    {
      "value": "5",
      "label": "5"
    },
    {
      "value": "6",
      "label": "6"
    },
    {
      "value": "7",
      "label": "7"
    },
    {
      "value": "8",
      "label": "8"
    },
    {
      "value": "9",
      "label": "9"
    },
    {
      "value": "10",
      "label": "10"
    },
    {
      "value": "Process Count + 1",
      "label": "Process Count + 1"
    },
    {
      "value": "(Lead Age in Days / 30) + 1",
      "label": "(Lead Age in Days / 30) + 1"
    },
    {
      "value": "(Lead Age in Days / 30) + Process Count",
      "label": "(Lead Age in Days / 30) + Process Count"
    }
  ],
  "addPhoneSkill": [
    {
      "value": "Please select phone skill",
      "label": "Please select phone skill"
    }
  ],
  "removePhoneSkill": [
    {
      "value": "Please select phone skill",
      "label": "Please select phone skill"
    }
  ]
}

export const createOpportunitySelectOptions = {
  "owner": [
    {
      "value": "-1",
      "label": "Randomly select assignee",
      "group": "Options"
    },
    {
      "value": "-2",
      "label": "From user with tag",
      "group": "Options"
    },
    {
      "value": "-3",
      "label": "Random select from user",
      "group": "Options"
    },
    {
      "value": "-4",
      "label": "Contact's owner",
      "group": "Options"
    }
  ],
  "timeFormat": [
    {
      "value": "hours",
      "label": "Hours"
    },
    {
      "value": "days",
      "label": "Days"
    }
  ]
}

export const captureDigitSelectOptions = {
  "voice_select": [
    {
      "value": "-2",
      "label": "Text To Speech"
    },
    {
      "value": "-1",
      "label": "Add New Audio File"
    },
    {
      "value": "-3",
      "label": "Play No Recording"
    }
  ]
}

export const campanyDirectoryFormSelectOptions = {
  "voice_select": [
    {
      "group": "American English",
      "name": "voice_select",
      "value": "Salli",
      "label": "Salli (Female)"
    },
    {
      "group": "Australian English",
      "name": "voice_select",
      "value": "Olivia",
      "label": "Olivia (Female)"
    }
  ]
}

export const conditionBasedOnAnotherFormSelectOptions = {
  "when": [
    {
      "value": "0",
      "label": "One or more Of the steps below"
    },
    {
      "value": "1",
      "label": "All of the steps below"
    },
    {
      "value": "2",
      "label": "One or more Of the events below"
    },
    {
      "value": "3",
      "label": "All of the events below"
    }
  ],
  "events": [
    {
      "value": "1",
      "label": "Had meeting"
    },
    {
      "value": "2",
      "label": "Booked Appointment"
    }
  ],
  "eventStatus": {
    "send_email": [
      {
        "value": "opened",
        "label": "Opened"
      },
      {
        "value": "clicked",
        "label": "Clicked"
      },
      {
        "value": "failed",
        "label": "Failed"
      }
    ],
    "send_sms": [
      {
        "value": "clicked",
        "label": "Clicked"
      },
      {
        "value": "failed",
        "label": "Failed"
      }
    ]
  }
}

export const contactLookupSelectOptions = {
  "contactMatch": [
    {
      "value": "0",
      "label": "Merge with older existing old contact (Ensuring new duplicate contact not created)"
    },
    {
      "value": "1",
      "label": "Delete existing older contact and keep newest contact"
    },
    {
      "value": "2",
      "label": "Do nothing and instead show a \"Contact Found\" YES/NO branch on this search step"
    }
  ]
}

export const contactOwnerSelectOptions = {
  "userAction": [
    {
      "value": "1",
      "label": "Remove Owner"
    },
    {
      "value": "2",
      "label": "Set Owner"
    }
  ],
  "owner": [
    {
      "value": "-1",
      "label": "Randomly Select Owner",
      "group": "Options"
    },
    {
      "value": "-2",
      "label": "From CRM User's with Tag",
      "group": "Options"
    }
  ]
}

export const createBillingSubscriptionFormSelectOptions = {
  "integration": [
    {
      "value": "None",
      "label": "None"
    }
  ],
  "plans": [
    {
      "value": "None",
      "label": "None"
    }
  ]
}

export const customApiFormSelectOptions = {
  "methodOptions": [
    {
      "value": "post",
      "label": "POST"
    },
    {
      "value": "get",
      "label": "GET"
    }
  ],
  "phoneFormatOptions": [
    {
      "value": "1",
      "label": "Phone (E.164)"
    },
    {
      "value": "2",
      "label": "Phone (US 10 Digit)"
    }
  ]
}

export const pixelFireSelectOptions = {
  "pixelType": [
    {
      "value": "0",
      "label": "Custom URL"
    }
  ]
}

export const randomRouteTestPickRouteOptons = [
  {
    "value": "randomly_pick_route",
    "label": "Randomly Pick Route"
  },
  {
    "value": "randomly_pick_percentage_route",
    "label": "Randomly Pick Route Based on Percentages"
  }
]

export const rateLimitSelectOptions = {
  "interval": [
    {
      "value": "minute",
      "label": "Minute"
    },
    {
      "value": "hour",
      "label": "Hour"
    },
    {
      "value": "day",
      "label": "Day"
    },
    {
      "value": "week",
      "label": "Week"
    },
    {
      "value": "month",
      "label": "Month"
    }
  ],
  "groupContacts": [
    {
      "value": "none",
      "label": "No Grouping(All Contacts Counted)"
    },
    {
      "value": "input",
      "label": "Input"
    },
    {
      "value": "sc",
      "label": "Source Code"
    },
    {
      "value": "subid",
      "label": "Sub Id"
    },
    {
      "value": "state",
      "label": "State"
    },
    {
      "value": "input_sc",
      "label": "Input & SourceCode"
    },
    {
      "value": "input_sc_subid",
      "label": "Input & SourceCode & Sub Id"
    },
    {
      "value": "input_sc_subid_state",
      "label": "Input & SourceCode & Sub Id & State"
    }
  ]
}

export const scoreContactSelectOptions = {
  "actions": [
    {
      "value": "",
      "label": "No Action"
    },
    {
      "value": "1",
      "label": "Increase By"
    },
    {
      "value": "2",
      "label": "Decrease By"
    },
    {
      "value": "3",
      "label": "Set Score"
    }
  ],
  "qualityScoreRanks": [
    {
      "value": "1",
      "label": "1"
    },
    {
      "value": "2",
      "label": "2"
    },
    {
      "value": "3",
      "label": "3"
    },
    {
      "value": "4",
      "label": "4"
    },
    {
      "value": "5",
      "label": "5"
    }
  ]
}

export const validationSelectOptions = {
  "validationIntegration": [
    {
      "value": "1",
      "label": "1"
    },
    {
      "value": "2",
      "label": "2"
    }
  ],
  "timeOut": [
    {
      "value": "Valid",
      "label": "Valid"
    },
    {
      "value": "Invalid",
      "label": "Invalid"
    }
  ]
}

export const waitForAmountOfTimeSelectOptions = {
  "interval": [
    {
      "value": "1",
      "label": "minute"
    },
    {
      "value": "2",
      "label": "hour"
    },
    {
      "value": "3",
      "label": "day"
    },
    {
      "value": "4",
      "label": "week"
    },
    {
      "value": "5",
      "label": "month"
    }
  ]
}

export const waitForSmsReplySelectOptions = {
  "timeFormat": [
    {
      "value": "Hours",
      "label": "Hours"
    },
    {
      "value": "Days",
      "label": "Days"
    }
  ],
  "casesOptions": [
    {
      "value": "message_contains",
      "label": "Message Contains"
    },
    {
      "value": "exact_match",
      "label": "Exact Match"
    }
  ]
}

export const waitTaskSelectOptions = {
  "tasks": [
    {
      "value": "1",
      "label": "All items related to this contact"
    },
    {
      "value": "2",
      "label": "Any item related to this contact"
    },
    {
      "value": "3",
      "label": "All items created in this workflow"
    },
    {
      "value": "4",
      "label": "Any item created in this workflow"
    }
  ],
  "timeMeasures": [
    {
      "value": "minutes",
      "label": "Minutes"
    },
    {
      "value": "hours",
      "label": "Hours"
    },
    {
      "value": "days",
      "label": "Days"
    },
    {
      "value": "week",
      "label": "Week"
    },
    {
      "value": "month",
      "label": "Month"
    }
  ]
}

export const LogicOperator = [
  {
    "value": "and",
    "label": "And"
  },
  {
    "value": "or",
    "label": "Or"
  }
]

export const timeUnitOptons = [
  {
    "value": "1",
    "label": "Minute"
  },
  {
    "value": "2",
    "label": "Hour"
  },
  {
    "value": "3",
    "label": "Day"
  },
  {
    "value": "4",
    "label": "Week"
  },
  {
    "value": "5",
    "label": "Month"
  }
]

export const DelayItems = [
  {
    "value": "[delay:1s]",
    "label": "Add 1 Second Delay"
  },
  {
    "value": "[delay:2s]",
    "label": "Add 2 Seconds Delay"
  },
  {
    "value": "[delay:3s]",
    "label": "Add 3 Seconds Delay"
  },
  {
    "value": "[delay:5s]",
    "label": "Add 5 Seconds Delay"
  },
  {
    "value": "[delay:10s]",
    "label": "Add 10 Seconds Delay"
  }
]

export const timeInterval = {
  "minute": "Minute",
  "hour": "Hour",
  "day": "Day",
  "week": "Week",
  "month": "Month"
}

export const pipelinesWithAllOption = {
  "label": "All Pipelines",
  "value": "-1"
}
export const triggerChatInboxOptions = {
  "value": "0",
  "label": "All Inbox"
}

export const optinStatus = {
  "optin_email": "Opt-In For Email",
  "optin_phone": "Opt-In For Phone Calls",
  "optin_sms": "Opt-In For SMS",
  "optin_phonesms": "Opt-In For Phone And SMS",
  "optin_all": "Opt-In For All"
}
export const otherPhoneNumberOptions = [
  {
    "label": "Other Phone Number",
    "value": "0"
  }
]
export const confirmKeyOptions = [
  {
    "value": "",
    "label": "Instantly Transfer - No Confirmation Key Required"
  },
  {
    "value": "0",
    "label": "0"
  },
  {
    "value": "1",
    "label": "1"
  },
  {
    "value": "2",
    "label": "2"
  },
  {
    "value": "3",
    "label": "3"
  },
  {
    "value": "4",
    "label": "4"
  },
  {
    "value": "5",
    "label": "5"
  },
  {
    "value": "6",
    "label": "6"
  },
  {
    "value": "7",
    "label": "7"
  },
  {
    "value": "8",
    "label": "8"
  },
  {
    "value": "9",
    "label": "9"
  },
  {
    "value": "*",
    "label": "*"
  },
  {
    "value": "#",
    "label": "#"
  }
]

export const boolOptions = [
  {
    "label": "YES",
    "value": "1"
  },
  {
    "label": "NO",
    "value": "0"
  }
]

export const checkOptios = [
  {
    "label": "Checked",
    "value": "true"
  },
  {
    "label": "Unchecked",
    "value": "false"
  }
]

export const smsFromnumberDefaultOptions = {
  "value": "",
  "label": "Please select number"
}

export const createSubscriptionPaymentMethodOptions = [
  {
    "label": "Free -  Do Not Charge the Contact",
    "value": "0"
  },
  {
    "label": "Use the Contacts Default Credit Card",
    "value": "1"
  },
  {
    "label": "Use a Random Valid Credit Card on the Contact",
    "value": "2"
  }
]

export const defaultRandomRoutes = [
  {
    "value": "Route A",
    "desc": "Route A Desc",
    "percentage": ""
  },
  {
    "value": "Route B",
    "desc": "Route B Desc",
    "percentage": ""
  }
]

export const waitForAmountOfTimeCounterType = {
  "0": "Wait For Amount of Time",
  "1": "Wait Till Specific Date",
  "2": "Wait Till Specific Calendar Day",
  "3": "Wait Till Specific Week Day"
}

export const waitForAmountOfTimeOffsetType = {
  "after": "+",
  "before": "-"
}

export const waitForAmountOfTimeVariable = [
  {
    "value": "contact.dob",
    "label": "Contact Birthday",
    "group": "Contact"
  }
]
