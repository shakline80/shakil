

const FooterWidget = ({ title, usefulLink }) => {
  return (
    <div>
      <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {title}
      </h3>
      <ul className="text-gray-500 dark:text-gray-400">
        {usefulLink.map((link, index) => (
          <li key={index} className="mb-4">
            <a href={link.href} className="hover:underline">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterWidget;
