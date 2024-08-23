const express = require("express");
const ListItem = require("../models/ListItem");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("API do supermarket list");
});

routes.get("/list-items", async (req, res) => {
  try {
    const items = await ListItem.find();
    return res.json(items);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

routes.post("/list-items", async (req, res) => {
  try {
    const { name, quantity, checked } = req.body;
    if (!name || name.length < 3) {
      return res.status(400).json({
        error: " Nome é obrigatorio e deve contar mais de 3 caracteres",
      });
    }
    if (!quantity || typeof quantity !== "number") {
      return res
        .status(400)
        .json({ error: "Quantidade é obrigatoria e deve ser um numero" });
    }

    const newItem = await ListItem.create({
      name,
      quantity,
      checked: checked || false,
    });
    return res.json(newItem);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

routes.delete("/list-items/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    if (!itemId) {
      return res.status(400).json({
        error: "ID é obrigatorio",
      });
    }
    const deleteItem = await ListItem.findByIdAndDelete(itemId);
    return res.json(deleteItem);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

routes.put("/list-items/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    if (!itemId) {
      return res.status(400).json({
        error: "ID é obrigatorio",
      });
    }

    const { name, quantity, checked } = req.body;
    if (!name || name.length < 3) {
      return res.status(400).json({
        error: " Nome é obrigatorio e deve contar mais de 3 caracteres",
      });
    }
    if (!quantity || typeof quantity !== "number") {
      return res
        .status(400)
        .json({ error: "Quantidade é obrigatoria e deve ser um numero" });
    }

    const updateItem = await ListItem.findByIdAndUpdate(
      itemId,
      {
        name,
        quantity,
        checked: checked || false,
      },
      {
        new: true,
      }
    );
    return res.json(updateItem);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = routes;
