import styles from './contact.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>

      <div className={styles.info}>
        <h2 className={styles.subheading}>Our Address</h2>
        <p>123 Fancy Street, Imaginary City, Dreamland, 45678</p>

        <h2 className={styles.subheading}>Phone Number</h2>
        <p>+123 456 7890</p>

        <h2 className={styles.subheading}>Email Address</h2>
        <p>contact@fancyhotel.com</p>
      </div>

      <form className={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          className={styles.inputField}
        />
        <input
          type="email"
          placeholder="Your Email"
          className={styles.inputField}
        />
        <textarea
          placeholder="Your Message"
          className={styles.textArea}
        ></textarea>
        <div className={styles.buttonDiv}>
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInfo;
