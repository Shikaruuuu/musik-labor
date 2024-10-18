import React, { useState } from "react";
import emailjs from "emailjs-com";
import { TextField, Button, Grid, Typography, Snackbar } from "@mui/material";
import "./InquiryForm.css";

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
    <>
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
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
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
              sx={{ mt: 3, mb: 2 }}>
              送信
            </Button>
          </form>
        </Grid>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="お問い合わせが送信されました。"
        />
      </Grid>
      <div className="underInquiryForm">
        <span className="underInquiryFormText">
          当サイトでは Gmail
          を使用しております。48時間を超えて返信の無い場合は以下をご確認ください。
        </span>
        <span className="underInquiryFormText">
          *迷惑メールフォルダ内をご確認下さい。
          <br />
          *携帯電話会社メール、ドメイン指定をされている方は「@gmail.com」からのメールを受信可能に設定して下さい。
        </span>
        <span className="underInquiryFormText">
          直接お電話でのお問い合わせ頂く場合は、レッスン中や時間外は留守番電話になっておりますので、メッセージを入れて頂ければ折り返しご連絡させて頂きます。
        </span>
        <span className="underInquiryFormText">TEL 045-391-5599</span>
      </div>
      <div className="privacyPolicy">
        <sapn className="privacyPolicyTitle">プライバシーポリシー</sapn>
        <span className="privacyPolicyText">
          「『ムジーク・らぼあ』では個人情報保護に関する法令及びその他の規範を尊重し、個人情報の適正な取得、保有及び利用に努めます。ご送信いただいた個人情報はご連絡目的以外で利用したり無断で第三者に開示・提供することはございません。」
        </span>
      </div>
    </>
  );
}
