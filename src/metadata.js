export default {
  type: 'peritext-contextualizer',
  id: 'codefiles',
  name: 'Code files player',
  coverage: {
    inlineStatic: false,
    blockStatic: true,
    inlineDynamic: false,
    blockDynamic: true,
  },
  model: {
    acceptedResourceTypes: [{type: 'codefiles'}],
    block: {
      options: [
      ]
    }
  }
}