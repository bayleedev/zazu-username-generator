const usernameGenerator = require('username-generator')

function delimiter () {
  const delimiters = ['-', ' ', '.', '_', ',', '']
  return delimiters[Math.floor(Math.random() * (delimiters.length - 1))]
}

module.exports = (pluginContext) => {
  return (query, env = {}) => {
    const del = query || delimiter()
    return new Promise((resolve, reject) => {
      const names = []
      for (let i = 0;i<20;i++) {
        const value = usernameGenerator.generateUsername(del)
        names.push({
          icon: 'fa-user-tag',
          title: value,
          subtitle: 'Select item to copy the value to the clipboard.',
          value: value,
        })
      }

      resolve(names)
    })
  }
}
