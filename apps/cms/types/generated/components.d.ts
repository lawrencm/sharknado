import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    ffff: Attribute.Blocks;
  };
}

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    variant: Attribute.Enumeration<
      ['default', 'outline', 'secondary', 'ghost', 'link', 'destructive']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'default'>;
    url: Attribute.String;
    open_in_new_window: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ContentText extends Schema.Component {
  collectionName: 'components_content_texts';
  info: {
    displayName: 'Text';
    icon: 'layer';
  };
  attributes: {
    text: Attribute.Blocks;
  };
}

export interface ContentPageHero extends Schema.Component {
  collectionName: 'components_content_page_heroes';
  info: {
    displayName: 'Page Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    background_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    buttons: Attribute.Component<'elements.button', true>;
    text: Attribute.RichText;
  };
}

export interface ContentMonitoringActivitiesPanel extends Schema.Component {
  collectionName: 'components_content_monitoring_activities_panels';
  info: {
    displayName: 'MonitoringActivitiesPanel';
    icon: 'bulletList';
  };
  attributes: {
    Title: Attribute.String;
    batchSize: Attribute.Integer;
  };
}

export interface ContentCallToAction extends Schema.Component {
  collectionName: 'components_content_call_to_actions';
  info: {
    displayName: 'Call To Action';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    text: Attribute.RichText;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    buttons: Attribute.Component<'elements.button', true>;
  };
}

export interface ContentBlogListing extends Schema.Component {
  collectionName: 'components_content_blog_listings';
  info: {
    displayName: 'Blog Listing';
    icon: 'bulletList';
  };
  attributes: {
    view: Attribute.Enumeration<['Grid', 'List']>;
    number_of_cols: Attribute.Integer;
    items_per_page: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.link': ElementsLink;
      'elements.button': ElementsButton;
      'content.text': ContentText;
      'content.page-hero': ContentPageHero;
      'content.monitoring-activities-panel': ContentMonitoringActivitiesPanel;
      'content.call-to-action': ContentCallToAction;
      'content.blog-listing': ContentBlogListing;
    }
  }
}
