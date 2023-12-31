export default function SnippetCreatePage() {
  return (
    <form>
      <h3 className="font-bold m-3">Create Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flext gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input name="title" className="border rounded p-2 w-full"></input>
        </div>
        <div className="flext gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
          ></textarea>
        </div>
        <button type="submit" className="border roubder p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
