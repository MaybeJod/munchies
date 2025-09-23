export default function Home() {
  return (
    <main>
      <p>Typography</p>
      <h1 className="text-display">display</h1>
      <h2 className="text-h1">h1</h2>
      <h3 className="text-title">title</h3>
      <h4 className="text-subtitle">subtitle</h4>
      <p className="text-body">body</p>

      <p>colors</p>
      <div className="w-15 h-15 border bg-white">white</div>
      <div className="w-15 h-15 bg-stroke border-stroke">stroke</div>
      <div className="w-15 h-15 border bg-off-white">off-white</div>
      <div className="w-15 h-15 bg-black text-white">black</div>
      <div className="w-15 h-15 bg-green">green</div>
    </main>
  );
}
