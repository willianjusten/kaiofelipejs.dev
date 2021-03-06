import styled, { css } from "styled-components"
import { Modal, Frame } from "@react95/core"

export const LayoutWrapper = styled.section`
  display: flex;
`

export const LayoutMain = styled(Modal)`
  margin: 0 5.75rem 0 20rem;
  width: fill-available;
  top: 0;
`

export const LayoutMainContent = styled(Frame)`
  height: 80vh;
  overflow-y: auto;
  padding: 0;

  ${({ readingMode }) =>
    readingMode &&
    css`
      & *:not(.token):not(code) {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
      }
    `}
`
