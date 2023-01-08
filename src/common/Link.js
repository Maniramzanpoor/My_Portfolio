const Link = ({ prop }) => {
  return (
    <li className="hover:bg-gray-200 hover:dark:bg-primary dark:text-white cursor-pointer py-[15px] px-[20px] list-item">
      {prop}
    </li>
  );
};

export default Link;
