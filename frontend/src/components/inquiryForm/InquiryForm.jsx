import React, { useState } from "react";
import emailjs from "emailjs-com";
import { TextField, Button, Grid, Typography, Snackbar } from "@mui/material";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    kana_name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  // バリデーション関数
  const validateForm = () => {
    const { name, kana_name, phone, email, message } = formData;
    return (
      name.trim() !== "" &&
      kana_name.trim() !== "" &&
      /^(?:(\d{10}|\d{11}))$/.test(phone) &&
      /^\S+@\S+\.\S+$/.test(email) &&
      message.trim() !== ""
    );
  };

  // メール送信関数
  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm() || submitting) {
      return;
    }
    setSubmitting(true); // 送信プロセス開始

    emailjs
      .sendForm(
        "service_zks3tg5",
        "template_fbblzhd",
        e.target,
        "asEksTHWzGTbUoJVt"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!");
          setOpen(true); // Snackbarを表示
          setTimeout(() => {
            window.location.href = "/"; // ホームに遷移
          }, 2000);

          // 送信者にも確認メールを送る
          emailjs
            .sendForm(
              "service_zks3tg5",
              "template_d9uzp9i", // 確認メール用のテンプレートID
              e.target,
              "asEksTHWzGTbUoJVt"
            )
            .then((result) => console.log("Confirmation email sent!"))
            .catch((error) =>
              console.log("Failed to send confirmation email:", error)
            );
        },
        (error) => {
          console.log("Failed to send email:", error);
          setSubmitting(false);
        }
      );
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          お問い合わせ
        </Typography>
        <form onSubmit={sendEmail}>
          <TextField
            fullWidth
            required
            label="お名前"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            fullWidth
            required
            label="お名前(カナ)"
            name="kana_name"
            value={formData.kana_name}
            onChange={(e) =>
              setFormData({ ...formData, kana_name: e.target.value })
            }
          />
          <TextField
            fullWidth
            required
            label="TEL"
            name="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="1234567890"
          />
          <TextField
            fullWidth
            required
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <TextField
            fullWidth
            required
            label="お問い合わせ内容"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!validateForm() || submitting}
            sx={{ mt: 3, mb: 2, display: "flex", alignSelf: "center" }}>
            送信
          </Button>
        </form>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="問い合わせが送信されました。"
      />
    </Grid>
  );
}
