import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  margin: 0 1rem;
  padding: 0.8rem 0 2rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 3.75rem;
  justify-content: space-evenly;
  margin-bottom: 0.8rem;
  position: relative;
  width: 3.75rem;

  & > * {
    cursor: pointer;
  }

  & span {
    text-align: center;
  }
`
