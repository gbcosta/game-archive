import type { CollectionConfig } from 'payload'
import { slugify } from './utils/slugify'

export const Articles: CollectionConfig = {
  hooks: {
    beforeValidate: [
      ({ data, originalDoc }) => {
        const title = data?.title ?? originalDoc?.title

        if (!data?.slug && title) {
          data!.slug = slugify(title)
        }

        return data
      },
    ],
  },
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  access: {
    read: ({ req }) => {
      if (req.user) {
        return true
      }

      return {
        _status: {
          equals: 'published',
        },
      }
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'game',
      type: 'relationship',
      relationTo: 'games',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      filterOptions: ({ siblingData }) => {
        if (!siblingData?.game) {
          return false
        }
        return {
          game: {
            equals: siblingData.game,
          },
        }
      },
    },
    {
      name: 'relatedArticles',
      type: 'relationship',
      relationTo: 'articles',
      hasMany: true,
      filterOptions: ({ siblingData }) => {
        if (!siblingData?.game) return false

        return {
          game: {
            equals: siblingData.game,
          },
        }
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}
