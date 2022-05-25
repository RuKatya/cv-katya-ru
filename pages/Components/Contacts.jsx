import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contacts = () => {
  return (
    <div className="footerBar__contactLinks">
      <Link href="https://www.linkedin.com/in/katya-rukosuev/" target="_blank">
        <a target="_blank">
          <LinkedInIcon fontSize="large" />
        </a>
      </Link>
      <Link href="mailto:katya.ru.fullstack@gmail.com">
        <a>
          <EmailIcon fontSize="large" />
        </a>
      </Link>
      <Link href="https://wa.me/972526299431">
        <a target="_blank">
          <WhatsAppIcon fontSize="large" />
        </a>
      </Link>
      <Link href="https://github.com/RuKatya" target="_blank">
        <a target="_blank">
          <GitHubIcon fontSize="large" />
        </a>
      </Link>
    </div>
  );
};

export default Contacts;
