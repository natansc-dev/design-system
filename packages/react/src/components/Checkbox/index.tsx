import { CheckboxContainer, CheckboxIndicator } from './styles'
import { ComponentProps } from 'react'
import { Check } from 'phosphor-react'

// eslint-disable-next-line prettier/prettier
export interface CheckboxProps extends ComponentProps<typeof CheckboxContainer> { }

export function Checkbox() {
  return (
    <CheckboxContainer>
      <CheckboxIndicator>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
