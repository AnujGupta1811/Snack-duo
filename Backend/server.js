// server.js
import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import db from "./connection.js"; // 👈 import instead of require

const app = express();
app.use(cors());
app.use(express.json());

// Signup API
app.post("/api/signup", async (req, res) => {
  const { fullName, email, password, role } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const userRole = role && role === "admin" ? "admin" : "user";

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const query =
      "INSERT INTO users (full_name, email, password, role) VALUES (?, ?, ?, ?)";
    await db.query(query, [fullName, email, hashedPassword, userRole]);

    res.status(201).json({ message: "User registered successfully", role: userRole });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(400).json({ error: "Email already exists" });
    }
    console.error(err);
    return res.status(500).json({ error: "Database error" });
  }
});
// Login API
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Find user by email
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const user = rows[0];

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Success response (later we can add JWT here)
    res.json({
      message: "Login successful",
      user: {
        id: user.id,
        fullName: user.full_name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Database error" });
  }
});
app.get("/api/products", async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        p.id, p.name, p.price, p.original_price, p.image, 
        p.category, p.weight, p.description,
        COALESCE(ROUND(AVG(r.rating),1), 0) AS rating,
        COUNT(r.id) AS reviews
      FROM products p
      LEFT JOIN ratings r ON p.id = r.product_id
      GROUP BY p.id
    `);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});
app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching product" });
  }
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
