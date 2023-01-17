import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contacts = ({ windowArea }) => {
  return (
    <div className="footerBar__contactLinks">
      <Link href="https://www.linkedin.com/in/katya-rukosuev/">
        <a target="_blank">
          <LinkedInIcon sx={{ fontSize: windowArea <= 700 ? 40 : 30 }} />
        </a>
      </Link>

      <Link href="https://wa.me/972526299431">
        <a target="_blank">
          <WhatsAppIcon sx={{ fontSize: windowArea <= 700 ? 40 : 30 }} />
        </a>
      </Link>
      <Link href="https://github.com/RuKatya">
        <a target="_blank">
          <GitHubIcon sx={{ fontSize: windowArea <= 700 ? 40 : 30 }} />
        </a>
      </Link>
    </div>
  );
};

export default Contacts;
