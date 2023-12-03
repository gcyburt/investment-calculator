import { calculateInvestmentResults, formatter } from "./util/investment"

export default function CalculationsGrid({ userValues }) {
    const { initInvest, annualInvest, expectedReturn, duration } = userValues
    const results = calculateInvestmentResults({ initialInvestment: initInvest, annualInvestment: annualInvest, expectedReturn: expectedReturn, duration: duration })
    console.log(results)
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment value</th>
                    <th>Interest (year)</th>
                    <th>Total interest</th>
                    <th>Invested capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((row, index) => {
                    return (
                        <tr key={index}>
                            <td key={`${row.year}year`}>{row.year}</td>
                            <td key={`${row.year}value`}>{formatter.format(row.valueEndOfYear)}</td>
                            <td key={`${row.year}interest`}>{formatter.format(row.interest)}</td>
                            <td key={`${row.year}total`}>{formatter.format(row.annualInvestment)}</td>
                            <td key={`${row.year}invested`}>{formatter.format(row.valueEndOfYear)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}