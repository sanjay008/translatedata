export default {
  "address_format": [
    "first_name|last_name:email:dob:company:street:unit:city:country|zip:phone",
    "first_name|last_name:email:dob:company:street:unit:zip|city:country:phone",
    "first_name|last_name:email:dob:company:street:unit:city:country:phone",
    "first_name|last_name:email:dob:company:street:unit:zip|city:state|country:phone",
    "first_name|last_name:email:dob:company:street:unit:city:country|state|zip:phone",
    "first_name|last_name:email:dob:company:street:unit:zip|city:state:country:phone",
    "first_name|last_name:email:dob:company:street:unit:zip|city|country:phone",
    "first_name|last_name:email:dob:company:street:unit:city:country|state:phone",
    "first_name|last_name:email:dob:company:street:unit:city:state|zip:country:phone",
    "first_name|last_name:email:dob:company:street:unit:zip|city|state:country:phone",
    "last_name|first_name:email:dob:company:country|zip:state:city:street:unit:phone",
    "zip|city:unit:street:company:first_name|last_name:email:dob:country:phone",
    "first_name|last_name:email:dob:company:street:unit:zip:city:country:phone",
    "company:last_name|first_name:email:dob:zip:country:state|city:street:unit:phone",
    "zip|city:country:first_name|last_name:email:dob:company:street:unit:phone",
    "first_name|last_name:email:dob:company:street:unit:city:state:country|zip:phone",
    "street:unit:city, |state|zip,:country"
  ],
  "labels": {
    "company": "Company (optional)",
    "first_name": "First name",
    "last_name": "Last name",
    "street": "Address",
    "unit": "Apartment, suite, etc. (optional)",
    "city": "City",
    "state": "Region",
    "country": "Country/Region",
    "zip": "Postal code",
    "phone": "Phone",
    "email": "Email",
    "dob": "DOB"
  },
  "country": {
    "AF": {
      "country": "Afghanistan",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "AF",
      "zip_format": "\\d{4}"
    },
    "AX": {
      "country": "Aland Islands",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "AX",
      "zip_format": "22\\d{3}"
    },
    "AL": {
      "country": "Albania",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "AL",
      "zip_format": "\\d{4}"
    },
    "DZ": {
      "labels": {
        "state": "Province"
      },
      "country": "Algeria",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "DZ",
      "zip_format": "\\d{5}"
    },
    "AD": {
      "country": "Andorra",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "AD",
      "zip_format": "AD[1-7]0\\d"
    },
    "AO": {
      "country": "Angola",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "AO",
      "zip_format": ""
    },
    "AI": {
      "country": "Anguilla",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "AI",
      "zip_format": "(?:AI-)?2640"
    },
    "AG": {
      "country": "Antigua And Barbuda",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "AG",
      "zip_format": ""
    },
    "AR": {
      "labels": {
        "state": "Province"
      },
      "states": {
        "Ciudad Autónoma de Buenos Aires": {
          "label": "Buenos Aires (Autonomous City)",
          "code": "C"
        },
        "Buenos Aires": {
          "label": "Buenos Aires Province",
          "code": "B"
        },
        "Catamarca": {
          "code": "K"
        },
        "Chaco": {
          "code": "H"
        },
        "Chubut": {
          "code": "U"
        },
        "Córdoba": {
          "code": "X"
        },
        "Corrientes": {
          "code": "W"
        },
        "Entre Ríos": {
          "code": "E"
        },
        "Formosa": {
          "code": "P"
        },
        "Jujuy": {
          "code": "Y"
        },
        "La Pampa": {
          "code": "L"
        },
        "La Rioja": {
          "code": "F"
        },
        "Mendoza": {
          "code": "M"
        },
        "Misiones": {
          "code": "N"
        },
        "Neuquén": {
          "code": "Q"
        },
        "Río Negro": {
          "code": "R"
        },
        "Salta": {
          "code": "A"
        },
        "San Juan": {
          "code": "J"
        },
        "San Luis": {
          "code": "D"
        },
        "Santa Cruz": {
          "code": "Z"
        },
        "Santa Fe": {
          "code": "S"
        },
        "Santiago Del Estero": {
          "label": "Santiago del Estero",
          "code": "G"
        },
        "Tierra Del Fuego": {
          "label": "Tierra del Fuego",
          "code": "V"
        },
        "Tucumán": {
          "code": "T"
        }
      },
      "country": "Argentina",
      "addr_format": 3,
      "addr_display_format": 3,
      "country_code": "AR",
      "zip_format": "((?:[A-HJ-NP-Z])?\\d{4})([A-Z]{3})?"
    },
    "AM": {
      "country": "Armenia",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "AM",
      "zip_format": "(?:37)?\\d{4}"
    },
    "AW": {
      "country": "Aruba",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "AW",
      "zip_format": ""
    },
    "AC": {
      "country": "Ascension Island",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "AC",
      "zip_format": "ASCN 1ZZ"
    },
    "AU": {
      "labels": {
        "city": "Suburb",
        "state": "State/territory",
        "zip": "Postcode"
      },
      "states": {
        "Australian Capital Territory": {
          "code": "ACT"
        },
        "New South Wales": {
          "code": "NSW"
        },
        "Northern Territory": {
          "code": "NT"
        },
        "Queensland": {
          "code": "QLD"
        },
        "South Australia": {
          "code": "SA"
        },
        "Tasmania": {
          "code": "TAS"
        },
        "Victoria": {
          "code": "VIC"
        },
        "Western Australia": {
          "code": "WA"
        }
      },
      "country": "Australia",
      "addr_format": 4,
      "addr_display_format": 4,
      "country_code": "AU",
      "zip_format": "\\d{4}"
    },
    "AT": {
      "labels": {
        "street": "Street and house number",
        "unit": "Additional address (optional)"
      },
      "country": "Austria",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "AT",
      "zip_format": "\\d{4}"
    },
    "AZ": {
      "country": "Azerbaijan",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "AZ",
      "zip_format": "\\d{4}"
    },
    "BS": {
      "country": "Bahamas",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "BS",
      "zip_format": ""
    },
    "BH": {
      "country": "Bahrain",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "BH",
      "zip_format": "(?:\\d|1[0-2])\\d{2}"
    },
    "BD": {
      "country": "Bangladesh",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "BD",
      "zip_format": "\\d{4}"
    },
    "BB": {
      "country": "Barbados",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "BB",
      "zip_format": "BB\\d{5}"
    },
    "BY": {
      "country": "Belarus",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "BY",
      "zip_format": "\\d{6}"
    },
    "BE": {
      "country": "Belgium",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "BE",
      "zip_format": "\\d{4}"
    },
    "BZ": {
      "country": "Belize",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "BZ",
      "zip_format": ""
    },
    "BJ": {
      "country": "Benin",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "BJ",
      "zip_format": ""
    },
    "BM": {
      "country": "Bermuda",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "BM",
      "zip_format": "[A-Z]{2} ?[A-Z0-9]{2}"
    },
    "BT": {
      "country": "Bhutan",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "BT",
      "zip_format": "\\d{5}"
    },
    "BO": {
      "country": "Bolivia",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "BO",
      "zip_format": ""
    },
    "BA": {
      "country": "Bosnia And Herzegovina",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "BA",
      "zip_format": "\\d{5}"
    },
    "BW": {
      "country": "Botswana",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "BW",
      "zip_format": ""
    },
    "BV": {
      "country": "Bouvet Island",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "BV",
      "zip_format": ""
    },
    "BR": {
      "labels": {
        "street": "Street and house number",
        "state": "State"
      },
      "states": {
        "Acre": {
          "code": "AC"
        },
        "Alagoas": {
          "code": "AL"
        },
        "Amapá": {
          "code": "AP"
        },
        "Amazonas": {
          "code": "AM"
        },
        "Bahia": {
          "code": "BA"
        },
        "Ceará": {
          "code": "CE"
        },
        "Espírito Santo": {
          "code": "ES"
        },
        "Distrito Federal": {
          "label": "Federal District",
          "code": "DF"
        },
        "Goiás": {
          "code": "GO"
        },
        "Maranhão": {
          "code": "MA"
        },
        "Mato Grosso": {
          "code": "MT"
        },
        "Mato Grosso do Sul": {
          "code": "MS"
        },
        "Minas Gerais": {
          "code": "MG"
        },
        "Pará": {
          "code": "PA"
        },
        "Paraíba": {
          "code": "PB"
        },
        "Paraná": {
          "code": "PR"
        },
        "Pernambuco": {
          "code": "PE"
        },
        "Piauí": {
          "code": "PI"
        },
        "Rio Grande do Norte": {
          "code": "RN"
        },
        "Rio Grande do Sul": {
          "code": "RS"
        },
        "Rio de Janeiro": {
          "code": "RJ"
        },
        "Rondônia": {
          "code": "RO"
        },
        "Roraima": {
          "code": "RR"
        },
        "Santa Catarina": {
          "code": "SC"
        },
        "São Paulo": {
          "code": "SP"
        },
        "Sergipe": {
          "code": "SE"
        },
        "Tocantins": {
          "code": "TO"
        }
      },
      "country": "Brazil",
      "addr_format": 4,
      "addr_display_format": 4,
      "country_code": "BR",
      "zip_format": "\\d{5}-?\\d{3}"
    },
    "IO": {
      "country": "British Indian Ocean Territory",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "IO",
      "zip_format": "BBND 1ZZ"
    },
    "BN": {
      "country": "Brunei",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "BN",
      "zip_format": "[A-Z]{2} ?\\d{4}"
    },
    "BG": {
      "country": "Bulgaria",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "BG",
      "zip_format": "\\d{4}"
    },
    "BF": {
      "country": "Burkina Faso",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "BF",
      "zip_format": ""
    },
    "BI": {
      "country": "Burundi",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "BI",
      "zip_format": ""
    },
    "KH": {
      "country": "Cambodia",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "KH",
      "zip_format": "\\d{5,6}"
    },
    "CA": {
      "labels": {
        "state": "Province"
      },
      "states": {
        "Alberta": {
          "code": "AB"
        },
        "British Columbia": {
          "code": "BC"
        },
        "Manitoba": {
          "code": "MB"
        },
        "New Brunswick": {
          "code": "NB"
        },
        "Newfoundland and Labrador": {
          "code": "NL"
        },
        "Northwest Territories": {
          "code": "NT"
        },
        "Nova Scotia": {
          "code": "NS"
        },
        "Nunavut": {
          "code": "NU"
        },
        "Ontario": {
          "code": "ON"
        },
        "Prince Edward Island": {
          "code": "PE"
        },
        "Quebec": {
          "code": "QC"
        },
        "Saskatchewan": {
          "code": "SK"
        },
        "Yukon": {
          "code": "YT"
        }
      },
      "country": "Canada",
      "addr_format": 4,
      "addr_display_format": 4,
      "country_code": "CA",
      "zip_format": "[ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJ-NPRSTV-Z] ?\\d[ABCEGHJ-NPRSTV-Z]\\d"
    },
    "CV": {
      "country": "Cape Verde",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "CV",
      "zip_format": "\\d{4}"
    },
    "BQ": {
      "country": "Caribbean Netherlands",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "BQ",
      "zip_format": ""
    },
    "KY": {
      "country": "Cayman Islands",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "KY",
      "zip_format": "KY\\d-\\d{4}"
    },
    "CF": {
      "country": "Central African Republic",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "CF",
      "zip_format": ""
    },
    "TD": {
      "country": "Chad",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "TD",
      "zip_format": ""
    },
    "CL": {
      "states": {
        "Arica and Parinacota": {
          "label": "Arica y Parinacota",
          "code": "AP"
        },
        "Tarapacá": {
          "code": "TA"
        },
        "Antofagasta": {
          "code": "AN"
        },
        "Atacama": {
          "code": "AT"
        },
        "Coquimbo": {
          "code": "CO"
        },
        "Valparaíso": {
          "code": "VS"
        },
        "Santiago": {
          "label": "Santiago Metropolitan",
          "code": "RM"
        },
        "O'Higgins": {
          "label": "Libertador General Bernardo O’Higgins",
          "code": "LI"
        },
        "Maule": {
          "code": "ML"
        },
        "Ñuble": {
          "code": "NB"
        },
        "Biobío": {
          "label": "Bío Bío",
          "code": "BI"
        },
        "Araucanía": {
          "code": "AR"
        },
        "Los Ríos": {
          "code": "LR"
        },
        "Los Lagos": {
          "code": "LL"
        },
        "Aysén": {
          "code": "AI"
        },
        "Magallanes": {
          "label": "Magallanes Region",
          "code": "MA"
        }
      },
      "country": "Chile",
      "addr_format": 5,
      "addr_display_format": 5,
      "country_code": "CL",
      "zip_format": "\\d{7}"
    },
    "CN": {
      "labels": {
        "street": "Full address",
        "state": "Province"
      },
      "states": {
        "Anhui": {
          "code": "AH"
        },
        "Beijing": {
          "code": "BJ"
        },
        "Chongqing": {
          "code": "CQ"
        },
        "Fujian": {
          "code": "FJ"
        },
        "Gansu": {
          "code": "GS"
        },
        "Guangdong": {
          "code": "GD"
        },
        "Guangxi": {
          "code": "GX"
        },
        "Guizhou": {
          "code": "GZ"
        },
        "Hainan": {
          "code": "HI"
        },
        "Hebei": {
          "code": "HE"
        },
        "Heilongjiang": {
          "code": "HL"
        },
        "Henan": {
          "code": "HA"
        },
        "Hubei": {
          "code": "HB"
        },
        "Hunan": {
          "code": "HN"
        },
        "Inner Mongolia": {
          "code": "NM"
        },
        "Jiangsu": {
          "code": "JS"
        },
        "Jiangxi": {
          "code": "JX"
        },
        "Jilin": {
          "code": "JL"
        },
        "Liaoning": {
          "code": "LN"
        },
        "Ningxia": {
          "code": "NX"
        },
        "Qinghai": {
          "code": "QH"
        },
        "Shaanxi": {
          "code": "SN"
        },
        "Shandong": {
          "code": "SD"
        },
        "Shanghai": {
          "code": "SH"
        },
        "Shanxi": {
          "code": "SX"
        },
        "Sichuan": {
          "code": "SC"
        },
        "Tianjin": {
          "code": "TJ"
        },
        "Xizang": {
          "label": "Tibet",
          "code": "YZ"
        },
        "Xinjiang": {
          "code": "XJ"
        },
        "Yunnan": {
          "code": "YN"
        },
        "Zhejiang": {
          "code": "ZJ"
        }
      },
      "country": "China",
      "addr_format": 4,
      "addr_display_format": 4,
      "country_code": "CN",
      "zip_format": "\\d{6}"
    },
    "CX": {
      "country": "Christmas Island",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "CX",
      "zip_format": "6798"
    },
    "CC": {
      "country": "Cocos (Keeling) Islands",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "CC",
      "zip_format": "6799"
    },
    "CO": {
      "labels": {
        "state": "Province"
      },
      "states": {
        "Bogotá, D.C.": {
          "label": "Capital District",
          "code": "DC"
        },
        "Amazonas": {
          "code": "AMA"
        },
        "Antioquia": {
          "code": "ANT"
        },
        "Arauca": {
          "code": "ARA"
        },
        "Atlántico": {
          "code": "ATL"
        },
        "Bolívar": {
          "code": "BOL"
        },
        "Boyacá": {
          "code": "BOY"
        },
        "Caldas": {
          "code": "CAL"
        },
        "Caquetá": {
          "code": "CAQ"
        },
        "Casanare": {
          "code": "CAS"
        },
        "Cauca": {
          "code": "CAU"
        },
        "Cesar": {
          "code": "CES"
        },
        "Chocó": {
          "code": "CHO"
        },
        "Córdoba": {
          "code": "COR"
        },
        "Cundinamarca": {
          "code": "CUN"
        },
        "Guainía": {
          "code": "GUA"
        },
        "Guaviare": {
          "code": "GUV"
        },
        "Huila": {
          "code": "HUI"
        },
        "La Guajira": {
          "code": "LAG"
        },
        "Magdalena": {
          "code": "MAG"
        },
        "Meta": {
          "code": "MET"
        },
        "Nariño": {
          "code": "NAR"
        },
        "Norte de Santander": {
          "code": "NSA"
        },
        "Putumayo": {
          "code": "PUT"
        },
        "Quindío": {
          "code": "QUI"
        },
        "Risaralda": {
          "code": "RIS"
        },
        "San Andrés, Providencia y Santa Catalina": {
          "label": "San Andrés & Providencia",
          "code": "SAP"
        },
        "Santander": {
          "code": "SAN"
        },
        "Sucre": {
          "code": "SUC"
        },
        "Tolima": {
          "code": "TOL"
        },
        "Valle del Cauca": {
          "code": "VAC"
        },
        "Vaupés": {
          "code": "VAU"
        },
        "Vichada": {
          "code": "VID"
        }
      },
      "country": "Colombia",
      "addr_format": 4,
      "addr_display_format": 4,
      "country_code": "CO",
      "zip_format": "\\d{6}"
    },
    "KM": {
      "country": "Comoros",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "KM",
      "zip_format": ""
    },
    "CG": {
      "country": "Congo",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "CG",
      "zip_format": ""
    },
    "CD": {
      "country": "Congo, The Democratic Republic Of The",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "CD",
      "zip_format": ""
    },
    "CK": {
      "country": "Cook Islands",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "CK",
      "zip_format": ""
    },
    "CR": {
      "country": "Costa Rica",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "CR",
      "zip_format": "\\d{4,5}|\\d{3}-\\d{4}"
    },
    "HR": {
      "country": "Croatia",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "HR",
      "zip_format": "\\d{5}"
    },
    "CU": {
      "country": "Cuba",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "CU",
      "zip_format": "\\d{5}"
    },
    "CW": {
      "country": "Curaçao",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "CW",
      "zip_format": ""
    },
    "CY": {
      "country": "Cyprus",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "CY",
      "zip_format": "\\d{4}"
    },
    "CZ": {
      "country": "Czech Republic",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "CZ",
      "zip_format": "\\d{3} ?\\d{2}"
    },
    "CI": {
      "country": "Côte d'Ivoire",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "CI",
      "zip_format": ""
    },
    "DK": {
      "labels": {
        "street": "Street and house number"
      },
      "country": "Denmark",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "DK",
      "zip_format": "\\d{4}"
    },
    "DJ": {
      "country": "Djibouti",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "DJ",
      "zip_format": ""
    },
    "DM": {
      "country": "Dominica",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "DM",
      "zip_format": ""
    },
    "DO": {
      "country": "Dominican Republic",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "DO",
      "zip_format": "\\d{5}"
    },
    "EC": {
      "country": "Ecuador",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "EC",
      "zip_format": "\\d{6}"
    },
    "EG": {
      "labels": {
        "state": "Governorate"
      },
      "states": {
        "6th of October": {
          "code": "SU"
        },
        "Al Sharqia": {
          "code": "SHR"
        },
        "Alexandria": {
          "code": "ALX"
        },
        "Aswan": {
          "code": "ASN"
        },
        "Asyut": {
          "code": "AST"
        },
        "Beheira": {
          "code": "BH"
        },
        "Beni Suef": {
          "code": "BNS"
        },
        "Cairo": {
          "code": "C"
        },
        "Dakahlia": {
          "code": "DK"
        },
        "Damietta": {
          "code": "DT"
        },
        "Faiyum": {
          "code": "FYM"
        },
        "Gharbia": {
          "code": "GH"
        },
        "Giza": {
          "code": "GZ"
        },
        "Helwan": {
          "code": "HU"
        },
        "Ismailia": {
          "code": "IS"
        },
        "Kafr el-Sheikh": {
          "code": "KFS"
        },
        "Luxor": {
          "code": "LX"
        },
        "Matrouh": {
          "code": "MT"
        },
        "Minya": {
          "code": "MN"
        },
        "Monufia": {
          "code": "MNF"
        },
        "New Valley": {
          "code": "WAD"
        },
        "North Sinai": {
          "code": "SIN"
        },
        "Port Said": {
          "code": "PTS"
        },
        "Qalyubia": {
          "code": "KB"
        },
        "Qena": {
          "code": "KN"
        },
        "Red Sea": {
          "code": "BA"
        },
        "Sohag": {
          "code": "SHG"
        },
        "South Sinai": {
          "code": "JS"
        },
        "Suez": {
          "code": "SUZ"
        }
      },
      "country": "Egypt",
      "addr_format": 4,
      "addr_display_format": 4,
      "country_code": "EG",
      "zip_format": "\\d{5}"
    },
    "SV": {
      "country": "El Salvador",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "SV",
      "zip_format": "CP [1-3][1-7][0-2]\\d"
    },
    "GQ": {
      "country": "Equatorial Guinea",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "GQ",
      "zip_format": ""
    },
    "ER": {
      "country": "Eritrea",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "ER",
      "zip_format": ""
    },
    "EE": {
      "country": "Estonia",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "EE",
      "zip_format": "\\d{5}"
    },
    "SZ": {
      "country": "Eswatini",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "SZ",
      "zip_format": "[HLMS]\\d{3}"
    },
    "ET": {
      "country": "Ethiopia",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "ET",
      "zip_format": "\\d{4}"
    },
    "FK": {
      "country": "Falkland Islands (Malvinas)",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "FK",
      "zip_format": "FIQQ 1ZZ"
    },
    "FO": {
      "country": "Faroe Islands",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "FO",
      "zip_format": "\\d{3}"
    },
    "FJ": {
      "country": "Fiji",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "FJ",
      "zip_format": ""
    },
    "FI": {
      "country": "Finland",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "FI",
      "zip_format": "\\d{5}"
    },
    "FR": {
      "country": "France",
      "addr_format": 6,
      "addr_display_format": 6,
      "country_code": "FR",
      "zip_format": "\\d{2} ?\\d{3}"
    },
    "GF": {
      "country": "French Guiana",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "GF",
      "zip_format": "9[78]3\\d{2}"
    },
    "PF": {
      "country": "French Polynesia",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "PF",
      "zip_format": "987\\d{2}"
    },
    "TF": {
      "country": "French Southern Territories",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "TF",
      "zip_format": ""
    },
    "GA": {
      "country": "Gabon",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "GA",
      "zip_format": ""
    },
    "GM": {
      "country": "Gambia",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "GM",
      "zip_format": ""
    },
    "GE": {
      "country": "Georgia",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "GE",
      "zip_format": "\\d{4}"
    },
    "DE": {
      "labels": {
        "street": "Street and house number",
        "unit": "Additional address (optional)"
      },
      "country": "Germany",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "DE",
      "zip_format": "\\d{5}"
    },
    "GH": {
      "country": "Ghana",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "GH",
      "zip_format": ""
    },
    "GI": {
      "country": "Gibraltar",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "GI",
      "zip_format": "GX11 1AA"
    },
    "GR": {
      "country": "Greece",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "GR",
      "zip_format": "\\d{3} ?\\d{2}"
    },
    "GL": {
      "country": "Greenland",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "GL",
      "zip_format": "39\\d{2}"
    },
    "GD": {
      "country": "Grenada",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "GD",
      "zip_format": ""
    },
    "GP": {
      "country": "Guadeloupe",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "GP",
      "zip_format": "9[78][01]\\d{2}"
    },
    "GT": {
      "states": {
        "Alta Verapaz": {
          "code": "AVE"
        },
        "Baja Verapaz": {
          "code": "BVE"
        },
        "Chimaltenango": {
          "code": "CMT"
        },
        "Chiquimula": {
          "code": "CQM"
        },
        "El Progreso": {
          "code": "EPR"
        },
        "Escuintla": {
          "code": "ESC"
        },
        "Guatemala": {
          "code": "GUA"
        },
        "Huehuetenango": {
          "code": "HUE"
        },
        "Izabal": {
          "code": "IZA"
        },
        "Jalapa": {
          "code": "JAL"
        },
        "Jutiapa": {
          "code": "JUT"
        },
        "Petén": {
          "code": "PET"
        },
        "Quetzaltenango": {
          "code": "QUE"
        },
        "Quiché": {
          "code": "QUI"
        },
        "Retalhuleu": {
          "code": "RET"
        },
        "Sacatepéquez": {
          "code": "SAC"
        },
        "San Marcos": {
          "code": "SMA"
        },
        "Santa Rosa": {
          "code": "SRO"
        },
        "Sololá": {
          "code": "SOL"
        },
        "Suchitepéquez": {
          "code": "SUC"
        },
        "Totonicapán": {
          "code": "TOT"
        },
        "Zacapa": {
          "code": "ZAC"
        }
      },
      "country": "Guatemala",
      "addr_format": 4,
      "addr_display_format": 4,
      "country_code": "GT",
      "zip_format": "\\d{5}"
    },
    "GG": {
      "country": "Guernsey",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "GG",
      "zip_format": "GY\\d[\\dA-Z]? ?\\d[ABD-HJLN-UW-Z]{2}"
    },
    "GN": {
      "country": "Guinea",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "GN",
      "zip_format": "\\d{3}"
    },
    "GW": {
      "country": "Guinea Bissau",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "GW",
      "zip_format": "\\d{4}"
    },
    "GY": {
      "country": "Guyana",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "GY",
      "zip_format": ""
    },
    "HT": {
      "country": "Haiti",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "HT",
      "zip_format": "\\d{4}"
    },
    "HM": {
      "country": "Heard Island And Mcdonald Islands",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "HM",
      "zip_format": "\\d{4}"
    },
    "VA": {
      "country": "Holy See (Vatican City State)",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "VA",
      "zip_format": "00120"
    },
    "HN": {
      "country": "Honduras",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "HN",
      "zip_format": "\\d{5}"
    },
    "HU": {
      "country": "Hungary",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "HU",
      "zip_format": "\\d{4}"
    },
    "IS": {
      "country": "Iceland",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "IS",
      "zip_format": "\\d{3}"
    },
    "IN": {
      "labels": {
        "state": "State",
        "zip": "PIN code"
      },
      "states": {
        "Andaman and Nicobar Islands": {
          "code": "AN"
        },
        "Andhra Pradesh": {
          "code": "AP"
        },
        "Arunachal Pradesh": {
          "code": "AR"
        },
        "Assam": {
          "code": "AS"
        },
        "Bihar": {
          "code": "BR"
        },
        "Chandigarh": {
          "code": "CH"
        },
        "Chhattisgarh": {
          "code": "CG"
        },
        "Dadra and Nagar Haveli": {
          "code": "DN"
        },
        "Daman and Diu": {
          "code": "DD"
        },
        "Delhi": {
          "code": "DL"
        },
        "Goa": {
          "code": "GA"
        },
        "Gujarat": {
          "code": "GJ"
        },
        "Haryana": {
          "code": "HR"
        },
        "Himachal Pradesh": {
          "code": "HP"
        },
        "Jammu and Kashmir": {
          "code": "JK"
        },
        "Jharkhand": {
          "code": "JH"
        },
        "Karnataka": {
          "code": "KA"
        },
        "Kerala": {
          "code": "KL"
        },
        "Ladakh": {
          "code": "LA"
        },
        "Lakshadweep": {
          "code": "LD"
        },
        "Madhya Pradesh": {
          "code": "MP"
        },
        "Maharashtra": {
          "code": "MH"
        },
        "Manipur": {
          "code": "MN"
        },
        "Meghalaya": {
          "code": "ML"
        },
        "Mizoram": {
          "code": "MZ"
        },
        "Nagaland": {
          "code": "NL"
        },
        "Odisha": {
          "code": "OR"
        },
        "Puducherry": {
          "code": "PY"
        },
        "Punjab": {
          "code": "PB"
        },
        "Rajasthan": {
          "code": "RJ"
        },
        "Sikkim": {
          "code": "SK"
        },
        "Tamil Nadu": {
          "code": "TN"
        },
        "Telangana": {
          "code": "TS"
        },
        "Tripura": {
          "code": "TR"
        },
        "Uttar Pradesh": {
          "code": "UP"
        },
        "Uttarakhand": {
          "code": "UK"
        },
        "West Bengal": {
          "code": "WB"
        }
      },
      "country": "India",
      "addr_format": 4,
      "addr_display_format": 4,
      "country_code": "IN",
      "zip_format": "\\d{6}"
    },
    "ID": {
      "labels": {
        "state": "Province"
      },
      "states": {
        "Aceh": {
          "code": "AC"
        },
        "Bali": {
          "code": "BA"
        },
        "Bangka Belitung": {
          "label": "Bangka–Belitung Islands",
          "code": "BB"
        },
        "Banten": {
          "code": "BT"
        },
        "Bengkulu": {
          "code": "BE"
        },
        "Jawa Tengah": {
          "label": "Central Java",
          "code": "JT"
        },
        "Kalimantan Tengah": {
          "label": "Central Kalimantan",
          "code": "KT"
        },
        "Sulawesi Tengah": {
          "label": "Central Sulawesi",
          "code": "ST"
        },
        "Jawa Timur": {
          "label": "East Java",
          "code": "JI"
        },
        "Kalimantan Timur": {
          "label": "East Kalimantan",
          "code": "KI"
        },
        "Nusa Tenggara Timur": {
          "label": "East Nusa Tenggara",
          "code": "NT"
        },
        "Gorontalo": {
          "code": "GO"
        },
        "Jakarta": {
          "code": "JK"
        },
        "Jambi": {
          "code": "JA"
        },
        "Lampung": {
          "code": "LA"
        },
        "Maluku": {
          "code": "MA"
        },
        "Kalimantan Utara": {
          "label": "North Kalimantan",
          "code": "KU"
        },
        "Maluku Utara": {
          "label": "North Maluku",
          "code": "MU"
        },
        "Sulawesi Utara": {
          "label": "North Sulawesi",
          "code": "SA"
        },
        "North Sumatra": {
          "code": "SU"
        },
        "Papua": {
          "code": "PA"
        },
        "Riau": {
          "code": "RI"
        },
        "Kepulauan Riau": {
          "label": "Riau Islands",
          "code": "KR"
        },
        "Kalimantan Selatan": {
          "label": "South Kalimantan",
          "code": "KS"
        },
        "Sulawesi Selatan": {
          "label": "South Sulawesi",
          "code": "SN"
        },
        "South Sumatra": {
          "code": "SS"
        },
        "Sulawesi Tenggara": {
          "label": "Southeast Sulawesi",
          "code": "SG"
        },
        "Jawa Barat": {
          "label": "West Java",
          "code": "JB"
        },
        "Kalimantan Barat": {
          "label": "West Kalimantan",
          "code": "KB"
        },
        "Nusa Tenggara Barat": {
          "label": "West Nusa Tenggara",
          "code": "NB"
        },
        "Papua Barat": {
          "label": "West Papua",
          "code": "PB"
        },
        "Sulawesi Barat": {
          "label": "West Sulawesi",
          "code": "SR"
        },
        "West Sumatra": {
          "code": "SB"
        },
        "Yogyakarta": {
          "code": "YO"
        }
      },
      "country": "Indonesia",
      "addr_format": 8,
      "addr_display_format": 8,
      "country_code": "ID",
      "zip_format": "\\d{5}"
    },
    "IR": {
      "country": "Iran, Islamic Republic Of",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "IR",
      "zip_format": "\\d{5}-?\\d{5}"
    },
    "IQ": {
      "country": "Iraq",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "IQ",
      "zip_format": "\\d{5}"
    },
    "IE": {
      "labels": {
        "state": "County"
      },
      "states": {
        "Carlow": {
          "code": "CW"
        },
        "Cavan": {
          "code": "CN"
        },
        "Clare": {
          "code": "CE"
        },
        "Cork": {
          "code": "CO"
        },
        "Donegal": {
          "code": "DL"
        },
        "Dublin": {
          "code": "D"
        },
        "Galway": {
          "code": "G"
        },
        "Kerry": {
          "code": "KY"
        },
        "Kildare": {
          "code": "KE"
        },
        "Kilkenny": {
          "code": "KK"
        },
        "Laois": {
          "code": "LS"
        },
        "Leitrim": {
          "code": "LM"
        },
        "Limerick": {
          "code": "LK"
        },
        "Longford": {
          "code": "LD"
        },
        "Louth": {
          "code": "LH"
        },
        "Mayo": {
          "code": "MO"
        },
        "Meath": {
          "code": "MH"
        },
        "Monaghan": {
          "code": "MN"
        },
        "Offaly": {
          "code": "OY"
        },
        "Roscommon": {
          "code": "RN"
        },
        "Sligo": {
          "code": "SO"
        },
        "Tipperary": {
          "code": "TA"
        },
        "Waterford": {
          "code": "WD"
        },
        "Westmeath": {
          "code": "WH"
        },
        "Wexford": {
          "code": "WX"
        },
        "Wicklow": {
          "code": "WW"
        }
      },
      "country": "Ireland",
      "addr_format": 4,
      "addr_display_format": 4,
      "country_code": "IE",
      "zip_format": "[\\dA-Z]{3} ?[\\dA-Z]{4}"
    },
    "IM": {
      "country": "Isle Of Man",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "IM",
      "zip_format": "IM\\d[\\dA-Z]? ?\\d[ABD-HJLN-UW-Z]{2}"
    },
    "IL": {
      "country": "Israel",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "IL",
      "zip_format": "\\d{5}(?:\\d{2})?"
    },
    "IT": {
      "labels": {
        "street": "Street and house number",
        "state": "Province"
      },
      "states": {
        "Agrigento": {
          "code": "AG"
        },
        "Alessandria": {
          "code": "AL"
        },
        "Ancona": {
          "code": "AN"
        },
        "Aosta": {
          "code": "AO"
        },
        "Arezzo": {
          "code": "AR"
        },
        "Ascoli Piceno": {
          "code": "AP"
        },
        "Asti": {
          "code": "AT"
        },
        "Avellino": {
          "code": "AV"
        },
        "Bari": {
          "code": "BA"
        },
        "Barletta-Andria-Trani": {
          "code": "BT"
        },
        "Belluno": {
          "code": "BL"
        },
        "Benevento": {
          "code": "BN"
        },
        "Bergamo": {
          "code": "BG"
        },
        "Biella": {
          "code": "BI"
        },
        "Bologna": {
          "code": "BO"
        },
        "Brescia": {
          "code": "BS"
        },
        "Brindisi": {
          "code": "BR"
        },
        "Cagliari": {
          "code": "CA"
        },
        "Caltanissetta": {
          "code": "CL"
        },
        "Campobasso": {
          "code": "CB"
        },
        "Carbonia-Iglesias": {
          "code": "CI"
        },
        "Caserta": {
          "code": "CE"
        },
        "Catania": {
          "code": "CT"
        },
        "Catanzaro": {
          "code": "CZ"
        },
        "Chieti": {
          "code": "CH"
        },
        "Como": {
          "code": "CO"
        },
        "Cosenza": {
          "code": "CS"
        },
        "Cremona": {
          "code": "CR"
        },
        "Crotone": {
          "code": "KR"
        },
        "Cuneo": {
          "code": "CN"
        },
        "Enna": {
          "code": "EN"
        },
        "Fermo": {
          "code": "FM"
        },
        "Ferrara": {
          "code": "FE"
        },
        "Firenze": {
          "label": "Florence",
          "code": "FI"
        },
        "Foggia": {
          "code": "FG"
        },
        "Forlì-Cesena": {
          "code": "FC"
        },
        "Frosinone": {
          "code": "FR"
        },
        "Genova": {
          "label": "Genoa",
          "code": "GE"
        },
        "Gorizia": {
          "code": "GO"
        },
        "Grosseto": {
          "code": "GR"
        },
        "Imperia": {
          "code": "IM"
        },
        "Isernia": {
          "code": "IS"
        },
        "La Spezia": {
          "code": "SP"
        },
        "Latina": {
          "code": "LT"
        },
        "Lecce": {
          "code": "LE"
        },
        "Lecco": {
          "code": "LC"
        },
        "Livorno": {
          "code": "LI"
        },
        "Lodi": {
          "code": "LO"
        },
        "Lucca": {
          "code": "LU"
        },
        "L'Aquila": {
          "label": "L’Aquila",
          "code": "AQ"
        },
        "Macerata": {
          "code": "MC"
        },
        "Mantova": {
          "label": "Mantua",
          "code": "MN"
        },
        "Massa-Carrara": {
          "label": "Massa and Carrara",
          "code": "MS"
        },
        "Matera": {
          "code": "MT"
        },
        "Medio Campidano": {
          "code": "VS"
        },
        "Messina": {
          "code": "ME"
        },
        "Milano": {
          "label": "Milan",
          "code": "MI"
        },
        "Modena": {
          "code": "MO"
        },
        "Monza e Brianza": {
          "label": "Monza and Brianza",
          "code": "MB"
        },
        "Napoli": {
          "label": "Naples",
          "code": "NA"
        },
        "Novara": {
          "code": "NO"
        },
        "Nuoro": {
          "code": "NU"
        },
        "Ogliastra": {
          "code": "OG"
        },
        "Olbia-Tempio": {
          "code": "OT"
        },
        "Oristano": {
          "code": "OR"
        },
        "Padova": {
          "label": "Padua",
          "code": "PD"
        },
        "Palermo": {
          "code": "PA"
        },
        "Parma": {
          "code": "PR"
        },
        "Pavia": {
          "code": "PV"
        },
        "Perugia": {
          "code": "PG"
        },
        "Pesaro e Urbino": {
          "label": "Pesaro and Urbino",
          "code": "PU"
        },
        "Pescara": {
          "code": "PE"
        },
        "Piacenza": {
          "code": "PC"
        },
        "Pisa": {
          "code": "PI"
        },
        "Pistoia": {
          "code": "PT"
        },
        "Pordenone": {
          "code": "PN"
        },
        "Potenza": {
          "code": "PZ"
        },
        "Prato": {
          "code": "PO"
        },
        "Ragusa": {
          "code": "RG"
        },
        "Ravenna": {
          "code": "RA"
        },
        "Reggio Calabria": {
          "code": "RC"
        },
        "Reggio Emilia": {
          "code": "RE"
        },
        "Rieti": {
          "code": "RI"
        },
        "Rimini": {
          "code": "RN"
        },
        "Roma": {
          "label": "Rome",
          "code": "RM"
        },
        "Rovigo": {
          "code": "RO"
        },
        "Salerno": {
          "code": "SA"
        },
        "Sassari": {
          "code": "SS"
        },
        "Savona": {
          "code": "SV"
        },
        "Siena": {
          "code": "SI"
        },
        "Sondrio": {
          "code": "SO"
        },
        "Bolzano": {
          "label": "South Tyrol",
          "code": "BZ"
        },
        "Siracusa": {
          "label": "Syracuse",
          "code": "SR"
        },
        "Taranto": {
          "code": "TA"
        },
        "Teramo": {
          "code": "TE"
        },
        "Terni": {
          "code": "TR"
        },
        "Trapani": {
          "code": "TP"
        },
        "Trento": {
          "label": "Trentino",
          "code": "TN"
        },
        "Treviso": {
          "code": "TV"
        },
        "Trieste": {
          "code": "TS"
        },
        "Torino": {
          "label": "Turin",
          "code": "TO"
        },
        "Udine": {
          "code": "UD"
        },
        "Varese": {
          "code": "VA"
        },
        "Venezia": {
          "label": "Venice",
          "code": "VE"
        },
        "Verbano-Cusio-Ossola": {
          "code": "VB"
        },
        "Vercelli": {
          "code": "VC"
        },
        "Verona": {
          "code": "VR"
        },
        "Vibo Valentia": {
          "code": "VV"
        },
        "Vicenza": {
          "code": "VI"
        },
        "Viterbo": {
          "code": "VT"
        }
      },
      "country": "Italy",
      "addr_format": 9,
      "addr_display_format": 9,
      "country_code": "IT",
      "zip_format": "\\d{5}"
    },
    "JM": {
      "country": "Jamaica",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "JM",
      "zip_format": ""
    },
    "JP": {
      "labels": {
        "city": "City/ward/town/village",
        "state": "Prefecture"
      },
      "states": {
        "Hokkaidō": {
          "label": "Hokkaido",
          "code": "JP-01"
        },
        "Aomori": {
          "code": "JP-02"
        },
        "Iwate": {
          "code": "JP-03"
        },
        "Miyagi": {
          "code": "JP-04"
        },
        "Akita": {
          "code": "JP-05"
        },
        "Yamagata": {
          "code": "JP-06"
        },
        "Fukushima": {
          "code": "JP-07"
        },
        "Ibaraki": {
          "code": "JP-08"
        },
        "Tochigi": {
          "code": "JP-09"
        },
        "Gunma": {
          "code": "JP-10"
        },
        "Saitama": {
          "code": "JP-11"
        },
        "Chiba": {
          "code": "JP-12"
        },
        "Tōkyō": {
          "label": "Tokyo",
          "code": "JP-13"
        },
        "Kanagawa": {
          "code": "JP-14"
        },
        "Niigata": {
          "code": "JP-15"
        },
        "Toyama": {
          "code": "JP-16"
        },
        "Ishikawa": {
          "code": "JP-17"
        },
        "Fukui": {
          "code": "JP-18"
        },
        "Yamanashi": {
          "code": "JP-19"
        },
        "Nagano": {
          "code": "JP-20"
        },
        "Gifu": {
          "code": "JP-21"
        },
        "Shizuoka": {
          "code": "JP-22"
        },
        "Aichi": {
          "code": "JP-23"
        },
        "Mie": {
          "code": "JP-24"
        },
        "Shiga": {
          "code": "JP-25"
        },
        "Kyōto": {
          "label": "Kyoto",
          "code": "JP-26"
        },
        "Ōsaka": {
          "label": "Osaka",
          "code": "JP-27"
        },
        "Hyōgo": {
          "label": "Hyogo",
          "code": "JP-28"
        },
        "Nara": {
          "code": "JP-29"
        },
        "Wakayama": {
          "code": "JP-30"
        },
        "Tottori": {
          "code": "JP-31"
        },
        "Shimane": {
          "code": "JP-32"
        },
        "Okayama": {
          "code": "JP-33"
        },
        "Hiroshima": {
          "code": "JP-34"
        },
        "Yamaguchi": {
          "code": "JP-35"
        },
        "Tokushima": {
          "code": "JP-36"
        },
        "Kagawa": {
          "code": "JP-37"
        },
        "Ehime": {
          "code": "JP-38"
        },
        "Kōchi": {
          "label": "Kochi",
          "code": "JP-39"
        },
        "Fukuoka": {
          "code": "JP-40"
        },
        "Saga": {
          "code": "JP-41"
        },
        "Nagasaki": {
          "code": "JP-42"
        },
        "Kumamoto": {
          "code": "JP-43"
        },
        "Ōita": {
          "label": "Oita",
          "code": "JP-44"
        },
        "Miyazaki": {
          "code": "JP-45"
        },
        "Kagoshima": {
          "code": "JP-46"
        },
        "Okinawa": {
          "code": "JP-47"
        }
      },
      "country": "Japan",
      "addr_format": 10,
      "addr_display_format": 10,
      "country_code": "JP",
      "zip_format": "\\d{3}-?\\d{4}"
    },
    "JE": {
      "country": "Jersey",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "JE",
      "zip_format": "JE\\d[\\dA-Z]? ?\\d[ABD-HJLN-UW-Z]{2}"
    },
    "JO": {
      "country": "Jordan",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "JO",
      "zip_format": "\\d{5}"
    },
    "KZ": {
      "country": "Kazakhstan",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "KZ",
      "zip_format": "\\d{6}"
    },
    "KE": {
      "country": "Kenya",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "KE",
      "zip_format": "\\d{5}"
    },
    "KI": {
      "country": "Kiribati",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "KI",
      "zip_format": ""
    },
    "KP": {
      "country": "Korea, Democratic People's Republic Of",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "KP",
      "zip_format": ""
    },
    "XK": {
      "country": "Kosovo",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "XK",
      "zip_format": "[1-7]\\d{4}"
    },
    "KW": {
      "country": "Kuwait",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "KW",
      "zip_format": "\\d{5}"
    },
    "KG": {
      "country": "Kyrgyzstan",
      "addr_format": 11,
      "addr_display_format": 11,
      "country_code": "KG",
      "zip_format": "\\d{6}"
    },
    "LA": {
      "labels": {
        "state": "Province"
      },
      "country": "Lao People's Democratic Republic",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "LA",
      "zip_format": "\\d{5}"
    },
    "LV": {
      "country": "Latvia",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "LV",
      "zip_format": "LV-\\d{4}"
    },
    "LB": {
      "country": "Lebanon",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "LB",
      "zip_format": "(?:\\d{4})(?: ?(?:\\d{4}))?"
    },
    "LS": {
      "country": "Lesotho",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "LS",
      "zip_format": "\\d{3}"
    },
    "LR": {
      "country": "Liberia",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "LR",
      "zip_format": "\\d{4}"
    },
    "LY": {
      "country": "Libyan Arab Jamahiriya",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "LY",
      "zip_format": ""
    },
    "LI": {
      "country": "Liechtenstein",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "LI",
      "zip_format": "948[5-9]|949[0-8]"
    },
    "LT": {
      "country": "Lithuania",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "LT",
      "zip_format": "\\d{5}"
    },
    "LU": {
      "country": "Luxembourg",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "LU",
      "zip_format": "\\d{4}"
    },
    "MG": {
      "country": "Madagascar",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "MG",
      "zip_format": "\\d{3}"
    },
    "MW": {
      "country": "Malawi",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "MW",
      "zip_format": ""
    },
    "MY": {
      "labels": {
        "state": "State/territory",
        "zip": "Postcode"
      },
      "states": {
        "Johor": {
          "code": "JHR"
        },
        "Kedah": {
          "code": "KDH"
        },
        "Kelantan": {
          "code": "KTN"
        },
        "Kuala Lumpur": {
          "code": "KUL"
        },
        "Labuan": {
          "code": "LBN"
        },
        "Melaka": {
          "label": "Malacca",
          "code": "MLK"
        },
        "Negeri Sembilan": {
          "code": "NSN"
        },
        "Pahang": {
          "code": "PHG"
        },
        "Penang": {
          "code": "PNG"
        },
        "Perak": {
          "code": "PRK"
        },
        "Perlis": {
          "code": "PLS"
        },
        "Putrajaya": {
          "code": "PJY"
        },
        "Sabah": {
          "code": "SBH"
        },
        "Sarawak": {
          "code": "SWK"
        },
        "Selangor": {
          "code": "SGR"
        },
        "Terengganu": {
          "code": "TRG"
        }
      },
      "country": "Malaysia",
      "addr_format": 3,
      "addr_display_format": 3,
      "country_code": "MY",
      "zip_format": "\\d{5}"
    },
    "MV": {
      "country": "Maldives",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "MV",
      "zip_format": "\\d{5}"
    },
    "ML": {
      "country": "Mali",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "ML",
      "zip_format": ""
    },
    "MT": {
      "country": "Malta",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "MT",
      "zip_format": "[A-Z]{3} ?\\d{2,4}"
    },
    "MQ": {
      "country": "Martinique",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "MQ",
      "zip_format": "9[78]2\\d{2}"
    },
    "MR": {
      "country": "Mauritania",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "MR",
      "zip_format": ""
    },
    "MU": {
      "country": "Mauritius",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "MU",
      "zip_format": "\\d{3}(?:\\d{2}|[A-Z]{2}\\d{3})"
    },
    "YT": {
      "country": "Mayotte",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "YT",
      "zip_format": "976\\d{2}"
    },
    "MX": {
      "labels": {
        "street": "Street and house number",
        "state": "State"
      },
      "states": {
        "Aguascalientes": {
          "code": "AGS"
        },
        "Baja California": {
          "code": "BC"
        },
        "Baja California Sur": {
          "code": "BCS"
        },
        "Campeche": {
          "code": "CAMP"
        },
        "Chiapas": {
          "code": "CHIS"
        },
        "Chihuahua": {
          "code": "CHIH"
        },
        "Ciudad de México": {
          "label": "Ciudad de Mexico",
          "code": "DF"
        },
        "Coahuila": {
          "code": "COAH"
        },
        "Colima": {
          "code": "COL"
        },
        "Durango": {
          "code": "DGO"
        },
        "Guanajuato": {
          "code": "GTO"
        },
        "Guerrero": {
          "code": "GRO"
        },
        "Hidalgo": {
          "code": "HGO"
        },
        "Jalisco": {
          "code": "JAL"
        },
        "México": {
          "label": "Mexico State",
          "code": "MEX"
        },
        "Michoacán": {
          "code": "MICH"
        },
        "Morelos": {
          "code": "MOR"
        },
        "Nayarit": {
          "code": "NAY"
        },
        "Nuevo León": {
          "code": "NL"
        },
        "Oaxaca": {
          "code": "OAX"
        },
        "Puebla": {
          "code": "PUE"
        },
        "Querétaro": {
          "code": "QRO"
        },
        "Quintana Roo": {
          "code": "Q ROO"
        },
        "San Luis Potosí": {
          "code": "SLP"
        },
        "Sinaloa": {
          "code": "SIN"
        },
        "Sonora": {
          "code": "SON"
        },
        "Tabasco": {
          "code": "TAB"
        },
        "Tamaulipas": {
          "code": "TAMPS"
        },
        "Tlaxcala": {
          "code": "TLAX"
        },
        "Veracruz": {
          "code": "VER"
        },
        "Yucatán": {
          "code": "YUC"
        },
        "Zacatecas": {
          "code": "ZAC"
        }
      },
      "country": "Mexico",
      "addr_format": 3,
      "addr_display_format": 3,
      "country_code": "MX",
      "zip_format": "\\d{5}"
    },
    "MD": {
      "country": "Moldova, Republic of",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "MD",
      "zip_format": "\\d{4}"
    },
    "MC": {
      "country": "Monaco",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "MC",
      "zip_format": "980\\d{2}"
    },
    "MN": {
      "country": "Mongolia",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "MN",
      "zip_format": "\\d{5}"
    },
    "ME": {
      "country": "Montenegro",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "ME",
      "zip_format": "8\\d{4}"
    },
    "MS": {
      "country": "Montserrat",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "MS",
      "zip_format": ""
    },
    "MA": {
      "country": "Morocco",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "MA",
      "zip_format": "\\d{5}"
    },
    "MZ": {
      "country": "Mozambique",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "MZ",
      "zip_format": "\\d{4}"
    },
    "MM": {
      "country": "Myanmar",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "MM",
      "zip_format": "\\d{5}"
    },
    "NA": {
      "country": "Namibia",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "NA",
      "zip_format": "\\d{5}"
    },
    "NR": {
      "country": "Nauru",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "NR",
      "zip_format": ""
    },
    "NP": {
      "country": "Nepal",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "NP",
      "zip_format": "\\d{5}"
    },
    "NL": {
      "labels": {
        "street": "Street and house number"
      },
      "country": "Netherlands",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "NL",
      "zip_format": "\\d{4} ?[A-Z]{2}"
    },
    "AN": {
      "country": "Netherlands Antilles",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "AN",
      "zip_format": ""
    },
    "NC": {
      "country": "New Caledonia",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "NC",
      "zip_format": "988\\d{2}"
    },
    "NZ": {
      "states": {
        "Auckland": {
          "code": "AUK"
        },
        "Bay of Plenty": {
          "code": "BOP"
        },
        "Canterbury": {
          "code": "CAN"
        },
        "Gisborne": {
          "code": "GIS"
        },
        "Hawke's Bay": {
          "label": "Hawke’s Bay",
          "code": "HKB"
        },
        "Manawatu-Wanganui": {
          "code": "MWT"
        },
        "Marlborough": {
          "code": "MBH"
        },
        "Nelson": {
          "code": "NSN"
        },
        "Northland": {
          "code": "NTL"
        },
        "Otago": {
          "code": "OTA"
        },
        "Southland": {
          "code": "STL"
        },
        "Taranaki": {
          "code": "TKI"
        },
        "Tasman": {
          "code": "TAS"
        },
        "Waikato": {
          "code": "WKO"
        },
        "Wellington": {
          "code": "WGN"
        },
        "West Coast": {
          "code": "WTC"
        }
      },
      "country": "New Zealand",
      "addr_format": 4,
      "addr_display_format": 4,
      "country_code": "NZ",
      "zip_format": "\\d{4}"
    },
    "NI": {
      "country": "Nicaragua",
      "addr_format": 12,
      "addr_display_format": 12,
      "country_code": "NI",
      "zip_format": "\\d{5}"
    },
    "NE": {
      "country": "Niger",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "NE",
      "zip_format": "\\d{4}"
    },
    "NG": {
      "labels": {
        "state": "State"
      },
      "states": {
        "Abia": {
          "code": "AB"
        },
        "Adamawa": {
          "code": "AD"
        },
        "Akwa Ibom": {
          "code": "AK"
        },
        "Anambra": {
          "code": "AN"
        },
        "Bauchi": {
          "code": "BA"
        },
        "Bayelsa": {
          "code": "BY"
        },
        "Benue": {
          "code": "BE"
        },
        "Borno": {
          "code": "BO"
        },
        "Cross River": {
          "code": "CR"
        },
        "Delta": {
          "code": "DE"
        },
        "Ebonyi": {
          "code": "EB"
        },
        "Edo": {
          "code": "ED"
        },
        "Ekiti": {
          "code": "EK"
        },
        "Enugu": {
          "code": "EN"
        },
        "Abuja Federal Capital Territory": {
          "label": "Federal Capital Territory",
          "code": "FC"
        },
        "Gombe": {
          "code": "GO"
        },
        "Imo": {
          "code": "IM"
        },
        "Jigawa": {
          "code": "JI"
        },
        "Kaduna": {
          "code": "KD"
        },
        "Kano": {
          "code": "KN"
        },
        "Katsina": {
          "code": "KT"
        },
        "Kebbi": {
          "code": "KE"
        },
        "Kogi": {
          "code": "KO"
        },
        "Kwara": {
          "code": "KW"
        },
        "Lagos": {
          "code": "LA"
        },
        "Nasarawa": {
          "code": "NA"
        },
        "Niger": {
          "code": "NI"
        },
        "Ogun": {
          "code": "OG"
        },
        "Ondo": {
          "code": "ON"
        },
        "Osun": {
          "code": "OS"
        },
        "Oyo": {
          "code": "OY"
        },
        "Plateau": {
          "code": "PL"
        },
        "Rivers": {
          "code": "RI"
        },
        "Sokoto": {
          "code": "SO"
        },
        "Taraba": {
          "code": "TA"
        },
        "Yobe": {
          "code": "YO"
        },
        "Zamfara": {
          "code": "ZA"
        }
      },
      "country": "Nigeria",
      "addr_format": 4,
      "addr_display_format": 4,
      "country_code": "NG",
      "zip_format": "\\d{6}"
    },
    "NU": {
      "country": "Niue",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "NU",
      "zip_format": ""
    },
    "NF": {
      "country": "Norfolk Island",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "NF",
      "zip_format": "2899"
    },
    "MK": {
      "country": "North Macedonia",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "MK",
      "zip_format": "\\d{4}"
    },
    "NO": {
      "labels": {
        "street": "Street and house number"
      },
      "country": "Norway",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "NO",
      "zip_format": "\\d{4}"
    },
    "OM": {
      "country": "Oman",
      "addr_format": 12,
      "addr_display_format": 12,
      "country_code": "OM",
      "zip_format": "(?:PC )?\\d{3}"
    },
    "PK": {
      "country": "Pakistan",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "PK",
      "zip_format": "\\d{5}"
    },
    "PS": {
      "country": "Palestinian Territory, Occupied",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "PS",
      "zip_format": ""
    },
    "PA": {
      "states": {
        "Bocas del Toro": {
          "code": "PA-1"
        },
        "Chiriquí": {
          "code": "PA-4"
        },
        "Coclé": {
          "code": "PA-2"
        },
        "Colón": {
          "code": "PA-3"
        },
        "Darién": {
          "code": "PA-5"
        },
        "Emberá": {
          "code": "PA-EM"
        },
        "Kuna Yala": {
          "label": "Guna Yala",
          "code": "PA-KY"
        },
        "Herrera": {
          "code": "PA-6"
        },
        "Los Santos": {
          "code": "PA-7"
        },
        "Ngöbe-Buglé": {
          "code": "PA-NB"
        },
        "Panamá": {
          "code": "PA-8"
        },
        "Veraguas": {
          "code": "PA-9"
        },
        "Panamá Oeste": {
          "label": "West Panamá",
          "code": "PA-10"
        }
      },
      "country": "Panama",
      "addr_format": 7,
      "addr_display_format": 7,
      "country_code": "PA",
      "zip_format": ""
    },
    "PG": {
      "country": "Papua New Guinea",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "PG",
      "zip_format": "\\d{3}"
    },
    "PY": {
      "country": "Paraguay",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "PY",
      "zip_format": "\\d{4}"
    },
    "PE": {
      "states": {
        "Amazonas": {
          "code": "PE-AMA"
        },
        "Áncash": {
          "label": "Ancash",
          "code": "PE-ANC"
        },
        "Apurímac": {
          "code": "PE-APU"
        },
        "Arequipa": {
          "code": "PE-ARE"
        },
        "Ayacucho": {
          "code": "PE-AYA"
        },
        "Cajamarca": {
          "code": "PE-CAJ"
        },
        "Cuzco": {
          "label": "Cusco",
          "code": "PE-CUS"
        },
        "Callao": {
          "label": "El Callao",
          "code": "PE-CAL"
        },
        "Huancavelica": {
          "code": "PE-HUV"
        },
        "Huánuco": {
          "code": "PE-HUC"
        },
        "Ica": {
          "code": "PE-ICA"
        },
        "Junín": {
          "code": "PE-JUN"
        },
        "La Libertad": {
          "code": "PE-LAL"
        },
        "Lambayeque": {
          "code": "PE-LAM"
        },
        "Lima (provincia)": {
          "label": "Lima",
          "code": "PE-LMA"
        },
        "Lima (departamento)": {
          "label": "Lima Region",
          "code": "PE-LIM"
        },
        "Loreto": {
          "code": "PE-LOR"
        },
        "Madre de Dios": {
          "code": "PE-MDD"
        },
        "Moquegua": {
          "code": "PE-MOQ"
        },
        "Pasco": {
          "code": "PE-PAS"
        },
        "Piura": {
          "code": "PE-PIU"
        },
        "Puno": {
          "code": "PE-PUN"
        },
        "San Martín": {
          "code": "PE-SAM"
        },
        "Tacna": {
          "code": "PE-TAC"
        },
        "Tumbes": {
          "code": "PE-TUM"
        },
        "Ucayali": {
          "code": "PE-UCA"
        }
      },
      "country": "Peru",
      "addr_format": 4,
      "addr_display_format": 4,
      "country_code": "PE",
      "zip_format": "(?:LIMA \\d{1,2}|CALLAO 0?\\d)|[0-2]\\d{4}"
    },
    "PH": {
      "states": {
        "Abra": {
          "code": "PH-ABR"
        },
        "Agusan del Norte": {
          "code": "PH-AGN"
        },
        "Agusan del Sur": {
          "code": "PH-AGS"
        },
        "Aklan": {
          "code": "PH-AKL"
        },
        "Albay": {
          "code": "PH-ALB"
        },
        "Antique": {
          "code": "PH-ANT"
        },
        "Apayao": {
          "code": "PH-APA"
        },
        "Aurora": {
          "code": "PH-AUR"
        },
        "Basilan": {
          "code": "PH-BAS"
        },
        "Bataan": {
          "code": "PH-BAN"
        },
        "Batanes": {
          "code": "PH-BTN"
        },
        "Batangas": {
          "code": "PH-BTG"
        },
        "Benguet": {
          "code": "PH-BEN"
        },
        "Biliran": {
          "code": "PH-BIL"
        },
        "Bohol": {
          "code": "PH-BOH"
        },
        "Bukidnon": {
          "code": "PH-BUK"
        },
        "Bulacan": {
          "code": "PH-BUL"
        },
        "Cagayan": {
          "code": "PH-CAG"
        },
        "Camarines Norte": {
          "code": "PH-CAN"
        },
        "Camarines Sur": {
          "code": "PH-CAS"
        },
        "Camiguin": {
          "code": "PH-CAM"
        },
        "Capiz": {
          "code": "PH-CAP"
        },
        "Catanduanes": {
          "code": "PH-CAT"
        },
        "Cavite": {
          "code": "PH-CAV"
        },
        "Cebu": {
          "code": "PH-CEB"
        },
        "Davao de Oro": {
          "label": "Compostela Valley",
          "code": "PH-COM"
        },
        "Cotabato": {
          "code": "PH-NCO"
        },
        "Davao Occidental": {
          "code": "PH-DVO"
        },
        "Davao Oriental": {
          "code": "PH-DAO"
        },
        "Davao del Norte": {
          "code": "PH-DAV"
        },
        "Davao del Sur": {
          "code": "PH-DAS"
        },
        "Dinagat Islands": {
          "code": "PH-DIN"
        },
        "Eastern Samar": {
          "code": "PH-EAS"
        },
        "Guimaras": {
          "code": "PH-GUI"
        },
        "Ifugao": {
          "code": "PH-IFU"
        },
        "Ilocos Norte": {
          "code": "PH-ILN"
        },
        "Ilocos Sur": {
          "code": "PH-ILS"
        },
        "Iloilo": {
          "code": "PH-ILI"
        },
        "Isabela": {
          "code": "PH-ISA"
        },
        "Kalinga": {
          "code": "PH-KAL"
        },
        "La Union": {
          "code": "PH-LUN"
        },
        "Laguna": {
          "code": "PH-LAG"
        },
        "Lanao del Norte": {
          "code": "PH-LAN"
        },
        "Lanao del Sur": {
          "code": "PH-LAS"
        },
        "Leyte": {
          "code": "PH-LEY"
        },
        "Maguindanao": {
          "code": "PH-MAG"
        },
        "Marinduque": {
          "code": "PH-MAD"
        },
        "Masbate": {
          "code": "PH-MAS"
        },
        "Metro Manila": {
          "code": "PH-00"
        },
        "Misamis Occidental": {
          "code": "PH-MSC"
        },
        "Misamis Oriental": {
          "code": "PH-MSR"
        },
        "Mountain Province": {
          "label": "Mountain",
          "code": "PH-MOU"
        },
        "Negros Occidental": {
          "code": "PH-NEC"
        },
        "Negros Oriental": {
          "code": "PH-NER"
        },
        "Northern Samar": {
          "code": "PH-NSA"
        },
        "Nueva Ecija": {
          "code": "PH-NUE"
        },
        "Nueva Vizcaya": {
          "code": "PH-NUV"
        },
        "Occidental Mindoro": {
          "code": "PH-MDC"
        },
        "Oriental Mindoro": {
          "code": "PH-MDR"
        },
        "Palawan": {
          "code": "PH-PLW"
        },
        "Pampanga": {
          "code": "PH-PAM"
        },
        "Pangasinan": {
          "code": "PH-PAN"
        },
        "Quezon": {
          "code": "PH-QUE"
        },
        "Quirino": {
          "code": "PH-QUI"
        },
        "Rizal": {
          "code": "PH-RIZ"
        },
        "Romblon": {
          "code": "PH-ROM"
        },
        "Samar": {
          "code": "PH-WSA"
        },
        "Sarangani": {
          "code": "PH-SAR"
        },
        "Siquijor": {
          "code": "PH-SIG"
        },
        "Sorsogon": {
          "code": "PH-SOR"
        },
        "South Cotabato": {
          "code": "PH-SCO"
        },
        "Southern Leyte": {
          "code": "PH-SLE"
        },
        "Sultan Kudarat": {
          "code": "PH-SUK"
        },
        "Sulu": {
          "code": "PH-SLU"
        },
        "Surigao del Norte": {
          "code": "PH-SUN"
        },
        "Surigao del Sur": {
          "code": "PH-SUR"
        },
        "Tarlac": {
          "code": "PH-TAR"
        },
        "Tawi-Tawi": {
          "code": "PH-TAW"
        },
        "Zambales": {
          "code": "PH-ZMB"
        },
        "Zamboanga Sibugay": {
          "code": "PH-ZSI"
        },
        "Zamboanga del Norte": {
          "code": "PH-ZAN"
        },
        "Zamboanga del Sur": {
          "code": "PH-ZAS"
        }
      },
      "country": "Philippines",
      "addr_format": 5,
      "addr_display_format": 5,
      "country_code": "PH",
      "zip_format": "\\d{4}"
    },
    "PN": {
      "country": "Pitcairn",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "PN",
      "zip_format": "PCRN 1ZZ"
    },
    "PL": {
      "country": "Poland",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "PL",
      "zip_format": "\\d{2}-\\d{3}"
    },
    "PT": {
      "states": {
        "Aveiro": {
          "code": "PT-01"
        },
        "Açores": {
          "label": "Azores",
          "code": "PT-20"
        },
        "Beja": {
          "code": "PT-02"
        },
        "Braga": {
          "code": "PT-03"
        },
        "Bragança": {
          "code": "PT-04"
        },
        "Castelo Branco": {
          "code": "PT-05"
        },
        "Coimbra": {
          "code": "PT-06"
        },
        "Évora": {
          "code": "PT-07"
        },
        "Faro": {
          "code": "PT-08"
        },
        "Guarda": {
          "code": "PT-09"
        },
        "Leiria": {
          "code": "PT-10"
        },
        "Lisboa": {
          "label": "Lisbon",
          "code": "PT-11"
        },
        "Madeira": {
          "code": "PT-30"
        },
        "Portalegre": {
          "code": "PT-12"
        },
        "Porto": {
          "code": "PT-13"
        },
        "Santarém": {
          "code": "PT-14"
        },
        "Setúbal": {
          "code": "PT-15"
        },
        "Viana do Castelo": {
          "code": "PT-16"
        },
        "Vila Real": {
          "code": "PT-17"
        },
        "Viseu": {
          "code": "PT-18"
        }
      },
      "country": "Portugal",
      "addr_format": 4,
      "addr_display_format": 4,
      "country_code": "PT",
      "zip_format": "\\d{4}-\\d{3}"
    },
    "QA": {
      "country": "Qatar",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "QA",
      "zip_format": ""
    },
    "CM": {
      "country": "Republic of Cameroon",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "CM",
      "zip_format": ""
    },
    "RE": {
      "country": "Reunion",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "RE",
      "zip_format": "9[78]4\\d{2}"
    },
    "RO": {
      "labels": {
        "state": "County"
      },
      "states": {
        "Alba": {
          "code": "AB"
        },
        "Arad": {
          "code": "AR"
        },
        "Argeș": {
          "code": "AG"
        },
        "Bacău": {
          "code": "BC"
        },
        "Bihor": {
          "code": "BH"
        },
        "Bistrița-Năsăud": {
          "label": "Bistriţa-Năsăud",
          "code": "BN"
        },
        "Botoșani": {
          "label": "Botoşani",
          "code": "BT"
        },
        "Brăila": {
          "code": "BR"
        },
        "Brașov": {
          "label": "Braşov",
          "code": "BV"
        },
        "București": {
          "label": "Bucharest",
          "code": "B"
        },
        "Buzău": {
          "code": "BZ"
        },
        "Caraș-Severin": {
          "code": "CS"
        },
        "Cluj": {
          "code": "CJ"
        },
        "Constanța": {
          "code": "CT"
        },
        "Covasna": {
          "code": "CV"
        },
        "Călărași": {
          "code": "CL"
        },
        "Dolj": {
          "code": "DJ"
        },
        "Dâmbovița": {
          "code": "DB"
        },
        "Galați": {
          "code": "GL"
        },
        "Giurgiu": {
          "code": "GR"
        },
        "Gorj": {
          "code": "GJ"
        },
        "Harghita": {
          "code": "HR"
        },
        "Hunedoara": {
          "code": "HD"
        },
        "Ialomița": {
          "code": "IL"
        },
        "Iași": {
          "code": "IS"
        },
        "Ilfov": {
          "code": "IF"
        },
        "Maramureș": {
          "label": "Maramureş",
          "code": "MM"
        },
        "Mehedinți": {
          "code": "MH"
        },
        "Mureș": {
          "label": "Mureş",
          "code": "MS"
        },
        "Neamț": {
          "label": "Neamţ",
          "code": "NT"
        },
        "Olt": {
          "code": "OT"
        },
        "Prahova": {
          "code": "PH"
        },
        "Sălaj": {
          "code": "SJ"
        },
        "Satu Mare": {
          "code": "SM"
        },
        "Sibiu": {
          "code": "SB"
        },
        "Suceava": {
          "code": "SV"
        },
        "Teleorman": {
          "code": "TR"
        },
        "Timiș": {
          "code": "TM"
        },
        "Tulcea": {
          "code": "TL"
        },
        "Vâlcea": {
          "code": "VL"
        },
        "Vaslui": {
          "code": "VS"
        },
        "Vrancea": {
          "code": "VN"
        }
      },
      "country": "Romania",
      "addr_format": 3,
      "addr_display_format": 3,
      "country_code": "RO",
      "zip_format": "\\d{6}"
    },
    "RU": {
      "states": {
        "Republic of Adygeya": {
          "label": "Adygea",
          "code": "AD"
        },
        "Altai Republic": {
          "label": "Altai",
          "code": "AL"
        },
        "Altai Krai": {
          "code": "ALT"
        },
        "Amur Oblast": {
          "label": "Amur",
          "code": "AMU"
        },
        "Arkhangelsk Oblast": {
          "label": "Arkhangelsk",
          "code": "ARK"
        },
        "Astrakhan Oblast": {
          "label": "Astrakhan",
          "code": "AST"
        },
        "Republic of Bashkortostan": {
          "label": "Bashkortostan",
          "code": "BA"
        },
        "Belgorod Oblast": {
          "label": "Belgorod",
          "code": "BEL"
        },
        "Bryansk Oblast": {
          "label": "Bryansk",
          "code": "BRY"
        },
        "Republic of Buryatia": {
          "label": "Buryat",
          "code": "BU"
        },
        "Chechen Republic": {
          "label": "Chechen",
          "code": "CE"
        },
        "Chelyabinsk Oblast": {
          "label": "Chelyabinsk",
          "code": "CHE"
        },
        "Chukotka Autonomous Okrug": {
          "label": "Chukotka Okrug",
          "code": "CHU"
        },
        "Chuvash Republic": {
          "label": "Chuvash",
          "code": "CU"
        },
        "Republic of Dagestan": {
          "label": "Dagestan",
          "code": "DA"
        },
        "Republic of Ingushetia": {
          "label": "Ingushetia",
          "code": "IN"
        },
        "Irkutsk Oblast": {
          "label": "Irkutsk",
          "code": "IRK"
        },
        "Ivanovo Oblast": {
          "label": "Ivanovo",
          "code": "IVA"
        },
        "Jewish Autonomous Oblast": {
          "label": "Jewish",
          "code": "YEV"
        },
        "Kabardino-Balkarian Republic": {
          "label": "Kabardino-Balkar",
          "code": "KB"
        },
        "Kaliningrad Oblast": {
          "label": "Kaliningrad",
          "code": "KGD"
        },
        "Republic of Kalmykia": {
          "label": "Kalmykia",
          "code": "KL"
        },
        "Kaluga Oblast": {
          "label": "Kaluga",
          "code": "KLU"
        },
        "Kamchatka Krai": {
          "code": "KAM"
        },
        "Karachay–Cherkess Republic": {
          "label": "Karachay-Cherkess",
          "code": "KC"
        },
        "Republic of Karelia": {
          "label": "Karelia",
          "code": "KR"
        },
        "Kemerovo Oblast": {
          "label": "Kemerovo",
          "code": "KEM"
        },
        "Khabarovsk Krai": {
          "code": "KHA"
        },
        "Republic of Khakassia": {
          "label": "Khakassia",
          "code": "KK"
        },
        "Khanty-Mansi Autonomous Okrug": {
          "label": "Khanty-Mansi",
          "code": "KHM"
        },
        "Kirov Oblast": {
          "label": "Kirov",
          "code": "KIR"
        },
        "Komi Republic": {
          "label": "Komi",
          "code": "KO"
        },
        "Kostroma Oblast": {
          "label": "Kostroma",
          "code": "KOS"
        },
        "Krasnodar Krai": {
          "code": "KDA"
        },
        "Krasnoyarsk Krai": {
          "code": "KYA"
        },
        "Kurgan Oblast": {
          "label": "Kurgan",
          "code": "KGN"
        },
        "Kursk Oblast": {
          "label": "Kursk",
          "code": "KRS"
        },
        "Leningrad Oblast": {
          "label": "Leningrad",
          "code": "LEN"
        },
        "Lipetsk Oblast": {
          "label": "Lipetsk",
          "code": "LIP"
        },
        "Magadan Oblast": {
          "label": "Magadan",
          "code": "MAG"
        },
        "Mari El Republic": {
          "label": "Mari El",
          "code": "ME"
        },
        "Republic of Mordovia": {
          "label": "Mordovia",
          "code": "MO"
        },
        "Moscow": {
          "code": "MOW"
        },
        "Moscow Oblast": {
          "label": "Moscow Province",
          "code": "MOS"
        },
        "Murmansk Oblast": {
          "label": "Murmansk",
          "code": "MUR"
        },
        "Nizhny Novgorod Oblast": {
          "label": "Nizhny Novgorod",
          "code": "NIZ"
        },
        "Republic of North Ossetia–Alania": {
          "label": "North Ossetia-Alania",
          "code": "SE"
        },
        "Novgorod Oblast": {
          "label": "Novgorod",
          "code": "NGR"
        },
        "Novosibirsk Oblast": {
          "label": "Novosibirsk",
          "code": "NVS"
        },
        "Omsk Oblast": {
          "label": "Omsk",
          "code": "OMS"
        },
        "Orenburg Oblast": {
          "label": "Orenburg",
          "code": "ORE"
        },
        "Oryol Oblast": {
          "label": "Oryol",
          "code": "ORL"
        },
        "Penza Oblast": {
          "label": "Penza",
          "code": "PNZ"
        },
        "Perm Krai": {
          "code": "PER"
        },
        "Primorsky Krai": {
          "code": "PRI"
        },
        "Pskov Oblast": {
          "label": "Pskov",
          "code": "PSK"
        },
        "Rostov Oblast": {
          "label": "Rostov",
          "code": "ROS"
        },
        "Ryazan Oblast": {
          "label": "Ryazan",
          "code": "RYA"
        },
        "Saint Petersburg": {
          "code": "SPE"
        },
        "Sakha Republic (Yakutia)": {
          "label": "Sakha",
          "code": "SA"
        },
        "Sakhalin Oblast": {
          "label": "Sakhalin",
          "code": "SAK"
        },
        "Samara Oblast": {
          "label": "Samara",
          "code": "SAM"
        },
        "Saratov Oblast": {
          "label": "Saratov",
          "code": "SAR"
        },
        "Smolensk Oblast": {
          "label": "Smolensk",
          "code": "SMO"
        },
        "Stavropol Krai": {
          "code": "STA"
        },
        "Sverdlovsk Oblast": {
          "label": "Sverdlovsk",
          "code": "SVE"
        },
        "Tambov Oblast": {
          "label": "Tambov",
          "code": "TAM"
        },
        "Republic of Tatarstan": {
          "label": "Tatarstan",
          "code": "TA"
        },
        "Tomsk Oblast": {
          "label": "Tomsk",
          "code": "TOM"
        },
        "Tula Oblast": {
          "label": "Tula",
          "code": "TUL"
        },
        "Tyva Republic": {
          "label": "Tuva",
          "code": "TY"
        },
        "Tver Oblast": {
          "label": "Tver",
          "code": "TVE"
        },
        "Tyumen Oblast": {
          "label": "Tyumen",
          "code": "TYU"
        },
        "Udmurtia": {
          "label": "Udmurt",
          "code": "UD"
        },
        "Ulyanovsk Oblast": {
          "label": "Ulyanovsk",
          "code": "ULY"
        },
        "Vladimir Oblast": {
          "label": "Vladimir",
          "code": "VLA"
        },
        "Volgograd Oblast": {
          "label": "Volgograd",
          "code": "VGG"
        },
        "Vologda Oblast": {
          "label": "Vologda",
          "code": "VLG"
        },
        "Voronezh Oblast": {
          "label": "Voronezh",
          "code": "VOR"
        },
        "Yamalo-Nenets Autonomous Okrug": {
          "label": "Yamalo-Nenets Okrug",
          "code": "YAN"
        },
        "Yaroslavl Oblast": {
          "label": "Yaroslavl",
          "code": "YAR"
        },
        "Zabaykalsky Krai": {
          "code": "ZAB"
        }
      },
      "country": "Russia",
      "addr_format": 4,
      "addr_display_format": 4,
      "country_code": "RU",
      "zip_format": "\\d{6}"
    },
    "RW": {
      "country": "Rwanda",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "RW",
      "zip_format": ""
    },
    "BL": {
      "country": "Saint Barthélemy",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "BL",
      "zip_format": "9[78][01]\\d{2}"
    },
    "SH": {
      "country": "Saint Helena",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "SH",
      "zip_format": "(?:ASCN|STHL) 1ZZ"
    },
    "KN": {
      "country": "Saint Kitts And Nevis",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "KN",
      "zip_format": ""
    },
    "LC": {
      "country": "Saint Lucia",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "LC",
      "zip_format": ""
    },
    "MF": {
      "country": "Saint Martin",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "MF",
      "zip_format": "9[78][01]\\d{2}"
    },
    "PM": {
      "country": "Saint Pierre And Miquelon",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "PM",
      "zip_format": "9[78]5\\d{2}"
    },
    "WS": {
      "country": "Samoa",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "WS",
      "zip_format": ""
    },
    "SM": {
      "country": "San Marino",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "SM",
      "zip_format": "4789\\d"
    },
    "ST": {
      "country": "Sao Tome And Principe",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "ST",
      "zip_format": ""
    },
    "SA": {
      "country": "Saudi Arabia",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "SA",
      "zip_format": "\\d{5}"
    },
    "SN": {
      "country": "Senegal",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "SN",
      "zip_format": "\\d{5}"
    },
    "RS": {
      "country": "Serbia",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "RS",
      "zip_format": "\\d{5,6}"
    },
    "SC": {
      "country": "Seychelles",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "SC",
      "zip_format": ""
    },
    "SL": {
      "country": "Sierra Leone",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "SL",
      "zip_format": ""
    },
    "SG": {
      "country": "Singapore",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "SG",
      "zip_format": "\\d{6}"
    },
    "SX": {
      "country": "Sint Maarten",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "SX",
      "zip_format": ""
    },
    "SK": {
      "country": "Slovakia",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "SK",
      "zip_format": "\\d{3} ?\\d{2}"
    },
    "SI": {
      "country": "Slovenia",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "SI",
      "zip_format": "\\d{4}"
    },
    "SB": {
      "country": "Solomon Islands",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "SB",
      "zip_format": ""
    },
    "SO": {
      "country": "Somalia",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "SO",
      "zip_format": "[A-Z]{2} ?\\d{5}"
    },
    "ZA": {
      "labels": {
        "state": "Province"
      },
      "states": {
        "Eastern Cape": {
          "code": "EC"
        },
        "Free State": {
          "code": "FS"
        },
        "Gauteng": {
          "code": "GT"
        },
        "KwaZulu-Natal": {
          "code": "NL"
        },
        "Limpopo": {
          "code": "LP"
        },
        "Mpumalanga": {
          "code": "MP"
        },
        "North West": {
          "code": "NW"
        },
        "Northern Cape": {
          "code": "NC"
        },
        "Western Cape": {
          "code": "WC"
        }
      },
      "country": "South Africa",
      "addr_format": 4,
      "addr_display_format": 4,
      "country_code": "ZA",
      "zip_format": "\\d{4}"
    },
    "GS": {
      "country": "South Georgia And The South Sandwich Islands",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "GS",
      "zip_format": "SIQQ 1ZZ"
    },
    "KR": {
      "labels": {
        "state": "Province"
      },
      "states": {
        "Busan": {
          "code": "KR-26"
        },
        "Daegu": {
          "code": "KR-27"
        },
        "Daejeon": {
          "code": "KR-30"
        },
        "Gangwon": {
          "code": "KR-42"
        },
        "Gwangju": {
          "label": "Gwangju City",
          "code": "KR-29"
        },
        "Gyeonggi": {
          "code": "KR-41"
        },
        "Incheon": {
          "code": "KR-28"
        },
        "Jeju": {
          "code": "KR-49"
        },
        "Chungbuk": {
          "label": "North Chungcheong",
          "code": "KR-43"
        },
        "Gyeongbuk": {
          "label": "North Gyeongsang",
          "code": "KR-47"
        },
        "Jeonbuk": {
          "label": "North Jeolla",
          "code": "KR-45"
        },
        "Sejong": {
          "code": "KR-50"
        },
        "Seoul": {
          "code": "KR-11"
        },
        "Chungnam": {
          "label": "South Chungcheong",
          "code": "KR-44"
        },
        "Gyeongnam": {
          "label": "South Gyeongsang",
          "code": "KR-48"
        },
        "Jeonnam": {
          "label": "South Jeolla",
          "code": "KR-46"
        },
        "Ulsan": {
          "code": "KR-31"
        }
      },
      "country": "South Korea",
      "addr_format": 13,
      "addr_display_format": 13,
      "country_code": "KR",
      "zip_format": "\\d{5}"
    },
    "SS": {
      "country": "South Sudan",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "SS",
      "zip_format": ""
    },
    "ES": {
      "labels": {
        "street": "Street and house number",
        "state": "Province"
      },
      "states": {
        "A Coruña": {
          "code": "C"
        },
        "Álava": {
          "code": "VI"
        },
        "Albacete": {
          "code": "AB"
        },
        "Alicante": {
          "code": "A"
        },
        "Almería": {
          "code": "AL"
        },
        "Asturias": {
          "label": "Asturias Province",
          "code": "O"
        },
        "Ávila": {
          "code": "AV"
        },
        "Badajoz": {
          "code": "BA"
        },
        "Balears": {
          "label": "Balears Province",
          "code": "PM"
        },
        "Barcelona": {
          "code": "B"
        },
        "Vizcaya": {
          "label": "Biscay",
          "code": "BI"
        },
        "Burgos": {
          "code": "BU"
        },
        "Cáceres": {
          "code": "CC"
        },
        "Cádiz": {
          "code": "CA"
        },
        "Cantabria": {
          "label": "Cantabria Province",
          "code": "S"
        },
        "Castellón": {
          "code": "CS"
        },
        "Ceuta": {
          "code": "CE"
        },
        "Ciudad Real": {
          "code": "CR"
        },
        "Córdoba": {
          "code": "CO"
        },
        "Cuenca": {
          "code": "CU"
        },
        "Guipúzcoa": {
          "label": "Gipuzkoa",
          "code": "SS"
        },
        "Girona": {
          "code": "GI"
        },
        "Granada": {
          "code": "GR"
        },
        "Guadalajara": {
          "code": "GU"
        },
        "Huelva": {
          "code": "H"
        },
        "Huesca": {
          "code": "HU"
        },
        "Jaén": {
          "code": "J"
        },
        "La Rioja": {
          "label": "La Rioja Province",
          "code": "LO"
        },
        "Las Palmas": {
          "code": "GC"
        },
        "León": {
          "code": "LE"
        },
        "Lleida": {
          "code": "L"
        },
        "Lugo": {
          "code": "LU"
        },
        "Madrid": {
          "label": "Madrid Province",
          "code": "M"
        },
        "Málaga": {
          "code": "MA"
        },
        "Melilla": {
          "code": "ML"
        },
        "Murcia": {
          "code": "MU"
        },
        "Navarra": {
          "code": "NA"
        },
        "Ourense": {
          "code": "OR"
        },
        "Palencia": {
          "code": "P"
        },
        "Pontevedra": {
          "code": "PO"
        },
        "Salamanca": {
          "code": "SA"
        },
        "Santa Cruz de Tenerife": {
          "code": "TF"
        },
        "Segovia": {
          "code": "SG"
        },
        "Sevilla": {
          "label": "Seville",
          "code": "SE"
        },
        "Soria": {
          "code": "SO"
        },
        "Tarragona": {
          "code": "T"
        },
        "Teruel": {
          "code": "TE"
        },
        "Toledo": {
          "code": "TO"
        },
        "Valencia": {
          "code": "V"
        },
        "Valladolid": {
          "code": "VA"
        },
        "Zamora": {
          "code": "ZA"
        },
        "Zaragoza": {
          "code": "Z"
        }
      },
      "country": "Spain",
      "addr_format": 9,
      "addr_display_format": 9,
      "country_code": "ES",
      "zip_format": "\\d{5}"
    },
    "LK": {
      "country": "Sri Lanka",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "LK",
      "zip_format": "\\d{5}"
    },
    "VC": {
      "country": "St. Vincent",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "VC",
      "zip_format": "VC\\d{4}"
    },
    "SD": {
      "country": "Sudan",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "SD",
      "zip_format": "\\d{5}"
    },
    "SR": {
      "country": "Suriname",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "SR",
      "zip_format": ""
    },
    "SJ": {
      "country": "Svalbard And Jan Mayen",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "SJ",
      "zip_format": "\\d{4}"
    },
    "SE": {
      "labels": {
        "street": "Street and house number",
        "city": "City/town"
      },
      "country": "Sweden",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "SE",
      "zip_format": "\\d{3} ?\\d{2}"
    },
    "CH": {
      "labels": {
        "street": "Street and house number",
        "unit": "Additional address (optional)"
      },
      "country": "Switzerland",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "CH",
      "zip_format": "\\d{4}"
    },
    "SY": {
      "country": "Syria",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "SY",
      "zip_format": ""
    },
    "TW": {
      "country": "Taiwan",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "TW",
      "zip_format": "\\d{3}(?:\\d{2,3})?"
    },
    "TJ": {
      "country": "Tajikistan",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "TJ",
      "zip_format": "\\d{6}"
    },
    "TZ": {
      "country": "Tanzania, United Republic Of",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "TZ",
      "zip_format": "\\d{4,5}"
    },
    "TH": {
      "labels": {
        "state": "Province"
      },
      "states": {
        "Amnat Charoen": {
          "code": "TH-37"
        },
        "Ang Thong": {
          "code": "TH-15"
        },
        "Bangkok": {
          "code": "TH-10"
        },
        "Bueng Kan": {
          "code": "TH-38"
        },
        "Buriram": {
          "label": "Buri Ram",
          "code": "TH-31"
        },
        "Chachoengsao": {
          "code": "TH-24"
        },
        "Chai Nat": {
          "code": "TH-18"
        },
        "Chaiyaphum": {
          "code": "TH-36"
        },
        "Chanthaburi": {
          "code": "TH-22"
        },
        "Chiang Mai": {
          "code": "TH-50"
        },
        "Chiang Rai": {
          "code": "TH-57"
        },
        "Chon Buri": {
          "code": "TH-20"
        },
        "Chumphon": {
          "code": "TH-86"
        },
        "Kalasin": {
          "code": "TH-46"
        },
        "Kamphaeng Phet": {
          "code": "TH-62"
        },
        "Kanchanaburi": {
          "code": "TH-71"
        },
        "Khon Kaen": {
          "code": "TH-40"
        },
        "Krabi": {
          "code": "TH-81"
        },
        "Lampang": {
          "code": "TH-52"
        },
        "Lamphun": {
          "code": "TH-51"
        },
        "Loei": {
          "code": "TH-42"
        },
        "Lopburi": {
          "code": "TH-16"
        },
        "Mae Hong Son": {
          "code": "TH-58"
        },
        "Maha Sarakham": {
          "code": "TH-44"
        },
        "Mukdahan": {
          "code": "TH-49"
        },
        "Nakhon Nayok": {
          "code": "TH-26"
        },
        "Nakhon Pathom": {
          "code": "TH-73"
        },
        "Nakhon Phanom": {
          "code": "TH-48"
        },
        "Nakhon Ratchasima": {
          "code": "TH-30"
        },
        "Nakhon Sawan": {
          "code": "TH-60"
        },
        "Nakhon Si Thammarat": {
          "code": "TH-80"
        },
        "Nan": {
          "code": "TH-55"
        },
        "Narathiwat": {
          "code": "TH-96"
        },
        "Nong Bua Lam Phu": {
          "code": "TH-39"
        },
        "Nong Khai": {
          "code": "TH-43"
        },
        "Nonthaburi": {
          "code": "TH-12"
        },
        "Pathum Thani": {
          "code": "TH-13"
        },
        "Pattani": {
          "code": "TH-94"
        },
        "Pattaya": {
          "code": "TH-S"
        },
        "Phangnga": {
          "label": "Phang Nga",
          "code": "TH-82"
        },
        "Phatthalung": {
          "code": "TH-93"
        },
        "Phayao": {
          "code": "TH-56"
        },
        "Phetchabun": {
          "code": "TH-67"
        },
        "Phetchaburi": {
          "code": "TH-76"
        },
        "Phichit": {
          "code": "TH-66"
        },
        "Phitsanulok": {
          "code": "TH-65"
        },
        "Phra Nakhon Si Ayutthaya": {
          "code": "TH-14"
        },
        "Phrae": {
          "code": "TH-54"
        },
        "Phuket": {
          "code": "TH-83"
        },
        "Prachin Buri": {
          "code": "TH-25"
        },
        "Prachuap Khiri Khan": {
          "code": "TH-77"
        },
        "Ranong": {
          "code": "TH-85"
        },
        "Ratchaburi": {
          "code": "TH-70"
        },
        "Rayong": {
          "code": "TH-21"
        },
        "Roi Et": {
          "code": "TH-45"
        },
        "Sa Kaeo": {
          "code": "TH-27"
        },
        "Sakon Nakhon": {
          "code": "TH-47"
        },
        "Samut Prakan": {
          "code": "TH-11"
        },
        "Samut Sakhon": {
          "code": "TH-74"
        },
        "Samut Songkhram": {
          "code": "TH-75"
        },
        "Saraburi": {
          "code": "TH-19"
        },
        "Satun": {
          "code": "TH-91"
        },
        "Sisaket": {
          "label": "Si Sa Ket",
          "code": "TH-33"
        },
        "Sing Buri": {
          "code": "TH-17"
        },
        "Songkhla": {
          "code": "TH-90"
        },
        "Sukhothai": {
          "code": "TH-64"
        },
        "Suphan Buri": {
          "label": "Suphanburi",
          "code": "TH-72"
        },
        "Surat Thani": {
          "code": "TH-84"
        },
        "Surin": {
          "code": "TH-32"
        },
        "Tak": {
          "code": "TH-63"
        },
        "Trang": {
          "code": "TH-92"
        },
        "Trat": {
          "code": "TH-23"
        },
        "Ubon Ratchathani": {
          "code": "TH-34"
        },
        "Udon Thani": {
          "code": "TH-41"
        },
        "Uthai Thani": {
          "code": "TH-61"
        },
        "Uttaradit": {
          "code": "TH-53"
        },
        "Yala": {
          "code": "TH-95"
        },
        "Yasothon": {
          "code": "TH-35"
        }
      },
      "country": "Thailand",
      "addr_format": 4,
      "addr_display_format": 4,
      "country_code": "TH",
      "zip_format": "\\d{5}"
    },
    "TL": {
      "country": "Timor Leste",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "TL",
      "zip_format": ""
    },
    "TG": {
      "country": "Togo",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "TG",
      "zip_format": ""
    },
    "TK": {
      "country": "Tokelau",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "TK",
      "zip_format": ""
    },
    "TO": {
      "country": "Tonga",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "TO",
      "zip_format": ""
    },
    "TT": {
      "country": "Trinidad and Tobago",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "TT",
      "zip_format": ""
    },
    "TA": {
      "country": "Tristan da Cunha",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "TA",
      "zip_format": "TDCU 1ZZ"
    },
    "TN": {
      "country": "Tunisia",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "TN",
      "zip_format": "\\d{4}"
    },
    "TR": {
      "country": "Turkey",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "TR",
      "zip_format": "\\d{5}"
    },
    "TM": {
      "country": "Turkmenistan",
      "addr_format": 14,
      "addr_display_format": 14,
      "country_code": "TM",
      "zip_format": "\\d{6}"
    },
    "TC": {
      "country": "Turks and Caicos Islands",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "TC",
      "zip_format": "TKCA 1ZZ"
    },
    "TV": {
      "country": "Tuvalu",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "TV",
      "zip_format": ""
    },
    "UG": {
      "country": "Uganda",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "UG",
      "zip_format": ""
    },
    "UA": {
      "country": "Ukraine",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "UA",
      "zip_format": "\\d{5}"
    },
    "AE": {
      "labels": {
        "state": "Emirate"
      },
      "states": {
        "Abu Dhabi": {
          "code": "AZ"
        },
        "Ajman": {
          "code": "AJ"
        },
        "Dubai": {
          "code": "DU"
        },
        "Fujairah": {
          "code": "FU"
        },
        "Ras al-Khaimah": {
          "code": "RK"
        },
        "Sharjah": {
          "code": "SH"
        },
        "Umm al-Quwain": {
          "code": "UQ"
        }
      },
      "country": "United Arab Emirates",
      "addr_format": 7,
      "addr_display_format": 7,
      "country_code": "AE",
      "zip_format": ""
    },
    "GB": {
      "labels": {
        "zip": "Postcode"
      },
      "country": "United Kingdom",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "GB",
      "zip_format": "GIR ?0AA|(?:(?:AB|AL|B|BA|BB|BD|BF|BH|BL|BN|BR|BS|BT|BX|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(?:\\d[\\dA-Z]? ?\\d[ABD-HJLN-UW-Z]{2}))|BFPO ?\\d{1,4}"
    },
    "US": {
      "labels": {
        "state": "State",
        "zip": "ZIP code"
      },
      "states": {
        "Alabama": {
          "code": "AL"
        },
        "Alaska": {
          "code": "AK"
        },
        "American Samoa": {
          "code": "AS"
        },
        "Arizona": {
          "code": "AZ"
        },
        "Arkansas": {
          "code": "AR"
        },
        "California": {
          "code": "CA"
        },
        "Colorado": {
          "code": "CO"
        },
        "Connecticut": {
          "code": "CT"
        },
        "Delaware": {
          "code": "DE"
        },
        "Florida": {
          "code": "FL"
        },
        "Georgia": {
          "code": "GA"
        },
        "Guam": {
          "code": "GU"
        },
        "Hawaii": {
          "code": "HI"
        },
        "Idaho": {
          "code": "ID"
        },
        "Illinois": {
          "code": "IL"
        },
        "Indiana": {
          "code": "IN"
        },
        "Iowa": {
          "code": "IA"
        },
        "Kansas": {
          "code": "KS"
        },
        "Kentucky": {
          "code": "KY"
        },
        "Louisiana": {
          "code": "LA"
        },
        "Maine": {
          "code": "ME"
        },
        "Marshall Islands": {
          "code": "MH"
        },
        "Maryland": {
          "code": "MD"
        },
        "Massachusetts": {
          "code": "MA"
        },
        "Michigan": {
          "code": "MI"
        },
        "Federated States of Micronesia": {
          "label": "Micronesia",
          "code": "FM"
        },
        "Minnesota": {
          "code": "MN"
        },
        "Mississippi": {
          "code": "MS"
        },
        "Missouri": {
          "code": "MO"
        },
        "Montana": {
          "code": "MT"
        },
        "Nebraska": {
          "code": "NE"
        },
        "Nevada": {
          "code": "NV"
        },
        "New Hampshire": {
          "code": "NH"
        },
        "New Jersey": {
          "code": "NJ"
        },
        "New Mexico": {
          "code": "NM"
        },
        "New York": {
          "code": "NY"
        },
        "North Carolina": {
          "code": "NC"
        },
        "North Dakota": {
          "code": "ND"
        },
        "Northern Mariana Islands": {
          "code": "MP"
        },
        "Ohio": {
          "code": "OH"
        },
        "Oklahoma": {
          "code": "OK"
        },
        "Oregon": {
          "code": "OR"
        },
        "Palau": {
          "code": "PW"
        },
        "Pennsylvania": {
          "code": "PA"
        },
        "Puerto Rico": {
          "code": "PR"
        },
        "Rhode Island": {
          "code": "RI"
        },
        "South Carolina": {
          "code": "SC"
        },
        "South Dakota": {
          "code": "SD"
        },
        "Tennessee": {
          "code": "TN"
        },
        "Texas": {
          "code": "TX"
        },
        "Virgin Islands": {
          "label": "U.S. Virgin Islands",
          "code": "VI"
        },
        "Utah": {
          "code": "UT"
        },
        "Vermont": {
          "code": "VT"
        },
        "Virginia": {
          "code": "VA"
        },
        "Washington": {
          "code": "WA"
        },
        "District of Columbia": {
          "label": "Washington DC",
          "code": "DC"
        },
        "West Virginia": {
          "code": "WV"
        },
        "Wisconsin": {
          "code": "WI"
        },
        "Wyoming": {
          "code": "WY"
        },
        "Armed Forces Americas": {
          "code": "AA"
        },
        "Armed Forces Europe": {
          "code": "AE"
        },
        "Armed Forces Pacific": {
          "code": "AP"
        }
      },
      "country": "United States",
      "addr_format": 4,
      "addr_display_format": 16,
      "country_code": "US",
      "zip_format": "(\\d{5})(?:[ \\-](\\d{4}))?"
    },
    "UM": {
      "country": "United States Minor Outlying Islands",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "UM",
      "zip_format": "96898"
    },
    "UY": {
      "country": "Uruguay",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "UY",
      "zip_format": "\\d{5}"
    },
    "UZ": {
      "country": "Uzbekistan",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "UZ",
      "zip_format": "\\d{6}"
    },
    "VU": {
      "country": "Vanuatu",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "VU",
      "zip_format": ""
    },
    "VE": {
      "country": "Venezuela",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "VE",
      "zip_format": "\\d{4}"
    },
    "VN": {
      "country": "Vietnam",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "VN",
      "zip_format": "\\d{5}\\d?"
    },
    "VG": {
      "country": "Virgin Islands, British",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "VG",
      "zip_format": "VG\\d{4}"
    },
    "WF": {
      "country": "Wallis And Futuna",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "WF",
      "zip_format": "986\\d{2}"
    },
    "EH": {
      "country": "Western Sahara",
      "addr_format": 0,
      "addr_display_format": 0,
      "country_code": "EH",
      "zip_format": "\\d{5}"
    },
    "YE": {
      "country": "Yemen",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "YE",
      "zip_format": ""
    },
    "ZM": {
      "country": "Zambia",
      "addr_format": 1,
      "addr_display_format": 1,
      "country_code": "ZM",
      "zip_format": "\\d{5}"
    },
    "ZW": {
      "country": "Zimbabwe",
      "addr_format": 2,
      "addr_display_format": 2,
      "country_code": "ZW",
      "zip_format": ""
    }
  }
}