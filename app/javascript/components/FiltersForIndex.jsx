import React from 'react'
import I18n from '../i18n';

import { Form, Select, Button } from 'antd'

const FiltersForIndex = ({ catalogItemsData, SetCurrentItemsData }) => {
  const [filterForm] = Form.useForm();

  const formatSelect = (item) => ({
    key: item,
    label: item,
    value: item,
  });

  const categoriesList =
    [...new Set(catalogItemsData.map((item) => item.product_category))].map((item) => formatSelect(item));
  const countriesList = [...new Set(catalogItemsData.map((item) => item.country))].map((item) => formatSelect(item));
  const regionsList = [...new Set(catalogItemsData.map((item) => item.region))].map((item) => formatSelect(item));
  const citiesList = [...new Set(catalogItemsData.map((item) => item.city))].map((item) => formatSelect(item));

  const handleFilter = (values) => {
    const filtered = catalogItemsData.filter((item) => {
      return (
        (!values.categories || values.categories.length === 0 || values.categories.includes(item.product_category)) &&
        (!values.countries || values.countries.length === 0 || values.countries.includes(item.country)) &&
        (!values.regions || values.regions.length === 0 || values.regions.includes(item.region)) &&
        (!values.cities || values.cities.length === 0 || values.cities.includes(item.city))
      );
    });

    SetCurrentItemsData(filtered);
  };

  return (
    <Form
      form={filterForm}
      name="farm_unit_edit_form"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 12 }}
      onFinish={handleFilter}
    >
      <Form.Item
        label={I18n.t('catalogs.attributes.product_category')}
        name='categories'
      >
        <Select
          mode="multiple"
          options={categoriesList}
        />
      </Form.Item>

      <Form.Item
        label={I18n.t('catalogs.attributes.country')}
        name='countries'
      >
        <Select
          mode="multiple"
          options={countriesList}
        />
      </Form.Item>

      <Form.Item
        label={I18n.t('catalogs.attributes.region')}
        name='regions'
      >
        <Select
          mode="multiple"
          options={regionsList}
        />
      </Form.Item>

      <Form.Item
        label={I18n.t('catalogs.attributes.city')}
        name='cities'
      >
        <Select
          mode="multiple"
          options={citiesList}
        />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          {I18n.t('catalogs.actions.show_catalog_item')}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FiltersForIndex
