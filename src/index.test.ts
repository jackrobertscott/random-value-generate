import {
  randomBool,
  randomElement,
  randomFloat,
  randomFloatArray,
  randomInteger,
  randomIntegerArray,
  randomShuffleArray,
  randomString,
} from "."

describe("Random Functions Tests", () => {
  describe("randomInteger", () => {
    it("should return an integer within a specified range", () => {
      const result = randomInteger(1, 10)
      expect(result).toBeGreaterThanOrEqual(1)
      expect(result).toBeLessThanOrEqual(10)
      expect(Number.isInteger(result)).toBeTruthy()
    })
  })

  describe("randomFloat", () => {
    it("should return a float within a specified range", () => {
      const result = randomFloat(1, 2)
      expect(result).toBeGreaterThanOrEqual(1)
      expect(result).toBeLessThan(2)
    })
  })

  describe("randomBool", () => {
    it("should return a boolean", () => {
      const result = randomBool()
      expect(typeof result).toBe("boolean")
    })
  })

  describe("randomElement", () => {
    it("should return a random element from the array", () => {
      const array = [1, 2, 3, 4, 5]
      const result = randomElement(array)
      expect(array).toContain(result)
    })

    it("should return null for an empty array", () => {
      expect(randomElement([])).toBeNull()
    })
  })

  describe("randomString", () => {
    it("should return a string of specified length", () => {
      const length = 5
      const result = randomString(length)
      expect(result).toHaveLength(length)
    })
  })

  describe("randomIntegerArray", () => {
    it("should return an array of integers of specified length", () => {
      const length = 5
      const result = randomIntegerArray(length, 1, 10)
      expect(result).toHaveLength(length)
      result.forEach((value) => {
        expect(value).toBeGreaterThanOrEqual(1)
        expect(value).toBeLessThanOrEqual(10)
        expect(Number.isInteger(value)).toBeTruthy()
      })
    })
  })

  describe("randomFloatArray", () => {
    it("should return an array of floats of specified length", () => {
      const length = 5
      const result = randomFloatArray(length, 1, 2)
      expect(result).toHaveLength(length)
      result.forEach((value) => {
        expect(value).toBeGreaterThanOrEqual(1)
        expect(value).toBeLessThan(2)
      })
    })
  })

  describe("randomShuffleArray", () => {
    it("should return a shuffled array", () => {
      const array = [1, 2, 3, 4, 5]
      const result = randomShuffleArray(array)
      expect(result).toHaveLength(array.length)
    })
  })
})
