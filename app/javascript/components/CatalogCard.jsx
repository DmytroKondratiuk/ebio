import React from 'react'
import { Card, Typography, Divider, Row, Col, Tag } from 'antd'
import { ShoppingCartOutlined, DollarOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

const CatalogCard = ({ catalog }) => {
  return (
    <Card
      className="mb-3"
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={5} style={{ margin: 0 }}>
            {catalog.product_name}
          </Title>
          <Text type="secondary">{catalog.created_at}</Text>
        </div>
      }
    >
      <Text>{catalog.description}</Text>

      <Divider />

      <Row gutter={16}>
        <Col span={12}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <DollarOutlined />
            <Text strong>Ціна:</Text>
            <Tag color="blue">{`${catalog.price} ${catalog.currency}`}</Tag>
          </div>
        </Col>
        <Col span={12}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingCartOutlined />
            <Text strong>Кількість:</Text>
            <Tag color="green">{catalog.quantity}</Tag>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export default CatalogCard
