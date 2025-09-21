import React from 'react'
import I18n from '../i18n';

import { Card, Typography, Divider, Row, Col, Tag } from 'antd'
import { ShoppingCartOutlined, DollarOutlined } from '@ant-design/icons'
import { catalog_path } from '../routes';

const { Title, Text, Link } = Typography

const CatalogCard = ({ catalog }) => {
  return (
    <Card
      key={catalog.key}
      className="mb-3"
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href={catalog_path(catalog.id)}>
            <Title level={5} style={{ margin: 0 }}>
              {catalog.product_name}
            </Title>
          </Link>
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
            <Text strong>{`${I18n.t('catalogs.fields.price')}:`}</Text>
            <Tag color="blue">{`${catalog.price} ${catalog.currency}`}</Tag>
          </div>
        </Col>
        <Col span={12}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingCartOutlined />
            <Text strong>{`${I18n.t('catalogs.fields.quantity')}:`}</Text>
            <Tag color="green">{catalog.quantity}</Tag>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export default CatalogCard
