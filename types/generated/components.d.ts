import type { Schema, Struct } from '@strapi/strapi';

export interface PageDestinationCard extends Struct.ComponentSchema {
  collectionName: 'components_page_destination_cards';
  info: {
    description: '';
    displayName: 'DestinationCard';
  };
  attributes: {
    cardAlignment: Schema.Attribute.Enumeration<['left', 'right']>;
    city: Schema.Attribute.String;
    country: Schema.Attribute.String;
    countryFlag: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    cvScore: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    savings: Schema.Attribute.String;
  };
}

export interface PageFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_page_faq_sections';
  info: {
    displayName: 'FAQSection';
  };
  attributes: {
    FAQSection: Schema.Attribute.Component<'shared.faq-item', true>;
  };
}

export interface PageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_page_hero_sections';
  info: {
    description: '';
    displayName: 'HeroSection';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
  };
}

export interface PageJsonLd extends Struct.ComponentSchema {
  collectionName: 'components_page_json_lds';
  info: {
    displayName: 'JsonLD';
  };
  attributes: {
    jsonLd: Schema.Attribute.JSON;
  };
}

export interface PagePatientStory extends Struct.ComponentSchema {
  collectionName: 'components_page_patient_stories';
  info: {
    displayName: 'PatientStory';
  };
  attributes: {
    costBreakdown: Schema.Attribute.Blocks;
    destinationFlag: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    testimonial: Schema.Attribute.Text;
  };
}

export interface PagePlainTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_plain_text_blocks';
  info: {
    displayName: 'PlainTextBlock';
  };
  attributes: {
    plainText: Schema.Attribute.Text;
  };
}

export interface PageSlug extends Struct.ComponentSchema {
  collectionName: 'components_page_slugs';
  info: {
    displayName: 'Slug';
  };
  attributes: {
    slug: Schema.Attribute.String;
  };
}

export interface PageTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_text_blocks';
  info: {
    description: '';
    displayName: 'MDTextBlock';
  };
  attributes: {
    markdownText: Schema.Attribute.RichText;
  };
}

export interface PageTitle extends Struct.ComponentSchema {
  collectionName: 'components_page_titles';
  info: {
    description: '';
    displayName: 'Title';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'FAQItem';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface SharedImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_galleries';
  info: {
    displayName: 'ImageGallery';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedList extends Struct.ComponentSchema {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'List';
    icon: '';
  };
  attributes: {
    link: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'richText';
    icon: 'align-justify';
  };
  attributes: {
    RichText: Schema.Attribute.Blocks;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page.destination-card': PageDestinationCard;
      'page.faq-section': PageFaqSection;
      'page.hero-section': PageHeroSection;
      'page.json-ld': PageJsonLd;
      'page.patient-story': PagePatientStory;
      'page.plain-text-block': PagePlainTextBlock;
      'page.slug': PageSlug;
      'page.text-block': PageTextBlock;
      'page.title': PageTitle;
      'shared.button': SharedButton;
      'shared.faq-item': SharedFaqItem;
      'shared.image-gallery': SharedImageGallery;
      'shared.list': SharedList;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
