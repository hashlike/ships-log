import { assetBundleFromJSON } from 'opensea-js/lib/utils/utils';
import React from 'react';
import styled from 'styled-components';
// import '../../../src/index.css';
import '../../../src/detail.css';

export default class Detail extends React.Component {
    render() {
        return(
            <div className="body-wrap">
                <Header>
                    <div className="header-wrap">
                        <div className="logo">
                        <img src="https://lh3.googleusercontent.com/zHKLnnABqo3Qewz_zuEsAyGjS2xNAffKmSRpiAjvwW4aogLFSx4KJ9JCZkKR5bEa8GRXHfaRBizv-MXPfYnDPkTBH76v-rvi_sZXnA=s250" alt="로고"></img>
                        </div>
                    </div>
                </Header>
                <main>
                    <div className="detail-container">
                        <div className="img-wrap detail-wrap ml-2">
                            <img src="https://lh3.googleusercontent.com/ngu_efHqsHCOEChgoE3kL2V4j3vMJlLt3P_agnfEm8YPJzZmb_ikmspb8iNz-g7UWAAKz5fJOZovN0TqeNnJTObF6ahD5x7aj0qxcA=s0" alt="이미지" />
                        </div>
                        <div className="info-wrap detail-wrap ml-2">
                            <div className="info-content detail-content">
                                <h4>Brave Girls for 'THE SHOW' Premium Episode (April 27th, 2021)</h4>
                                <p className="owned">KStarLive</p>
                            </div>
                            <div className="about-content detail-content">
                                <p className="title">About</p>
                                <p className="text">On April 27th, Brave Girls appeared on 'THE SHOW' premium episode, showing their charms through 2D1N trip and stage performances.</p>
                            </div>
                            <div className="date-content detail-content">
                                <p className="title">Date</p>
                                <p className="text">Posted in a month</p>
                            </div>
                            <div className="price-content detail-content">
                                <p className="title">Price</p>
                                <p className="text">0.001</p>
                            </div>
                            <div className="chain-content detail-content">
                                <p className="title">Chain Info</p>
                                <div className="sub-content">
                                    <p className="title">Contract Address</p>
                                    <p className="text text-truncate">0x495f947276749ce646f68ac8c248420045cb7b5e</p>
                                </div>
                                <div className="sub-content">
                                    <p className="title">Token ID</p>
                                    <p className="text text-truncate">6208478390770554874290106175905679314885960675171233445461924847721709043713</p>
                                </div>
                                <div className="sub-content">
                                    <p className="title">Blockchain</p>
                                    <p className="text">Ethereum</p>
                                </div>
                            </div>
                        </div>
                    </div>
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