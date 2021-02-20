import { Link } from "react-router-dom"
import styled from "styled-components"
import Icon from "components/Icon"

const NavWrapper = styled.nav`
  /* border: 1px solid blue; */
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      > a {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">
            标签
            <Icon name="tag" />
          </Link>
        </li>
        <li>
          <Link to="/money">
            记账
            <Icon name="money" />
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            统计
            <Icon name="statistic" />
          </Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav
