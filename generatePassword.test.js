const generatePassword = require('./generatePassword');

describe('generatePassword', () => {
  it('should generate a password with the specified length and strength', () => {
    const length = 10;
    const strength = 'medium';
    const password = generatePassword(length, strength);
    expect(password.length).toBe(length);
    expect(password).toMatch(/[a-z]/);
    expect(password).toMatch(/[A-Z]/);
    expect(password).toMatch(/[0-9]/);
  });

  it('should throw an error if the length is invalid', () => {
    const length = 3;
    const strength = 'medium';
    expect(() => generatePassword(length, strength)).toThrowError('Invalid length');
  });

  it('should throw an error if the strength is invalid', () => {
    const length = 10;
    const strength = 'invalid';
    expect(() => generatePassword(length, strength)).toThrowError('Invalid strength level');
  });

  it('should generate a low-strength password with only lowercase letters', () => {
    const length = 10;
    const strength = 'low';
    const password = generatePassword(length, strength);
    expect(password.length).toBe(length);
    expect(password).toMatch(/[a-z]/);
    expect(password).not.toMatch(/[A-Z]/);
    expect(password).not.toMatch(/[0-9]/);
    expect(password).not.toMatch(/[!@#$%^&*()\-\_=+\[\]{};:,.<>?]/);
  });

  it('should generate a medium-strength password with lowercase, uppercase, and numeric characters', () => {
    const length = 10;
    const strength = 'medium';
    const password = generatePassword(length, strength);
    expect(password.length).toBe(length);
    expect(password).toMatch(/[a-z]/);
    expect(password).toMatch(/[A-Z]/);
    expect(password).toMatch(/[0-9]/);
    expect(password).not.toMatch(/[!@#$%^&*()\-\_=+\[\]{};:,.<>?]/);
  });

  it('should generate a high-strength password with lowercase, uppercase, numeric, and special characters', () => {
    const length = 10;
    const strength = 'high';
    const password = generatePassword(length, strength);
    expect(password.length).toBe(length);
    expect(password).toMatch(/[a-z]/);
    expect(password).toMatch(/[A-Z]/);
    expect(password).toMatch(/[0-9]/);
    expect(password).toMatch(/[!@#$%^&*()\-\_=+\[\]{};:,.<>?]/);
  });
});
