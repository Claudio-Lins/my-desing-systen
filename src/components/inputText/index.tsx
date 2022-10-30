import {useState, ChangeEvent} from 'react'

interface InputTextProps {
  onChange: (value: string) => void
  type: 'text' | 'password' | 'email' | 'number'
}

export function InputText({ type='text', onChange }: InputTextProps) {
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className="md-textbox mt-10">
      <input
        className={` ${value ? 'has-value' : ''}`}
        type={type}
        id="textbox"
        onChange={handleChange}
      />
      <label htmlFor='textbox'>
        Username
      </label>
    </div>
  )
}
