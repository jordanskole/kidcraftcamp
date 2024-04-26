import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    locations: collection({
      label: "Locations",
      path: "locations/*",
      slugField: "name",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        street: fields.text({
          label: "Street"
        }),
        city: fields.text({
          label: "City"
        }),
        state: fields.select({
          label: "State",
          options: [{ label: "Michigan", value: "MI" }, { label: "Ohio", value: "OH" }, { label: "Illinois", value: "IL" }],
          defaultValue: "MI"
        })
      }
    })
  },
});
