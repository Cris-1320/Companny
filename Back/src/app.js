import express from 'express'
import ProductosRoutes from './routes/employees.routes.js'
import indexRouter from "./routes/index.routes.js";


const app = express()


app.use(express.json())


app.use(indexRouter)
app.use('/api', ProductosRoutes)


app.use((req, res, next) => {
    res.status(400).json({ message: 'Punto no encontrado' })
})

export default app;