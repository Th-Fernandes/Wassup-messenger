export function LogOutMessage({ username }) {
  return (
    <li
      style={{ marginBottom: '1.2rem', textAlign: 'center', fontSize: '1.2rem' }}
    >
      {username} saiu.
    </li>
  )
}