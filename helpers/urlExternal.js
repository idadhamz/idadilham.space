const urlExternal = (text, url) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <span className="text-blue-700 underline dark:text-blue-300">{text}</span>
    </a>
  );
};

export default urlExternal;
