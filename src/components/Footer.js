import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../images/logo-dark.svg'

function Footer(props) {
  return (
    <>
      <footer>
        <div className="container">
          <ul className="footer-menu">
            <li>
              顧客服務
              <ul>
                <li>
                  <Link to="#">項目1</Link>
                </li>
                <li>
                  <Link to="#">項目2</Link>
                </li>
                <li>
                  <Link to="#">項目3</Link>
                </li>
                <li>
                  <Link to="#">項目4</Link>
                </li>
                <li>
                  <Link to="#">項目5</Link>
                </li>
              </ul>
            </li>
            <li>
              保姆服務
              <ul>
                <li>
                  <Link to="#">項目1</Link>
                </li>
                <li>
                  <Link to="#">項目2</Link>
                </li>
                <li>
                  <Link to="#">項目3</Link>
                </li>
                <li>
                  <Link to="#">項目4</Link>
                </li>
                <li>
                  <Link to="#">項目5</Link>
                </li>
              </ul>
            </li>
            <li>
              所有商品
              <ul>
                <li>
                  <Link to="#">項目1</Link>
                </li>
                <li>
                  <Link to="#">項目2</Link>
                </li>
                <li>
                  <Link to="#">項目3</Link>
                </li>
                <li>
                  <Link to="#">項目4</Link>
                </li>
                <li>
                  <Link to="#">項目5</Link>
                </li>
              </ul>
            </li>
            <li>
              最新消息
              <ul>
                <li>
                  <Link to="#">項目1</Link>
                </li>
                <li>
                  <Link to="#">項目2</Link>
                </li>
                <li>
                  <Link to="#">項目3</Link>
                </li>
                <li>
                  <Link to="#">項目4</Link>
                </li>
                <li>
                  <Link to="#">項目5</Link>
                </li>
              </ul>
            </li>
            <li>
              關於我們
              <ul>
                <li>
                  <Link to="#">項目1</Link>
                </li>
                <li>
                  <Link to="#">項目2</Link>
                </li>
                <li>
                  <Link to="#">項目3</Link>
                </li>
                <li>
                  <Link to="#">項目4</Link>
                </li>
                <li>
                  <Link to="#">項目5</Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="p-3 text-center text-md-left">
            <Logo className="App-logo" alt="logo" />
          </div>
          <hr className="bg-light" />
          <div className="text-center text-md-right copy-right">
            Copyrigh &copy; 2020 by HugDog
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
