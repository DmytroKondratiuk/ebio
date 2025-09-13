// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

// React setup
import React from 'react'
import { createRoot } from 'react-dom/client'
import CatalogCard from './components/CatalogCard'

// Ant Design
import 'antd/dist/reset.css'

document.addEventListener('turbo:load', () => {
  const reactElements = document.querySelectorAll('[data-react-component]')

  reactElements.forEach(element => {
    const componentName = element.dataset.reactComponent
    const props = element.dataset.props ? JSON.parse(element.dataset.props) : {}

    let component
    if (componentName === 'CatalogCard') {
      component = <CatalogCard catalog={props} />
    }

    if (component) {
      const root = createRoot(element)
      root.render(component)
    }
  })
})
