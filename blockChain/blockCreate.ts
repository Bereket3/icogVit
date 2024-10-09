import { generateNextBlock } from "./block"

for (let i = 0; i < 3; i++) {
  generateNextBlock(
    `very important data ${i}`
  ); 
}
