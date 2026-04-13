import { useRef, type FormEvent } from 'react'

export default function NewGoal() {

const goal = useRef<HTMLInputElement>(null)
const summary = useRef<HTMLInputElement>(null)

function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const enteredGoal = goal.current!.value
    const enteredSummary = goal.current!.value

}

return <form onSubmit={handleSubmit}>
    {/* Goal Text */}
    <p>
        <label htmlFor='goal'>Your Goal</label>
        <input id='goal' type='text' ref={goal} />
    </p>
    {/* Goal Summary */}
    <p>
        <label htmlFor='summary'>Short Summary</label>
        <input id='summary' type='text' ref={summary}/>
    </p>
    {/*  Form Manipulation button */}
    <button>Add Goal</button>

</form>
}