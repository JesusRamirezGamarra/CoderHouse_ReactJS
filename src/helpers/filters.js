export const sortProductsMin = (products, property) => {
  products = products.sort((a, b) => {
    if (a[property] < b[property]) return -1;

    if (a[property] > b[property]) return 1;

    return 0;
  });
  return products;
};

export const sortProductsMax = (products, property) => {
  products = products.sort((a, b) => {
    if (a[property] < b[property]) {
      return 1;
    }
    if (a[property] > b[property]) {
      return -1;
    }
    return 0;
  });
  return products;
};

export const sortProduct = (products, property, MaxMin) => {
  if (property) {
    if (MaxMin === "max") return sortProductsMax(products, property);
    if (MaxMin === "min") return sortProductsMin(products, property);
  } else {
    return products;
  }
};
