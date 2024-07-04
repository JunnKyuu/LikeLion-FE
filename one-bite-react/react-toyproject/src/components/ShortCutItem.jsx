const ShortCutItem = ({ text, svg }) => {
  return (
    <div className="flex flex-col justify-center h-20 m-5 text-center rounded-md cursor-pointer w-60 align-center hover:bg-gray-100">
      <div className="flex justify-center"> {svg}</div>
      <p className="text-sm text-gray-500"> {text}</p>
    </div>
  );
};

export default ShortCutItem;
