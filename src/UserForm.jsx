export default function UserForm({ handleValuesUpdate }) {

    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial investment</label>
                    <input id="initInvest" type="number" onChange={handleValuesUpdate} required />
                </div>
                <div>
                    <label>Annual investment</label>
                    <input id="annualInvest" type="number" onChange={handleValuesUpdate} required />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label>Expected return</label>
                    <input id="expectedReturn" type="number" onChange={handleValuesUpdate} required />
                </div>
                <div>
                    <label>Duration</label>
                    <input id="duration" type="number" onChange={handleValuesUpdate} required />
                </div>
            </div>
        </div>
    )
}