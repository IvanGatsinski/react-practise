export default function Section({ children, title }) {
  return (
    <section>
      <p className="title">{title}</p>
      {children}
    </section>
  );
}
