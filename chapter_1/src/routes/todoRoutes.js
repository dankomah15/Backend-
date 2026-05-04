

import express from "express";
import prisma from "../prismaClient.js"; // ✅ fixed

const router = express.Router();

// Get all todos for logged-in user
router.get("/", async (req, res) => {
  try {
    const todos = await prisma.todo.findMany({
      where: {
        userId: req.userId,
      },
    });

    res.json(todos);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

// Create a new todo
router.post("/", async (req, res) => {
  const { task } = req.body;

  try {
    const todo = await prisma.todo.create({
      data: {
        task,
        userId: req.userId,
      },
    });

    res.json(todo);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

// Update a todo
router.put("/:id", async (req, res) => {
  const { completed } = req.body;
  const { id } = req.params;

  try {
    const updatedTodo = await prisma.todo.update({
      where: {
        id: parseInt(id),
      },
      data: {
        completed: !!completed,
      },
    });

    res.json(updatedTodo);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

// Delete a todo
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.todo.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.send({ message: "Todo deleted" });
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

export default router;
