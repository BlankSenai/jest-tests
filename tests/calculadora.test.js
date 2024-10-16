import { calculator } from "../src/functions/calculadora.js"

describe('Testando a calculadora', () => {
  describe("Função Soma", () => {
    it("Somar números positivos", () => {
      const result = calculator.sum(5, 5)
  
      expect(result).toEqual(10)
    })
  
    it("Somar números negativos", () => {
      const result = calculator.sum(-5, -5)
  
      expect(result).toEqual(-10)
    })
  
    it("Somar 0", () => {
      const result = calculator.sum(0, 0)
  
      expect(result).toEqual(0)
    })
  })
  
  describe("Função Subtração", () => {
    it("Subtrair números positivos", () => {
      const result = calculator.sub(10, 5)
  
      expect(result).toEqual(5)
    })
  
    it("Subtrair números negativos", () => {
      const result = calculator.sub(-10, -5)
  
      expect(result).toEqual(-5)
    })
  
    it("Subtrair 0", () => {
      const result = calculator.sub(0, 0)
  
      expect(result).toEqual(0)
    })
  })
  
  describe("Função Multiplicação", () => {
    it("Multiplicar números inteiros", () => {
      const result = calculator.mul(3, 5)
  
      expect(result).toEqual(15)
    })
  
    it("Multiplicar números negativos", () => {
      const result = calculator.mul(-3, -5)
  
      expect(result).toEqual(15)
    })
  
    it("Multiplicar números negativos e positivos", () => {
      const result = calculator.mul(3, -5)
  
      expect(result).toEqual(-15)
    })
   
    it("Multiplicar 0", () => {
      const result = calculator.mul(10, 0)
  
      expect(result).toEqual(0)
    })
  })
  
  describe("Função Divisão", () => {
    it("Dividir números positivos", () => {
      const result = calculator.div(10, 5)
  
      expect(result).toEqual(2)
    })
  
    it("Dividir números negativos", () => {
      const result = calculator.div(-10, -5)
  
      expect(result).toEqual(2)
    })
  
    it("Dividir números negativos e positivos", () => {
      const result = calculator.div(-10, 5)
  
      expect(result).toEqual(-2)
    })
  
    it("Dividir número quebrado", () => {
      const result = calculator.div(10, 6)
  
      expect(result.toString().split('.')[1].length).toBeGreaterThan(1)
    })
  
    it("Dividir 0", () => {
      const result1 = calculator.div(0, 3)
  
      expect(result1).toEqual(0)
  
      const result2 = calculator.div(3, 0)
  
      expect(result2).toEqual(Infinity)
    })
  })
})