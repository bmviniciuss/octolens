import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
`

interface BlueGradientHorizontalProps {
  height?: string
}

export const BlueGradientHorizontal = styled.div<BlueGradientHorizontalProps>`
  background: ${({
    theme: {
      colors: { blue }
    }
  }) =>
    `linear-gradient(90deg, ${blue[51]} 0%, ${blue[41]} 50%, ${blue[21]} 100%);`};

  height: ${({ height }) => height || '5px'};
`

export const FullHeightWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
