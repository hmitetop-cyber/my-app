// استدعاء المكتبات
import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

// مسار تجريبي للتأكد إن السيرفر شغال
app.get("/", (req, res) => {
  res.send("✅ Backend is running successfully!");
});

// مسار لإرسال البيانات إلى n8n
app.post("/send-data", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:5678/webhook-test/test", {
      message: "Hello from backend!"
    });
    res.send("✅ Data sent to n8n successfully!");
  } catch (error) {
    console.error("❌ Error sending data to n8n:", error.message);
    res.status(500).send("❌ Failed to send data to n8n");
  }
});

// تشغيل السيرفر على المنفذ 5000
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
