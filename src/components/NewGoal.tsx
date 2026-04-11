import { type FormEvent } from 'react'

export default function NewGoal() {

function handleSubmit(event: FormEvent) {
    event.preventDefault()
}

return <form onSubmit={handleSubmit}>
    {/* Goal Text */}
    <p>
        <label htmlFor='goal'>Your Goal</label>
        <input id='goal' type='text' />
    </p>
    {/* Goal Summary */}
    <p>
        <label htmlFor='summary'>Short Summary</label>
        <input id='summary' type='text' />
    </p>
    {/*  Form Manipulation button */}
    <button>Add Goal</button>

</form>
}