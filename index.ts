import * as Index from './src/index.js'
import { prisma } from './src/index.js'

try {
    await Index.startBot();
    await prisma.$disconnect()
} catch (error) {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
}
