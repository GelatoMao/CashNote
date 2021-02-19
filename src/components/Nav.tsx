import { Link } from "react-router-dom"
import styled from "styled-components"
require("icons/money.svg")
require("icons/tag.svg")
require("icons/statistic.svg")

const NavWrapper = styled.nav`
  /* border: 1px solid blue; */
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      padding: 4px 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg className="icon">
            <use xlinkHref="#tag" />
          </svg>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#money" />
          </svg>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#statistic" />
          </svg>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav
