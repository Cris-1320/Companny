import { pool } from "../db.js";


export const getProductos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM productos')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal'
        })
    }
}

export const getProducto = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM productos WHERE id=?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'Producto no encontrado'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({ message: 'Algo salio mal' })
    }
}

export const createProductos = async (req, res) => {
    const { nombre, descripcion, precio } = req.body
    try {
        const [rows] = await pool.query('INSERT INTO productos (nombre, descripcion, precio) VALUES(?,?,?)', [nombre, descripcion, precio])
        res.send({ id: rows.insertId, nombre, descripcion, precio })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal'
        })
    }
}

export const deleteProductos = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM productos WHERE id=?', [req.params.id])

        if (result.affectedRows <= 0) return res.status(404).json({ message: 'Prudcto no encontrado' })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: ' Algo salio mal '
        })
    }
}


export const updateProductos = async (req, res) => {
    const { id } = req.params
    const { nombre, descripcion, precio } = req.body
    try {
        const [result] = await pool.query('UPDATE Productos SET nombre = IFNULL(?, nombre), descripcion =IFNULL(?, descripcion), precio=IFNULL(?, precio) WHERE id=?', [nombre, descripcion, precio, id])

        if (result.affectedRows === 0) return res.status(404).json({ message: 'Producto no encontrado' })

        const [rows] = await pool.query('SELECT * FROM Productos WHERE id=?', [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({ message: 'Algo salio mal' })

    }
}
