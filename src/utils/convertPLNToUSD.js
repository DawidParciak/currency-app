export const convertPLNToUSD = (PLN) => {

  const PLNtoUSD = PLN / 3.5;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  if (typeof PLN === 'string') {
    return NaN;
  };

  console.log(PLN)

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}