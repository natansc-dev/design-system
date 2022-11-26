import { styled } from '../styles'
import { ComponentProps } from 'react'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.6,
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

// eslint-disable-next-line prettier/prettier
export interface TextAreaProps extends ComponentProps<typeof TextArea> { }

TextArea.displayName = 'TextArea'
