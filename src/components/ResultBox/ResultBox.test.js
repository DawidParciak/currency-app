import ResultBox from './ResultBox';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';

const testCasesPLNtoUSD = [
  { amount: '100.00', result: '$28.57' },
  { amount: '50.00', result: '$14.29' },
  { amount: '2.00', result: '$0.57' },
  { amount: '784.00', result: '$224.00' },
];

const testCasesUSDtoPLN = [
  { amount: '100.00', result: 'PLN 350.00' },
  { amount: '50.00', result: 'PLN 175.00' },
  { amount: '2.00', result: 'PLN 7.00' },
  { amount: '784.00', result: 'PLN 2,744.00' },
];

const testCasesPLNtoPLN = [
  { amount: '100.00', result: 'PLN 100.00' },
  { amount: '50.00', result: 'PLN 50.00' },
  { amount: '2.00', result: 'PLN 2.00' },
  { amount: '784.00', result: 'PLN 784.00' },
];

const testCasesUSDtoUSD = [
  { amount: '100.00', result: '$100.00' },
  { amount: '50.00', result: '$50.00' },
  { amount: '2.00', result: '$2.00' },
  { amount: '784.00', result: '$784.00' },
];

const testCausesNegative = [
  { amount: '-100.00', result: 'Wrong value...' },
  { amount: '-5.00', result: 'Wrong value...' },
  { amount: '-554.00', result: 'Wrong value...' },
]

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
  });
  for(const testObj of testCasesPLNtoUSD){
    it('should render proper info about conversion when PLN -> USD', () => {
      render(<ResultBox from="PLN" to="USD" amount={parseInt(testObj.amount)} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(`PLN ${testObj.amount} = ${testObj.result}`);
    });
    cleanup();
  };
  for(const testObj of testCasesUSDtoPLN){
    it('should render proper info about conversion when USD -> PLN', () => {
      render(<ResultBox from="USD" to="PLN" amount={parseInt(testObj.amount)} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(`$${testObj.amount} = ${testObj.result}`)
    });
    cleanup();
  };
  for(const testObj of testCasesPLNtoPLN){
    it('should render proper info about conversion when PLN -> PLN', () => {
      render(<ResultBox from="PLN" to="PLN" amount={parseInt(testObj.amount)} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(`PLN ${testObj.amount} = ${testObj.result}`)
    });
    cleanup();
  };
  for(const testObj of testCasesUSDtoUSD){
    it('should render proper info about conversion when USD -> USD', () => {
      render(<ResultBox from="USD" to="USD" amount={parseInt(testObj.amount)} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(`$${testObj.amount} = ${testObj.result}`)
    });
    cleanup();
  };
  for(const testObj of testCausesNegative){
    it('should render proper info about conversion when input is lower than zero', () => {
      render(<ResultBox from="PLN" to="USD" amount={parseInt(testObj.amount)} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(testObj.result)
    });
    cleanup();
  };
});
