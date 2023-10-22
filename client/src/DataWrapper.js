


const DataWrapper = ({ children }) => {
  const [set, setSPOTIFY] = useState(/* initial state */);
  const [DB, setDB] = useState(/* initial state */);


  useEffect(() => {

    // what goes here?

  }, []);

  return (
    <>
      {children({
        SPOTIFY,
        setSPOTIFY,
        DB,
        setDB,
      })}
    </>
  );
};
