import {CircleNotch} from 'phosphor-react'

export function Loading() {
  return (
    <CircleNotch size={96} weight="fill" style={{animation: 'spin 1s linear infinite'}} />
  )
}