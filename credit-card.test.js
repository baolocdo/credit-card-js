const bankAccount = require('./credit-card');

test('should return the right account name', () => {
  const account = bankAccount('Jane', 'Doe');
  expect(account.getAccountName()).toBe('Jane Doe');
});

test('should initialize with 0 balance', () => {
  const account = bankAccount('Jane', 'Doe');
  expect(account.getBalance()).toBe(0);
});

test('should increment the balance by 1000', () => {
  const account = bankAccount('Jane', 'Doe');
  account.addCredits(1000);
  expect(account.getBalance()).toBe(1000);
});

test('should deduct the balance by 100', () => {
  const account = bankAccount('Jane', 'Doe');
  account.addCredits(1000);
  expect(account.getBalance()).toBe(1000);
  account.deduct(100);
  expect(account.getBalance()).toBe(900);
});

test('should deduct the balance by 990', () => {
  const account = bankAccount('Jane', 'Doe');
  account.addCredits(1000);
  expect(account.getBalance()).toBe(1000);
  account.deduct(990);
  expect(account.getBalance()).toBe(10);
});