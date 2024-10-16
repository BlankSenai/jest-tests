import { matchers } from "../src/functions/matchers.js"

describe('Testando funções com os matchers', () => {
    it ('ToBe', () => {
        const result = matchers.reverseString('testes')

        expect(result).toBe('setset')
    })
    
    it ('ToEqual', () => {
        const result = matchers.sum(2, 3)

        expect(result).toEqual(5)
    })

    it ('NotToBe', () => {
        const result = matchers.sum(3, 2)

        expect(result).not.toBe(4)
    })

    it ('ToBeNull', () => {
        const result = matchers.getNull()

        expect(result).toBeNull()
    })

    it ('ToBeDefined', () => {
        const result = matchers.isDefined('sla')

        expect(result).toBeDefined()
    })

    it ('ToBeUndefined', () => {
        const result = matchers.isDefined()

        expect(result).toBeUndefined()
    })

    it ('ToBeTruthy', () => {
        const result = matchers.isEven(2)

        expect(result).toBeTruthy()
    })

    it ('ToBeFalsy', () => {
        const result = matchers.isEven(3)

        expect(result).toBeFalsy()
    })

    it ('ToBeGreaterThan', () => {
        const result = matchers.calculateArea(45, 23)

        expect(result).toBeGreaterThan(45)
    })

    it ('ToBeGreaterThanOrEqual', () => {
        const result = matchers.calculateArea(45, 23)

        expect(result).toBeGreaterThanOrEqual(45)
        expect(result).toBeGreaterThanOrEqual(1035)
    })

    it ('ToBeLessThan', () => {
        const result = matchers.calculateArea(20, 14)

        expect(result).toBeLessThan(300)
    })

    it ('ToBeLessThanOrEqual', () => {
        const result = matchers.calculateArea(20, 14)

        expect(result).toBeLessThanOrEqual(300)
        expect(result).toBeLessThanOrEqual(280)
    })

    it ('ToBeCloseTo', () => {
        const result = matchers.getRandomNumber()

        expect(result).toBeCloseTo(2, -1)
    })

    it ('ToMatch', () => {
        const result = matchers.getText()

        expect(result).toMatch('testado')
    })

    it ('ToContain', () => {
        const result = matchers.getArrayNumbers()

        expect(result).toContain(54)
    })

    it ('ToThrow', () => {
        expect(() => {
            matchers.getFlavor('açaí')
        }).toThrow()
    })
    
})