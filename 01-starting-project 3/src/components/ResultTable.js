import '../css/ResultTable.css';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
})

const ResultTable = (props) => {
    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(data => (
                    <tr key={data.year}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.savingsEndOfYear)}</td>
                        <td>{formatter.format(data.yearlyInterest)}</td>
                        <td>{formatter.format(data.savingsEndOfYear
                            - props.initialInvestment
                            - data.yearlyContribution
                            * data.year)}
                        </td>
                        <td>{formatter.format(data.yearlyContribution)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default ResultTable;