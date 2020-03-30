import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../images/logo-dark.svg'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { SctollToTop } from '../utils/service/ServiceFunction'
import $ from 'jquery'

function Footer(props) {
  useEffect(() => {
    $('body').on('click', '#footerMenu .list-item a', function () {
      SctollToTop()
    })
    $('body').on('click', '#footerMenu .header', function () {
      let listItem = $(this).next('.list-item')
      let icon = $(this).find('.icon')
      listItem.toggleClass('expanded')
      icon.toggleClass('active')
    })
    $('#footerMenu .header').find('.icon:first-child').addClass('active')
    if ($(window).width() <= 768) {
      $('#footerMenu').find('.list-item').removeClass('expanded')
      $('#footerMenu .header').find('.icon').toggleClass('active')
    }
  }, [])
  return (
    <>
      <footer>
        <div className="container">
          <ul className="footer-menu" id="footerMenu">
            <li>
              <div className="header">
                顧客服務
                <FaChevronUp className="icon" />
                <FaChevronDown className="icon" />
              </div>
              <ul className="list-item expanded">
                <li>
                  <Link to="#">項目項目1</Link>
                </li>
                <li>
                  <Link to="#">項目2</Link>
                </li>
                <li>
                  <Link to="#">項目項目項目3</Link>
                </li>
                <li>
                  <Link to="#">項目4</Link>
                </li>
                <li>
                  <Link to="#">項目5</Link>
                </li>
                <li>
                  <Link to="#">項目項目4</Link>
                </li>
                <li>
                  <Link to="#">項目5</Link>
                </li>
              </ul>
            </li>
            <li>
              <div className="header">
                保姆服務
                <FaChevronUp className="icon" />
                <FaChevronDown className="icon" />
              </div>
              <ul className="list-item expanded">
                <li>
                  <Link to="/service">保姆照顧服務</Link>
                </li>
                <li>
                  <Link to="/service/query">尋找狗狗保姆</Link>
                </li>
                <li>
                  <Link to="/service/apply">成為狗狗保姆</Link>
                </li>
                <li>
                  <Link to="/service/terms">保姆服務條款</Link>
                </li>
              </ul>
            </li>
            <li>
              <div className="header">
                所有商品
                <FaChevronUp className="icon" />
                <FaChevronDown className="icon" />
              </div>
              <ul className="list-item expanded">
                <li>
                  <Link to="/products?cId=1">飼料</Link>
                </li>
                <li>
                  <Link to="/products?cId=4">狗罐頭/鮮食/餐盒</Link>
                </li>
                <li>
                  <Link to="/products?cId=7">狗籠/狗屋</Link>
                </li>
                <li>
                  <Link to="/products?cId=8">床組</Link>
                </li>
                <li>
                  <Link to="/products?cId=9">狗衣服</Link>
                </li>
              </ul>
            </li>
            <li>
              <div className="header">
                最新消息
                <FaChevronUp className="icon" />
                <FaChevronDown className="icon" />
              </div>
              <ul className="list-item expanded">
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
                  <Link to="#">項目項目4</Link>
                </li>
                <li>
                  <Link to="#">項目項目5</Link>
                </li>
                <li>
                  <Link to="#">項目1</Link>
                </li>
                <li>
                  <Link to="#">項目2</Link>
                </li>
                <li>
                  <Link to="#">項目項目項目項目項目3</Link>
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
              <div className="header">
                關於我們
                <FaChevronUp className="icon" />
                <FaChevronDown className="icon" />
              </div>
              <ul className="list-item expanded">
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
                  <Link to="#">項目項目4</Link>
                </li>
                <li>
                  <Link to="#">項目項目5</Link>
                </li>
                <li>
                  <Link to="#">項目1</Link>
                </li>
                <li>
                  <Link to="#">項目2</Link>
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
