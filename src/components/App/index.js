import React from 'react';
import styled from 'styled-components';
import Log from '../Log'
import '../../../src/index.css';
import { OpenSeaPort, Network } from 'opensea-js';
import { web3Provider, onNetworkUpdate, OPENSEA_JS_URL, GITHUB_URL } from '../../constants';

export default class App extends React.Component {

  state = {
    accountAddress: null
  }

  constructor(props) {
    super(props)
    this.onChangeAddress()
    onNetworkUpdate(this.onChangeAddress)
  }

  onChangeAddress = () => {
    this.seaport = new OpenSeaPort(web3Provider, {
      networkName: Network.Main
    })
    this.web3 = this.seaport.web3
    this.web3.eth.getAccounts((err, res) => {
      this.setState({
        accountAddress: res[0]
      })
    })
  }

  render() {
    return (
      <div className="body-wrap">
        <Header>
          <div className="header-wrap">
            {/* <div className="hamburger">
            <input type="checkbox" name="menu" id="menu" />
              <label
                  htmlFor="menu"
              >
                  <span className="fir-span" />
                  <span className="sec-span" />
                  <span className="thi-span" />
              </label>
            </div> */}
            <div className="logo">
              <img src="https://lh3.googleusercontent.com/zHKLnnABqo3Qewz_zuEsAyGjS2xNAffKmSRpiAjvwW4aogLFSx4KJ9JCZkKR5bEa8GRXHfaRBizv-MXPfYnDPkTBH76v-rvi_sZXnA=s250" alt="로고"></img>
            </div>
          </div>
        </Header>
        <main>
          {/* <div className="slide-menu">
            <div className="fixed">
              <ul>
                <li>menu1</li>
                <li>menu2</li>
              </ul>
            </div>
          </div> */}
          <div className="banner-wrap">
            <div className="banner-content">
              <div className="banner-title">
                <h1>Background</h1>
                <h4>sub text</h4>
              </div>
            </div>
          </div>
          <Log
            seaport={this.seaport}
            accountAddress={this.state.accountAddress} />
        </main>
      </div>
    )
  }
}

const Header = styled.header`
  width: 100%;
  max-width: 1024px;
  height: 54px;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;;
  background-color: #fff;
`
