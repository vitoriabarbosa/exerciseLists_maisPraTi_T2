export default function Pagination({ current, total, onChange }) {
  if (total <= 1) return null;

  return (
    <div className="pagination">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="pagination-btn"
      >
        ← Anterior
      </button>

      <span className="pagination-info">
        Página <strong>{current}</strong> de <strong>{total}</strong>
      </span>

      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="pagination-btn"
      >
        Próxima →
      </button>
    </div>
  );
}
