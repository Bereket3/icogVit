import { Block, addBlockToChain } from "./block"

for (let i = 1; i < 5; i++) {
  const newBlock = new Block(
    i + 1,
    '91a73664bc84c0baa1fc75ea6e4aa6d1d20c5df664c724e3159aefc2e1186627',
    '',
    1465154705,
    'my block',
    0,
    0
  )
  addBlockToChain(newBlock)
}
