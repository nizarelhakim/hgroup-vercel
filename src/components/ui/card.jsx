export const Card = ({ children, className }) => (
  <div className={`bg-white rounded-xl shadow-md ${className}`}>{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);

