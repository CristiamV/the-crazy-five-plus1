/**
 * ARCHIVO QUE TIENE LOS PROTOTIPOS DE LOS REQUESTS A LOS MICROSERVICIOS
 */

export class Requests {

  public static consultCountriesRequest = {
    "infoMsg": {
      "guId": "7193a7cc-fdb8-49ca-9b5b-bc1e7f5b9f28",
      "channel": "0006",
      "subchannel": "7",
      "applId": "MME",
      "personId": 0,
      "userId": "13081308",
      "token": ""
    },
    "codeCountry": ""
  };
  public static consultCurrenciesRequest = {
    "infoMsg": {
      "guId": "",
      "channel": "0006",
      "subchannel": "7",
      "applId": "OLB",
      "personId": 846886,
      "userId": "501878200011493881",
      "token": "abcd"
    }
  }
  public static getBeneficiariesRequest = {
    "infoMsg": {
      "guId": "",
      "channel": "0006",
      "subchannel": "7",
      "applId": "OLB",
      "personId": 0,
      "userId": "0",
      "token": "abcd"
    },
    "portalId": 0,
    "productCode": "remesas"
  }
  public static addBeneficiariesRequest = {
    "infoMsg": {
      "guId": "",
      "channel": "0006",
      "subchannel": "7",
      "applId": "OLB",
      "personId": 846886,
      "userId": "571040",
      "token": "abcd"
    },
    "portalId": 0,
    "productCode": "remesas",
    "beneficiaryNumber": 0,
    "accountNumber": 0,
    "alias": ""
  }
  public static deleteBeneficiaryRequest = {
    "infoMsg": {
      "guId": "",
      "channel": "0006",
      "subchannel": "7",
      "applId": "OLB",
      "personId": 846886,
      "userId": "571040",
      "token": "abcd"
    },
    "portalId": 0,
    "beneficiaryId": 0
  }
  public static apiPaymentRequest = {
    "merchant_identify": {
      "integratorId": 31,
      "merchantId": 0,
      "terminalId": "abcde"
    },
    "client_identify": {
      "ipaddress": "10.0.0.1",
      "browser_agent": "Chrome 18.1.3"
    },
    "transaction": {
      "trx_type": "compra",
      "payment_method": "tdc",
      "card_number": 0,
      "customer_id": "21615291",
      "invoice_number": 0,
      "account_type": "",
      "twofactor_auth": "",
      "expiration_date": "",
      "cvv": "",
      "currency": "ves",
      "amount": ""
    }
  }
  public static applyRemittanceRequest = {
    "infoMsg": {
      "guId": "28ecdbc1-b5ec-4a9f-af95-6e00552d5c96",
      "channel": "0006",
      "subchannel": "7",
      "applId": "remesas",
      "personId": "",
      "userId": "B571040",
      "token": "abcde",
      "action": ""
    },
    "remittanceApply": {
      "portalUserId": 0,
      "personNumber": 0,
      "currencyCode": "VES",
      "accountNumber": 0,
      "amountUSD": "",
      "amountBSS": "",
      "serviceFee": "",
      "fixedServiceFee": "",
      "referenceCode": "",
      "cardNumber": ""
    }
  }
  public static getCardsRequest = {
    "infoMsg": {
      "guId": "28ecdbc1-b5ec-4a9f-af95-6e00552d5c96",
      "channel": "0006",
      "subchannel": "7",
      "applId": "remesas",
      "personId": "",
      "userId": "B571040",
      "token": "abcde",
      "action": ""
    },
    "remittanceConsultPaymentInstrument": {
      "productType": "remesas",
      "payerPersonNumber": 0,
      "portalUserId": 0,
      "instrumentStatus": 98,
      "cardNumber": ""
    }
  }
  public static validateCardRequest = {
    "infoMsg": {
      "guId": "28ecdbc1-b5ec-4a9f-af95-6e00552d5c96",
      "channel": "0006",
      "subchannel": "7",
      "applId": "remesas",
      "personId": "",
      "userId": "B571040",
      "token": "abcde",
      "action": ""
    },
    "validationData": {
      "productType": "remesas",
      "authenticationCode": '',
      "cardNumber": ''
    }
  }
  public static deleteCardRequest = {
    "infoMsg": {
      "guId": "28ecdbc1-b5ec-4a9f-af95-6e00552d5c96",
      "channel": "0006",
      "subchannel": "7",
      "applId": "remesas",
      "personId": "",
      "userId": "B571040",
      "token": "abcde",
      "action": ""
    },
    "remittanceDeletePaymentInstrument": {
      "productType": "remesas",
      "payerPersonNumber": 0,
      "portalUserId": 0,
      "cardNumber": ''
    }
  }
  public static cardsRegisterRequest = {
    "infoMsg": {
      "guId": "28ecdbc1-b5ec-4a9f-af95-6e00552d5c96",
      "channel": "0006",
      "subchannel": "7",
      "applId": "remesas",
      "personId": "",
      "userId": "B571040",
      "token": "abcde",
      "action": ""
    },
    "remittanceNewPaymentInstrument": {
      "productType": "remesas",
      "payerPersonNumber": 0,
      "portalUserId": 0,
      "cardNumber": "",
      "referenceCode": "",
      "amountUSD": 0,
      "amountBSS": ""
    }
  }
  public static checkBeneficiaryRequest = {
    "infoMsg": {
      "guId": "{{$guid}}",
      "channel": "0006",
      "subchannel": "7",
      "applId": "OLB",
      "personId": 7956054,
      "userId": "501878200046242949",
      "token": "abcd"
    },
    "beneficiaryData": [
      {
        "accountNumber": "",
        "idType": "",
        "idNumber": ""
      }
    ]
  }
  public static beneficiaryBasicDataRequest = {
    "infoMsg": {
      "guId": "{{$guid}}",
      "channel": "0006",
      "subchannel": "7",
      "applId": "OLB",
      "personId": 0,
      "userId": "313105",
      "token": "abcd"
    },
    "countryCode": "VEN",
    "idType": "",
    "idNumber": "",
    "personIdBeneficiary": 0
  }
  public static calculatePaymentRequest = {
    "infoMsg": {
      "guId": "7193a7cc-fdb8-49ca-9b5b-bc1e7f5b9f28",
      "channel": "0006",
      "subchannel": "7",
      "applId": "MME",
      "personId": 0,
      "userId": "82061234",
      "token": "prueba"
    },
    "dolarAmount": 0,
    "fixedCommision": 0,
    "variableCommission": 0,
    "conversionRate": 0
  }
  public static beneficiaryRemittanceNotificationRequest = {
    "infoMsg": {
      "guId": "28ecdbc1-b5ec-4a9f-af95-6e00552d5c96",
      "channel": "0006",
      "subchannel": "7",
      "applId": "remesas",
      "personId": "",
      "userId": "B571040",
      "token": "token-jwt",
      "action": ""
    },
    "remittanceNotification": {
      "portalUserId": 0,
      "beneficiaryNumber": 0,
      "accountNumber": '',
      "exchangeRate": 0.0,
      "amountSent": '',
      "serviceFee": '',
      "totalAmount": '',
      "referenceCode": "",
      "paymentOrderNumber": "",
      "requestFileUpdate": 0
    }
  }
}