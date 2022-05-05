import colors from "../../../../common/colors.json"

export function FooterSignMessage({ variant, changeSignType, selectedSignType }) {
  if (variant === 'loginVariant') {
    return (
      <small style={{ fontSize: ' 1.6rem', marginTop: '1.2rem', display: 'block' }}>
        Não possui conta?
        <span
          onClick={() => { selectedSignType == 'login' ? changeSignType('signUp') : changeSignType('login') }}
          style={{
            textDecoration: 'underline',
            margin: '0 0.5rem',
            color: colors.primary['purple'],
            cursor: 'pointer',
          }}
        >
          clique aqui
        </span>
        para criar!
      </small>
    )
  } else if (variant === 'signUpVariant') {
    return (
      <small style={{ fontSize: '1.6rem', marginTop: '1.2rem', display: 'block' }}>
        Já possui conta?
        <span
          onClick={() => { selectedSignType == 'login' ? changeSignType('signUp') : changeSignType('login') }}
          style={{
            textDecoration: 'underline',
            margin: '0 0.5rem',
            color: colors.primary['purple'],
            cursor: 'pointer',
          }}
        >
          clique aqui
        </span>
        para fazer login!
      </small>
    )
  }

}