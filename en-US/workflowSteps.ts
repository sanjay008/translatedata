import { assetPath } from "@/utils/utility";

export default {
  "start": {
    "icon": "assetPath(`static/assets/draw/start.svg`)",
    "title": "Start"
  },
  "delete": {
    "icon": "assetPath(`static/assets/draw/close.svg`)"
  },
  "redirect": {
    "icon": "assetPath(`static/assets/draw/redirect.svg`)",
    "category": "logic",
    "title": "Redirect Visitor To URL"
  },
  "wait": {
    "icon": "assetPath(`static/assets/draw/wait.svg`)",
    "category": "logic",
    "title": "Wait For Required Field"
  },
  "output": {
    "icon": "assetPath(`static/assets/draw/output.svg`)",
    "category": "logic",
    "title": "API Output"
  },
  "append_data": {
    "icon": "assetPath(`static/assets/draw/append_data.svg`)",
    "category": "data_services",
    "title": "Append Data To Contact"
  },
  "send_email": {
    "icon": "assetPath(`static/assets/draw/email.svg`)",
    "category": "messaging",
    "title": "Send Email"
  },
  "send_sms": {
    "icon": "assetPath(`static/assets/draw/sms.svg`)",
    "category": "messaging",
    "title": "Send SMS"
  },
  "day_counter": {
    "icon": "assetPath(`static/assets/draw/hourglass.svg`)",
    "category": "logic",
    "title": "Wait For Amount of Time"
  },
  "condition": {
    "icon": "assetPath(`static/assets/draw/question.svg`)",
    "category": "logic",
    "title": "Condition"
  },
  "condition_data_set": {
    "icon": "assetPath(`static/assets/draw/question.svg`)",
    "category": "logic",
    "title": "Data Set For Condition Step"
  },
  "step_condition": {
    "icon": "assetPath(`static/assets/draw/step_question.svg`)",
    "category": "logic",
    "title": "Wait For Email/SMS Click/Open"
  },
  "case_condition": {
    "icon": "assetPath(`static/assets/draw/case_question.svg`)",
    "category": "logic",
    "title": "Random Route / Split Test"
  },
  "lead_post": {
    "icon": "assetPath(`static/assets/draw/lead_post.svg`)",
    "category": "data_services",
    "title": "Custom API"
  },
  "add_to_campaign": {
    "icon": "assetPath(`static/assets/draw/add_to_campaign.svg`)",
    "category": "logic",
    "title": "Add To Flow"
  },
  "deactivate_campaign": {
    "icon": "assetPath(`static/assets/draw/deactivate_campaign.svg`)",
    "category": "logic",
    "title": "Deactivate Contact From Flow"
  },
  "carrier": {
    "icon": "assetPath(`static/assets/draw/carrier.svg`)",
    "category": "data_services",
    "title": "Lookup Cell Phone Carrier"
  },
  "pause": {
    "icon": "assetPath(`static/assets/draw/pause.svg`)",
    "category": "logic",
    "title": "Rate Limit"
  },
  "tag": {
    "icon": "assetPath(`static/assets/draw/tag.svg`)",
    "category": "data_services",
    "title": "Add / Remove Tag"
  },
  "validation": {
    "icon": "assetPath(`static/assets/draw/validation.svg`)",
    "category": "data_services",
    "title": "Validation"
  },
  "custom_code": {
    "icon": "assetPath(`static/assets/draw/custom_code.svg`)",
    "category": "logic",
    "title": "Run Custom Node.JS Code"
  },
  "pixel_fire": {
    "icon": "assetPath(`static/assets/draw/pixel_fire.svg`)",
    "category": "data_services",
    "title": "Pixel fire"
  },
  "ping_tree": {
    "icon": "assetPath(`static/assets/draw/ping_tree.svg`)",
    "category": "application",
    "title": "Ping Tree / PingPost"
  },
  "phone_call": {
    "icon": "assetPath(`static/assets/draw/phone_call.png`)",
    "category": "application",
    "title": "Call Center"
  },
  "ppc_tree": {
    "icon": "assetPath(`static/assets/draw/ppc_tree.svg`)",
    "category": "application",
    "title": "Pay Per Call"
  },
  "create_user": {
    "icon": "assetPath(`static/assets/draw/create_user.svg`)",
    "category": "CRM",
    "title": "Create CRM/Membership User"
  },
  "subscription": {
    "icon": "assetPath(`static/assets/draw/subscription.svg`)",
    "category": "CRM",
    "title": "Order Product/Subscription"
  },
  "goto": {
    "icon": "assetPath(`static/assets/draw/goto.svg`)",
    "category": "logic",
    "title": "GoTo Another Step"
  },
  "wait_reply": {
    "icon": "assetPath(`static/assets/draw/wait_reply.svg`)",
    "category": "logic",
    "title": "Wait For SMS Reply"
  },
  "billing": {
    "icon": "assetPath(`static/assets/draw/billing.svg`)",
    "category": "CRM",
    "title": "Validate/Charge Credit Card"
  },
  "ps_conference": {
    "icon": "assetPath(`static/assets/draw/ps_conference.svg`)",
    "category": "phone",
    "title": "Transfer to Conference Room"
  },
  "ps_call_transfer": {
    "icon": "assetPath(`static/assets/draw/ps_call_transfer.svg`)",
    "category": "phone",
    "title": "Transfer Call",
    "extra": {
      "noAnswer": "No Answer"
    }
  },
  "ps_record_msg": {
    "icon": "assetPath(`static/assets/draw/ps_record_msg.svg`)",
    "category": "phone",
    "title": "Capture Message/Voicemail"
  },
  "ps_rating": {
    "icon": "assetPath(`static/assets/draw/ps_rating.svg`)",
    "category": "phone",
    "title": "Rate Your Experience"
  },
  "ps_play_message": {
    "icon": "assetPath(`static/assets/draw/ps_play_message.svg`)",
    "category": "phone",
    "title": "Play Recording"
  },
  "ps_capture_digit": {
    "icon": "assetPath(`static/assets/draw/ps_capture_digit.svg`)",
    "category": "phone",
    "title": "Capture Digits"
  },
  "ps_company_directory": {
    "icon": "assetPath(`static/assets/draw/ps_company_directory.svg`)",
    "category": "phone",
    "title": "Company Directory"
  },
  "ps_multi_choice": {
    "icon": "assetPath(`static/assets/draw/ps_multi_choice.svg`)",
    "category": "phone",
    "title": "IVR - Multiple Choice"
  },
  "ps_hangup": {
    "icon": "assetPath(`static/assets/draw/ps_hangup.svg`)",
    "category": "phone",
    "title": "Hangup Call"
  },
  "ps_dnc": {
    "icon": "assetPath(`static/assets/draw/ps_dnc.svg`)",
    "category": "phone",
    "title": "Add To Do Not Call List"
  },
  "copy_workflow": {
    "icon": "assetPath(`static/assets/draw/copy_workflow.svg`)",
    "category": "data_services",
    "title": "Copy Flow As Example"
  },
  "copy_input": {
    "icon": "assetPath(`static/assets/draw/copy_input.svg`)",
    "category": "data_services",
    "title": "Copy Input As Example"
  },
  "contact_example": {
    "icon": "assetPath(`static/assets/draw/contact_example.svg`)",
    "category": "CRM",
    "title": "Add example contact"
  },
  "contact_lookup": {
    "icon": "assetPath(`static/assets/draw/contact_lookup.svg`)",
    "category": "CRM",
    "title": "Lookup contact"
  },
  "score_contact": {
    "icon": "assetPath(`static/assets/draw/score_contact.svg`)",
    "category": "CRM",
    "title": "Score contact"
  },
  "create_task": {
    "icon": "assetPath(`static/assets/draw/opportunity.svg`)",
    "category": "CRM",
    "title": "Create Pipeline Item"
  },
  "wait_task": {
    "icon": "assetPath(`static/assets/draw/wait_task.svg`)",
    "category": "CRM",
    "title": "Wait For Task/Opportunity"
  },
  "time_condition": {
    "icon": "assetPath(`static/assets/draw/time_condition.svg`)",
    "category": "logic",
    "title": "Time Condition"
  },
  "contact_owner": {
    "icon": "assetPath(`static/assets/draw/contact_owner.svg`)",
    "category": "CRM",
    "title": "Contact Owner"
  },
  "facebook_conversion": {
    "icon": "assetPath(`static/assets/draw/facebook_conversion.svg`)",
    "category": "data_services",
    "title": "Facebook Conversion"
  },
  "execute_blueprint": {
    "icon": "assetPath(`static/assets/draw/copy_workflow.svg`)",
    "category": "data_services",
    "title": "Execute Blueprint"
  },
  "optin_status": {
    "icon": "assetPath(`static/assets/draw/sms.svg`)",
    "category": "messaging",
    "title": "Set Opt-In Status"
  }
}
