import type { Schema, Struct } from '@strapi/strapi';

export interface InventarioVariante extends Struct.ComponentSchema {
  collectionName: 'components_inventario_variantes';
  info: {
    displayName: 'Variante';
  };
  attributes: {
    Stock: Schema.Attribute.Integer;
    Talla: Schema.Attribute.Enumeration<['XS', 'S', 'M', 'L', 'XL', 'XXL']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'inventario.variante': InventarioVariante;
    }
  }
}
