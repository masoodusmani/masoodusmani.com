import React from 'react'
import { css } from '@emotion/core'

export default () => (
  <div
    css={css`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    `}
  >
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
    </div>
  </div>
)
