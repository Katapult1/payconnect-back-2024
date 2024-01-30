import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsHeader extends Schema.Component {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    header: Attribute.String;
    subheader: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.header': ComponentsHeader;
    }
  }
}
