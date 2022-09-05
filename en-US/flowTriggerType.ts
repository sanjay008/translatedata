import { assetPath } from "@/utils/utility";
export default {
  "form": {
    "title": "Form",
    "icon": "",
    "triggers": [
      "40",
      "41"
    ]
  },
  "billing": {
    "title": "Billing",
    "icon": "",
    "triggers": [
      "26",
      "38",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32"
    ]
  },
  "contact_score": {
    "title": "Contact Score",
    "icon": "",
    "triggers": [
      "14",
      "15",
      "12",
      "13"
    ]
  },
  "crm": {
    "title": "CRM",
    "icon": "",
    "triggers": [
      "8",
      "42"
    ]
  },
  "flow": {
    "title": "Tag",
    "icon": "",
    "triggers": [
      "3"
    ]
  },
  "inputs": {
    "title": "Inputs",
    "icon": "",
    "triggers": [
      "2"
    ]
  },
  "opportunity": {
    "title": "Opportunity",
    "icon": "",
    "triggers": [
      "16",
      "17",
      "18",
      "19",
      "20"
    ]
  },
  "task": {
    "title": "Task",
    "icon": "",
    "triggers": [
      "21",
      "22",
      "23",
      "24"
    ]
  },
  "voip": {
    "title": "VoIP",
    "icon": "",
    "triggers": [
      "5",
      "39"
    ]
  },
  "chat": {
    "title": "Chat",
    "icon": "",
    "triggers": [
      "36",
      "43",
      "37",
      "44"
    ]
  },
  "triggers": {
    "1": {
      "icon": "assetPath(`static/icons/flow/trigger/icon_manually.png`)",
      "title": "Contact Received From Input(s)",
      "trigger_type": "1",
      "desc": "Contacts created from related Inputs are processed automatically in this Flow."
    },
    "2": {
      "icon": "assetPath(`static/icons/flow/trigger/icon_manually.png`)",
      "title": "Contact Received From Input(s)",
      "trigger_type": "2",
      "desc": "Contacts created from related Inputs are processed automatically in this Flow."
    },
    "3": {
      "title": "Tag Added",
      "icon": "assetPath(`static/icons/flow/trigger/icon_tag.png`)",
      "trigger_type": "3",
      "desc": "Listening for tag adding to lead"
    },
    "5": {
      "title": "Call Terminated",
      "icon": "assetPath(`static/icons/flow/trigger/icon_call_terminated.png`)",
      "desc": "Listening to terminated PPC call",
      "trigger_type": "5"
    },
    "6": {
      "title": "Ping Tree - Contact Sold",
      "icon": "assetPath(`static/icons/flow/trigger/icon_pingtree_sold.png`)",
      "trigger_type": "6",
      "desc": "Listening for ping tree sold"
    },
    "7": {
      "title": "Ping Tree - Contact Unsold",
      "icon": "assetPath(`static/icons/flow/trigger/icon_pingtree_unsold.png`)",
      "trigger_type": "7",
      "desc": "Listening for ping tree unsold"
    },
    "8": {
      "title": "User Created",
      "icon": "assetPath(`static/icons/flow/trigger/icon_new_user.png`)",
      "trigger_type": "8",
      "desc": "Listening for new user created"
    },
    "10": {
      "title": "PPC - Contact Sold",
      "icon": "assetPath(`static/icons/flow/trigger/icon_call_sold.png`)",
      "desc": "Listening to ppc contact sold",
      "trigger_type": "10"
    },
    "11": {
      "title": "PPC - Contact UnSold",
      "icon": "assetPath(`static/icons/flow/trigger/icon_call_unsold.png`)",
      "desc": "Listening to ppc contact unsold",
      "trigger_type": "11"
    },
    "12": {
      "title": "Contact Score Incresed",
      "icon": "assetPath(`static/icons/flow/trigger/icon_contact_score_increase.png`)",
      "desc": "Listening to contact score increased",
      "trigger_type": "12"
    },
    "13": {
      "title": "Contact Score Decresed",
      "icon": "assetPath(`static/icons/flow/trigger/icon_contact_score_decrease.png`)",
      "desc": "Listening to contact score decreased",
      "trigger_type": "13"
    },
    "14": {
      "title": "Contact Score Set",
      "icon": "assetPath(`static/icons/flow/trigger/icon_contact_score_set.png`)",
      "desc": "Listening to contact score set",
      "trigger_type": "14"
    },
    "15": {
      "title": "Contact Score Updated",
      "icon": "assetPath(`static/icons/flow/trigger/icon_contact_score_update.png`)",
      "desc": "Listening to contact score updated",
      "trigger_type": "15"
    },
    "16": {
      "title": "Opportunity Created",
      "icon": "assetPath(`static/icons/flow/trigger/icon_oppotunity_created.png`)",
      "desc": "Listening to opportunity created",
      "trigger_type": "16"
    },
    "17": {
      "title": "Opportunity Deleted",
      "icon": "assetPath(`static/icons/flow/trigger/icon_oppotunity_deleted.png`)",
      "desc": "Listening to opportunity deleted",
      "trigger_type": "17"
    },
    "18": {
      "title": "Opportunity Won",
      "icon": "assetPath(`static/icons/flow/trigger/icon_oppotunity_won.png`)",
      "desc": "Listening to opportunity won",
      "trigger_type": "18"
    },
    "19": {
      "title": "Opportunity Lost",
      "icon": "assetPath(`static/icons/flow/trigger/icon_oppotunity_lost.png`)",
      "desc": "Listening to opportunity lost",
      "trigger_type": "19"
    },
    "20": {
      "title": "Opportunity Status Changed",
      "icon": "assetPath(`static/icons/flow/trigger/icon_oppotunity_status_changed.png` )",
      "desc": "Listening to opportunity status chagned",
      "trigger_type": "20"
    },
    "21": {
      "title": "Task Created",
      "icon": "assetPath(`static/icons/flow/trigger/icon_task_created.png`)",
      "desc": "Listening to task created",
      "trigger_type": "21"
    },
    "22": {
      "title": "Task Deleted",
      "icon": "assetPath(`static/icons/flow/trigger/icon_task_deleted.png`)",
      "desc": "Listening to task deleted",
      "trigger_type": "22"
    },
    "23": {
      "title": "Task Changed",
      "icon": "assetPath(`static/icons/flow/trigger/icon_task_changed.png`)",
      "desc": "Listening to task changed",
      "trigger_type": "23"
    },
    "24": {
      "title": "Task Completed",
      "icon": "assetPath(`static/icons/flow/trigger/icon_task_completed.png`)",
      "desc": "Listening to task completed",
      "trigger_type": "24"
    },
    "26": {
      "title": "Transaction Billing Success",
      "icon": "assetPath(`static/icons/flow/trigger/icon_transaction_billing_success.png`)",
      "desc": "Listening to Transaction Billing Success",
      "trigger_type": "26"
    },
    "27": {
      "title": "Recurring Billing Success",
      "icon": "assetPath(`static/icons/flow/trigger/icon_recurring_billing_success.png`)",
      "desc": "Listening to Recurring Billing Success",
      "trigger_type": "27"
    },
    "28": {
      "title": "Recurring Billing Failed",
      "icon": "assetPath(`static/icons/flow/trigger/icon_recurring_billing_failed.png`)",
      "desc": "Listening to Recurring Billing Failed",
      "trigger_type": "28"
    },
    "29": {
      "title": "Transaction Refunded",
      "icon": "assetPath(`static/icons/flow/trigger/icon_transaction_refunded.png`)",
      "desc": "Listening to Transaction Refunded",
      "trigger_type": "29"
    },
    "30": {
      "title": "Transaction Charged-back",
      "icon": "assetPath(`static/icons/flow/trigger/icon_transaction_charged_back.png`)",
      "desc": "Listening to Transaction Charged-back",
      "trigger_type": "30"
    },
    "31": {
      "title": "Order Fulfilled",
      "icon": "assetPath(`static/icons/flow/trigger/icon_order_fulfilled.png`)",
      "desc": "Listening to order fulfilled",
      "trigger_type": "31"
    },
    "32": {
      "title": "Order Paid",
      "icon": "assetPath(`static/icons/flow/trigger/icon_order_paid.png`)",
      "desc": "Listening to order paid",
      "trigger_type": "32"
    },
    "36": {
      "title": "New Incoming Chat Conversation",
      "icon": "assetPath(`static/icons/flow/trigger/icon_conversations.png`)",
      "desc": "Listening new conversation created from incoming message",
      "trigger_type": "36"
    },
    "37": {
      "title": "New Contact From Chat",
      "icon": "assetPath(`static/icons/flow/trigger/icon_conversations.png`)",
      "desc": "Listening to new contact from chat conversation",
      "trigger_type": "37"
    },
    "38": {
      "title": "Transaction Billing Failed",
      "icon": "assetPath(`static/icons/flow/trigger/icon_recurring_billing_failed.png`)",
      "desc": "Listening to Transaction Billing Success",
      "trigger_type": "38"
    },
    "39": {
      "title": "Call Started",
      "icon": "assetPath(`static/icons/flow/trigger/icon_call_started.png`)",
      "desc": "Listening to start PPC call",
      "trigger_type": "39"
    },
    "40": {
      "title": "Form Submission",
      "icon": "assetPath(`static/icons/flow/trigger/icon_form_submission.png`)",
      "desc": "Form Submission",
      "trigger_type": "40"
    },
    "41": {
      "title": "Form Submission New Lead",
      "icon": "assetPath(`static/icons/flow/trigger/icon_form_submission_new_lead.png`)",
      "desc": "Form Submission and new contact created",
      "trigger_type": "41"
    },
    "42": {
      "title": "Meeting Scheduled",
      "icon": "assetPath(`static/icons/flow/trigger/icon_form_submission_new_lead.png`)",
      "desc": "Customer schedule meeting",
      "trigger_type": "42"
    },
    "43": {
      "title": "New Outgoing Chat Conversation",
      "icon": "assetPath(`static/icons/flow/trigger/icon_conversations.png`)",
      "desc": "Listening new conversation created from outgoing message",
      "trigger_type": "43"
    },
    "44": {
      "title": "New Incoming Chat Message",
      "icon": "assetPath(`static/icons/flow/trigger/icon_conversations.png`)",
      "desc": "Listening new  incoming message",
      "trigger_type": "44"
    }
  }
}

export const contactScoreOptions = [
  {
    "value": "quality",
    "label": "Quality Score"
  },
  {
    "value": "engagement",
    "label": "Engagement Score"
  },
  {
    "value": "all",
    "label": "Any Score"
  }
]


export const subscriberTypeOptions = [
  {
    "label": "All",
    "value": "all"
  },
  {
    "label": "Assignee",
    "value": "assignee"
  },
  {
    "label": "Related Contact",
    "value": "contact"
  }
]