export default function TabContent({ code, title, description }) {
  return (
    <div id="tab-content">
      <h2>{title}</h2>
      <p>{description}</p>
      <pre> <code>{code}</code></pre>
    </div>
  );
}
