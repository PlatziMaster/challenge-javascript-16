const { baseConverter } = require ('../index');

describe('baseConverter incorrect', () => {

  it('should be null', () => {
    expect(baseConverter(10, -1)).toBe(null);
    expect(baseConverter(10, 0)).toBe(null);
    expect(baseConverter(10, 1)).toBe(null);
    expect(baseConverter(10, 45)).toBe(null);
    expect(baseConverter(10, 100)).toBe(null);
    expect(baseConverter(10, 37)).toBe(null);
    expect(baseConverter(10, 2)).toBe('1010');
    expect(baseConverter(10, 36)).toBe('A');
  });

});

describe('baseConverter in binary', () => {

  it('should be 1010', () => {
    expect(baseConverter(10, 2)).toBe('1010');
  });

  it('should be 1001', () => {
    expect(baseConverter(9, 2)).toBe('1001');
  });

  it('should be 1100100', () => {
    expect(baseConverter(100, 2)).toBe('1100100');
  });

});

describe('baseConverter in octal', () => {

  it('should be 12', () => {
    expect(baseConverter(10, 8)).toBe('12');
  });

  it('should be 11', () => {
    expect(baseConverter(9, 8)).toBe('11');
  });

  it('should be 144', () => {
    expect(baseConverter(100, 8)).toBe('144');
  });

});

describe('baseConverter in hexa', () => {

  it('should be A', () => {
    expect(baseConverter(10, 16)).toBe('A');
  });

  it('should be 9', () => {
    expect(baseConverter(9, 16)).toBe('9');
  });

  it('should be 64', () => {
    expect(baseConverter(100, 16)).toBe('64');
  });

  it('should be 271C', () => {
    expect(baseConverter(10012, 16)).toBe('271C');
  });

  it('should be Z', () => {
    expect(baseConverter(35, 36)).toBe('Z');
  })

});
