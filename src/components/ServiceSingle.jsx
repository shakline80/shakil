import ServiceIconOne from "./Icons/ServiceIconOne";





const ServiceSingle = ({ title, text }) => {
  return (
    <div>
        <h3 class="mb-2 text-2xl font-bold dark:text-white">{title}</h3>

        <p class="font-light text-gray-500 dark:text-gray-400">{text}</p>
    </div>
  );
};

export default ServiceSingle;
