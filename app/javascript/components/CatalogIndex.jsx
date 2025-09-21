import React, { useState } from 'react'
import I18n from '../i18n';

import { Typography, Divider, Row, Col } from 'antd'
import CatalogCard from './CatalogCard'
import FiltersForIndex from './FiltersForIndex'

const { Title } = Typography

const CatalogIndex = ({ catalog_items_data }) => {
  const [currentItemsData, SetCurrentItemsData] = useState(catalog_items_data);

  return (
    <Row gutter={[16, 8]}>
      <Col
        xs={{ span: 24, order: 2 }}
        sm={{ span: 24, order: 2 }}
        md={{ span: 24, order: 2 }}
        lg={{ span: 12, order: 1 }}
        xl={{ span: 12, order: 1 }}
        xxl={{ span: 12, order: 1 }}
      >
        {currentItemsData.map((catalogItem) => (
          <CatalogCard
            catalog={catalogItem}
          />
        ))}
      </Col>

      {catalog_items_data.length && (
        <Col
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          md={{ span: 24, order: 1 }}
          lg={{ span: 12, order: 2 }}
          xl={{ span: 12, order: 2 }}
          xxl={{ span: 12, order: 2 }}
        >
          <Title level={2}>
            {I18n.t("catalogs.filters.title")}

            <Divider />

            <FiltersForIndex
              catalogItemsData={catalog_items_data}
              SetCurrentItemsData={SetCurrentItemsData}
            />
          </Title>
        </Col>
      )}
    </Row >
  )
}

export default CatalogIndex
