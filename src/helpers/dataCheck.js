export const checkName = (names) => {
  const regex = /^[a-z ,.'-]+$/i;
  if (names.trim().length === 0) {
    return "Por favor, ingrese un nombre";
  } else if (!regex.test(names)) {
    return "Nombre y apellido solo acepta letras";
  } else if (names.length >= 25) {
    return "Nombre y apellido debe ser menos a 25 caracteres";
  }
};

export const checkEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.trim().length === 0) {
    return "Por favor, ingrese un email";
  } else if (!regex.test(email)) {
    return "El email debe tener un formato válido";
  } else if (email.length >= 50) {
    return "El email debe tener menos de 50 caracteres";
  }
};

export const checkPhone = (phone) => {
  const regex =
    /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
  if (!phone) {
    return "Por favor, ingrese un teléfono";
  } else if (!regex.test(phone)) {
    return "El teléfono debe ser de Argentina";
  }
};

export const checkCreditCardNumber = (CCNumber, vendor) => {
  const vendors = [
    {
      masterCard:
        /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/,
    },

    { amex: /^3[47][0-9]{13}$/ },
    { visa: /^4[0-9]{12}(?:[0-9]{3})?$/ },
  ];
  let vendorRgx = vendors.filter((CC) => {
    if (CC[vendor]) return CC;
  });
  vendorRgx = { ...Object.values(vendorRgx[0]) };

  if (!vendorRgx[0].test(CCNumber)) {
    return `El número de la tarjeta ${vendor} debe ser válido`;
  }
};

export const checkSecurityCode = (securityNum) => {
  const regex = /^[0-9]{3}$/;
  if (!regex.test(securityNum)) {
    return "Ingrese un código de seguridad válido";
  }
};
