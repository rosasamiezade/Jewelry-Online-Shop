import { medias } from "./medias";
import { quickLinks } from "./medias";
interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (): JSX.Element => {
  return (
<footer className="bg-black text-white py-8 text-center">
  <ul className="flex justify-center space-x-8 mb-8">
    {quickLinks.map((quicklink) => (
      <li key={quicklink.id}>
        <a
          href={quicklink.path}
          className="text-gray-200 hover:text-blue-400 transition-colors"
        >
          {quicklink.name}
        </a>
      </li>
    ))}
  </ul>
  <ul className="flex justify-center space-x-8 mb-8">
    {medias.map((media) => (
      <li key={media.id}>
        <a href={media.link}>
          <media.logo
            size={24}
            className="text-gray-200 hover:text-blue-400 transition-colors"
          />
        </a>
      </li>
    ))}
  </ul>
  <aside className="mt-8">
    <p className="text-sm opacity-80">
      Copyright © {new Date().getFullYear()} - All rights reserved by ACME
      Industries Ltd
    </p>
  </aside>
</footer>


  );
};

export default Footer;
