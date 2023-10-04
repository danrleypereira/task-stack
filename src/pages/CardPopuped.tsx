import dynamic from "next/dynamic";

import type { ICardPopudedProps } from "~/utils/types";

const TodoList = dynamic(() => import("./TodoList"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const CardPopuded: React.FC<ICardPopudedProps> = ({ onClose }) => {
    return (
      <div className="fixed z-10 bg-zinc-600 text-black p-10 border-4 min-w-[500px] min-h-[300px] max-h-screen overflow-x-scroll overscroll-contain" style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '8px',
      }}>
        <TodoList />
        <button className="bg-blue-400" onClick={onClose}>Close</button>
      </div>
    );
  };

  export default CardPopuded;