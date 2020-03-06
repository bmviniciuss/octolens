import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
`

interface BlueGradientHorizontalProps {
  height?: string
}

export const FullHeightWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
