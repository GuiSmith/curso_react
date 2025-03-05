import { useEffect, useState } from "react";

const Mensagem = ({ mensagem, tipo = true }) => {
  
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000); // Hide after 1 second
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className={`position-fixed bottom-0 end-0 p-3`}>
      <div className={`toast show text-bg-${tipo ? 'success' : 'danger'} border-0`} role="alert">
        <div className="d-flex">
          <div className="toast-body">{mensagem}</div>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={() => setShow(false)}></button>
        </div>
      </div>
    </div>
  );
};

export default Mensagem;