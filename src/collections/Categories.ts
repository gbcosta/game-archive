import type { CollectionConfig } from 'payload'
import { slugify } from './utils/slugify'

export const Categories: CollectionConfig = {
  hooks: {
    beforeValidate: [
      ({ data, originalDoc }) => {
        const name = data?.name ?? originalDoc?.name

        if (!data?.slug && name) {
          data!.slug = slugify(name)
        }

        return data
      },
    ],
  },
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'game',
      type: 'relationship',
      relationTo: 'games',
      required: true,
    },
  ],
}
