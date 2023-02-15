import React from "react";
import "./index.css";
import { Card, Col, Row } from "antd";

const { Meta } = Card;

const App: React.FC = () => (
  <Row gutter={16}>
    <Col span={4}>
      <Card
        hoverable
        style={{ width: 150 }}
        cover={
          <img
            alt="example"
            src="https://ipfs.io/ipfs/QmQYNuLLyWm4gwB7Ecza7qCQRubGDMCjqp32yYdUP4akcz/21.png"
          />
        }
      >
        <Meta title="Etherscan" description="www.instagram.com" />
        <Meta title="OpenSea" description="www.facebook.com" />
      </Card>
    </Col>
    <Col span={4}>
      <Card
        hoverable
        style={{ width: 150 }}
        cover={
          <img
            alt="example"
            src="https://ipfs.io/ipfs/QmQYNuLLyWm4gwB7Ecza7qCQRubGDMCjqp32yYdUP4akcz/22.png"
          />
        }
      >
        <Meta title="Ether scan" description="www.instagram.com" />
        <Meta title="OpenSea" description="www.facebook.com" />
      </Card>
    </Col>
    <Col span={4}>
      <Card
        hoverable
        style={{ width: 150 }}
        cover={
          <img
            alt="example"
            src="https://ipfs.io/ipfs/QmQYNuLLyWm4gwB7Ecza7qCQRubGDMCjqp32yYdUP4akcz/23.png"
          />
        }
      >
        <Meta title="Ether scan" description="www.instagram.com" />
        <Meta title="OpenSea" description="www.facebook.com" />
      </Card>
    </Col>
    <Col span={4}>
      <Card
        hoverable
        style={{ width: 150 }}
        cover={
          <img
            alt="example"
            src="https://ipfs.io/ipfs/QmQYNuLLyWm4gwB7Ecza7qCQRubGDMCjqp32yYdUP4akcz/24.png"
          />
        }
      >
        <Meta title="Ether scan" description="www.instagram.com" />
        <Meta title="OpenSea" description="www.facebook.com" />
      </Card>
    </Col>
    <Col span={4}>
      <Card
        hoverable
        style={{ width: 150 }}
        cover={
          <img
            alt="example"
            src="https://ipfs.io/ipfs/QmQYNuLLyWm4gwB7Ecza7qCQRubGDMCjqp32yYdUP4akcz/25.png"
          />
        }
      >
        <Meta title="Ether scan" description="www.instagram.com" />
        <Meta title="OpenSea" description="www.facebook.com" />
      </Card>
    </Col>
  </Row>
);

export default App;
