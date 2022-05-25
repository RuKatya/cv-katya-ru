import Image from "next/image";
import Link from "next/link";
const Contacts = () => {
  return (
    <div>
      <Link href="https://www.linkedin.com/in/katya-rukosuev/" target="_blank">
        <a target="_blank">Link</a>
      </Link>
      <Link href="mailto:katya.ru.fullstack@gmail.com">Email</Link>
      <Link href="https://wa.me/972526299431">
        <a target="_blank">Sup</a>
      </Link>
      <Link href="https://github.com/RuKatya" target="_blank">
        <a target="_blank">GITGUB</a>
      </Link>
    </div>
  );
};

export default Contacts;
