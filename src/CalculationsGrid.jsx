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
                        <tr>
                            <td id={`§{row.year}1`}>{row.year}</td>
                            <td id={`§{row.year}2`}>{formatter.format(row.valueEndOfYear)}</td>
                            <td id={`§{row.year}3`}>{formatter.format(row.interest)}</td>
                            <td id={`§{row.year}4`}>{formatter.format(row.annualInvestment)}</td>
                            <td id={`§{row.year}5`}>{formatter.format(row.valueEndOfYear)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}