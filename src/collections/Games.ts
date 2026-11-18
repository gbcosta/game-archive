import type { CollectionConfig } from 'payload'
import { slugify } from './utils/slugify'

export const Games: CollectionConfig = {
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

  slug: 'games',
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
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'cover',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
