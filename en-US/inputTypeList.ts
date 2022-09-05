import { assetPath } from "@/utils/utility";
import {
  INPUTS_TYPE_CONTACT_API,
  INPUTS_TYPE_CALL_FLOW,
  INPUTS_TYPE_FORM_CONTACT,
  INPUTS_TYPE_API_ONLINE_FUNNEL,
} from "@/@types/input";

export default [
  {
    "title": "Contacts",
    "desc": "Upload Files to Create Contacts",
    "icon": "assetPath(`static/assets/inputs/contact_flow.svg`)",
    "input_type": "INPUTS_TYPE_CONTACT_API"
  },
  {
    "title": "API",
    "desc": "Incoming API Post to Create Contacts",
    "icon": "/assets/admin_crm/assets/images/website_api.svg",
    "input_type": "INPUTS_TYPE_API_ONLINE_FUNNEL"
  },
  {
    "title": "Call Flow",
    "desc": "Incoming Calls to Create Contacts",
    "icon": "assetPath(`static/assets/inputs/call_flow.svg`)",
    "input_type": "INPUTS_TYPE_CALL_FLOW"
  },
  {
    "title": "Form",
    "desc": "Form Submissions to Create Contacts",
    "icon": "assetPath(`static/assets/inputs/form_flow.svg`)",
    "input_type": "INPUTS_TYPE_FORM_CONTACT"
  }
]
