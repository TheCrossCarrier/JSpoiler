
Spoiler('block', 'block__spoiler', 'block__content', 'flex')

function Spoiler(blockClass, buttonClass, contentClass,
  contentDisplayType = 'block') {

  document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    const
      block = document.querySelector(`.${blockClass}`),
      button = document.querySelector(`.${buttonClass}`),
      content = document.querySelector(`.${contentClass}`)

    const blockInitialHeight = window.getComputedStyle(block, null)
      .getPropertyValue('height')

    // if block height: 'min-content' etc.
    block.style.height = blockInitialHeight

    let transitionEnd = () => {
      block.removeEventListener('transitionend', transitionEnd)
      content.style.display = 'none'
    }

    button.onclick = () => {
      if (button.classList.contains('spoiler_opened')) {
        block.style.height = blockInitialHeight
        block.addEventListener('transitionend', transitionEnd)
      }
      else {
        block.removeEventListener('transitionend', transitionEnd)
        content.style.display = contentDisplayType
        block.style.height = block.scrollHeight + 'px'
      }

      button.classList.toggle('spoiler_opened')
    }
  })
}