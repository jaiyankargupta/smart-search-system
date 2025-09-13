function App() {
  return (
    <>
      {/*// main ui*/}
      <div className="p-6">
        <div className="text-5xl ">Smart Search System </div>
        <div className="text-xl mt-5">
          Insert the Website Link
          <div>
            <input
              className="border-1 p-2 w-[420px] mt-2"
              type="text"
              placeholder="Enter URL"
            />
            <input
              className="border-1 p-2 w-[120px]"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </div>
      {/*res*/}
      <div className="p-6">
        <div>
          <div className="text-xl mb-4">
            Type your search query here in the natural language:
          </div>
          <input
            className="border-1 p-2 w-[620px]"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
    </>
  );
}

export default App;
