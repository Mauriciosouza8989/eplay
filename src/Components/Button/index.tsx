import { ButtonContainer, ButtonLink } from './style'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  children: string
  to?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export function Button({
  type,
  to,
  children,
  onClick,
  title,
  variant = 'primary'
}: Props): JSX.Element {
  if (type === 'button') {
    return (
      <ButtonContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}
