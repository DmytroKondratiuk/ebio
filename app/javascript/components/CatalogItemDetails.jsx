import React from 'react'
import I18n from '../i18n';

import { Typography, Badge, Descriptions, Space } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { edit_catalog_path } from '../routes';

const { Title, Link } = Typography

const CatalogItemDetails = ({ catalog }) => {
  const items = [
    {
      key: '1',
      label: I18n.t("catalogs.attributes.product_category"),
      children: I18n.t(`catalogs.product_categories.${catalog.product_category}`),
    },
    {
      key: '2',
      label: I18n.t("catalogs.attributes.price"),
      children: `${catalog.price || "-"}, ${I18n.t(`catalogs.currency.${catalog.currency}`)}`,
    },
    {
      key: '3',
      label: I18n.t("catalogs.attributes.quantity"),
      children: catalog.quantity || "-",
    },
    {
      key: '4',
      label: I18n.t("catalogs.attributes.created_at"),
      span: 3,
      children: catalog.created_at,
    },
    {
      key: '5',
      label: I18n.t("catalogs.attributes.user_name"),
      children: <Badge status="processing" text={catalog.user_name} />,
    },
    {
      key: '6',
      label: I18n.t("catalogs.attributes.email"),
      children: catalog.email || "-",
    },
    {
      key: '7',
      label: I18n.t("catalogs.attributes.phone"),
      children: catalog.phone || "-",
    },
    {
      key: '8',
      label: I18n.t("catalogs.attributes.country"),
      children: catalog.country || "-",
    },
    {
      key: '9',
      label: I18n.t("catalogs.attributes.region"),
      children: catalog.region || "-",
    },
    {
      key: '10',
      label: I18n.t("catalogs.attributes.city"),
      children: catalog.city || "-",
    },
    {
      key: '11',
      label: I18n.t("catalogs.attributes.description"),
      children: catalog.description || "-",
    },
  ];

  const descriptionsTitle = (
    <Space size={8}>
      <Title>
        {catalog.product_name}
      </Title>

      <Link
        href={edit_catalog_path(catalog.id)}
      >
        <EditOutlined />
      </Link>
    </Space>
  )

  return (
    <Descriptions
      title={descriptionsTitle}
      layout="vertical"
      bordered
      items={items}
    />
  )
};

export default CatalogItemDetails;
