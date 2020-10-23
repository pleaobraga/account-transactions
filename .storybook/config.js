import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import './styles/_main.scss'

const req = require.context('../src', true, /\.stories.js/)

function loadStories() {
  addDecorator(withInfo)
  addDecorator(withKnobs)
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
