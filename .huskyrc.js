module.exports = {
  hooks: {
    'pre-push': 'yarn lint && yarn format && yarn test'
  }
}
