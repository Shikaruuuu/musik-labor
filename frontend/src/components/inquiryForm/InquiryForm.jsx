import React from "react";
import emailjs from "emailjs-com";
import "./InquiryForm.css";

export default function InquiryForm() {
  // sendEmail 関数を定義
  const sendEmail = (e) => {
    e.preventDefault(); // フォームのデフォルト送信を防ぐ

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
        },
        (error) => {
          console.log("Failed to send email:", error);
        }
      );
  };

  // フォームを返す
  return (
    <form onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="お名前" required />
      <input type="text" name="kana_name" placeholder="お名前(カナ)" required />
      <input type="tel" name="phone" placeholder="TEL" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea
        name="message"
        placeholder="お問い合わせ内容"
        required></textarea>
      <button type="submit">送信</button>
    </form>
  );
}
