import { Children } from 'react';
import slugify from 'slugify';
//generate lifecycles for content types

function createSlug(title) {
  return slugify(title, { lower: true });
}

module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;

    console.log('beforeCreate', data);

    // if (!data.slug) {
    //   data.slug = createSlug(data.title);
    // } else {
    //   data.slug = createSlug(data.slug);
    // }
  },
  beforeUpdate: async (event) => {
    // On every update, we also need to check that the user
    // didn't clear the slug - if so, regenerate it, otherwise strip
    // any invalid characters
    const { data, where, populate } = event.params;

    let currentItemSlug = data.slug;
    let currentItemFullSlug = data.full_slug;

    if (!data.slug) {
      console.log('create slug from title', data.title);
      data.slug = createSlug(data.title);
      currentItemSlug = data.slug;
    }

    //   const id = where.id;
    //   const existingData = await strapi.entityService.findOne(
    //     'api::page.page',
    //     id,
    //     {
    //       populate: ['parent', 'children'],
    //     }
    //   );

    //   //if existingdata has a parent, update the full slug
    //   if (existingData.parent && existingData.parent.slug) {
    //     currentItemSlug = `${existingData.parent.slug}/${currentItemSlug}`;
    //     data.slug = currentItemSlug;
    //   }
  },
};
