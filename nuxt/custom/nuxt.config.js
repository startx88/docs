export default {
  head() {
    return {
      titleTemplate: 'Learn nuxts: %s',
      htmlAttrs: {
        lang: "en"
      },
      bodyAttrs: {
        class: 'app'
      },
      meta: [
        {
          charset: 'utf-8',
          hid: 'utf-8'
        }
      ],
      changed(newInfo, addedTags, removedTags) {
        console.log('Metadata was updated!', newInfo, addedTags, removedTags)
      }
    }
  }
}