import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import AppRouter from '../src/AppRouter.jsx'

test.each(['/', '/kayit', '/iletisim', '/tarihce', '/program-komitesi'])('renders %s', (path) => {
  window.location.hash = '#' + path
  const { container } = render(<AppRouter />)
  expect(container.querySelector('h1, h2')?.textContent).toBeTruthy()
})
